import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { initialSiteData, SiteData } from '../data/initialData';
import { db, auth } from '../lib/firebase';
import { doc, getDoc, setDoc, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

interface SiteDataContextType {
  data: SiteData;
  isAdmin: boolean;
  isAuthenticated: boolean;
  isLoading: boolean;
  setIsAdmin: (val: boolean) => void;
  updateData: (path: string[], value: any) => void;
  saveData: () => void;
}

const SiteDataContext = createContext<SiteDataContextType | undefined>(undefined);

// Helper function to dynamically update nested object properties
function updateNestedProperty(obj: any, path: string[], value: any): any {
  if (path.length === 1) {
    return { ...obj, [path[0]]: value };
  }
  const [head, ...rest] = path;
  // If it's an array, handle it slightly differently to preserve array structure
  if (Array.isArray(obj)) {
    const newArr = [...obj];
    const index = parseInt(head, 10);
    newArr[index] = updateNestedProperty(obj[index], rest, value);
    return newArr;
  }
  
  return {
    ...obj,
    [head]: updateNestedProperty(obj[head] || {}, rest, value)
  };
}

export const SiteDataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<SiteData>(initialSiteData);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  // Load from Firestore on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const docSnap = await getDoc(doc(db, 'siteContent', 'main'));
        if (docSnap.exists()) {
          const fetchedData = docSnap.data() as SiteData;
          setData({ ...initialSiteData, ...fetchedData });
        }
      } catch (e) {
        console.error('Failed to load site data from Firestore', e);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
    
    // Check if URL hash indicates admin mode activation
    const checkHash = () => {
      if (window.location.hash === '#admin') {
        setIsAdmin(true);
        document.body.classList.add('admin-mode');
        window.location.hash = '#home';
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  // Update specific field in state
  const updateData = (path: string[], value: any) => {
    setData(prev => updateNestedProperty(prev, path, value));
  };

  // Persist state to Firestore
  const saveData = async () => {
    try {
      // 1. Archive current version to history first
      await addDoc(collection(db, 'siteHistory'), {
        ...data,
        savedAt: serverTimestamp(),
      });

      // 2. Write new data
      await setDoc(doc(db, 'siteContent', 'main'), data);
      alert('Changes saved to Firebase successfully!');
    } catch (e) {
      console.error("Error saving data:", e);
      alert('Failed to save to Firebase. Check console.');
    }
  };

  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '3px solid rgba(123, 92, 229, 0.15)',
          borderTopColor: '#7B5CE5',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <SiteDataContext.Provider value={{ data, isAdmin, isAuthenticated, isLoading, setIsAdmin, updateData, saveData }}>
      {children}
    </SiteDataContext.Provider>
  );
};

export const useSiteData = () => {
  const context = useContext(SiteDataContext);
  if (context === undefined) {
    throw new Error('useSiteData must be used within a SiteDataProvider');
  }
  return context;
};
