import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { initialSiteData, SiteData } from '../data/initialData';

interface SiteDataContextType {
  data: SiteData;
  isAdmin: boolean;
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

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('gloom_site_data');
      if (saved) {
        const parsedData = JSON.parse(saved);
        // Merge with initial data to ensure new sections (like footer) exist if not in saved data
        setData({ ...initialSiteData, ...parsedData });
      }
    } catch (e) {
      console.error('Failed to load site data', e);
    }
    
    // Check if URL hash indicates admin mode activation
    const checkHash = () => {
      if (window.location.hash === '#admin') {
        setIsAdmin(true);
        localStorage.setItem('gloom_admin_mode', 'true');
        document.body.classList.add('admin-mode');
        // Redirect to home after activating admin
        window.location.hash = '#home';
      }
    };
    // Check localStorage for persisted admin mode
    const storedAdmin = localStorage.getItem('gloom_admin_mode') === 'true';
    if (storedAdmin) {
      setIsAdmin(true);
      document.body.classList.add('admin-mode');
    }
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  // Update specific field in state
  const updateData = (path: string[], value: any) => {
    setData(prev => updateNestedProperty(prev, path, value));
  };

  // Persist state to localStorage
  const saveData = () => {
    localStorage.setItem('gloom_site_data', JSON.stringify(data));
    alert('Changes saved locally!');
  };

  return (
    <SiteDataContext.Provider value={{ data, isAdmin, setIsAdmin, updateData, saveData }}>
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
