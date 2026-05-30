import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import ProjectsPage from './components/ProjectsPage';
import ProjectDetailPage from './components/ProjectDetailPage';
import ContactCTA from './components/ContactCTA';
import FloatingContact from './components/FloatingContact';
import Footer from './components/Footer';
import { SiteDataProvider } from './context/SiteDataContext';
import SaveAdminPanel from './components/admin/SaveAdminPanel';

export default function App() {
  const [route, setRoute] = useState(() => window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#home');
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToServices = () => {
    window.location.hash = '#services';
  };

  const navigateToProjects = () => {
    window.location.hash = '#projects';
  };

  const navigateToHome = () => {
    window.location.hash = '#home';
  };

  return (
    <SiteDataProvider>
      <div style={{ minHeight: '100vh', backgroundColor: '#06030D', fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', color: '#F0EBF8', position: 'relative', display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
        <SaveAdminPanel />
        <Navbar onServicesClick={navigateToServices} onProjectsClick={navigateToProjects} onLogoClick={navigateToHome} />
        
        <main style={{ flex: 1, width: '100%', position: 'relative' }}>
          <AnimatePresence mode="wait">
            {route === '#services' ? (
              <motion.div
                key="services"
                initial={{ y: '100vh', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '20vh', opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{ width: '100%', backgroundColor: '#ffffff' }}
              >
                <ServicesPage />
                <div style={{
                  background: 'linear-gradient(160deg, #0E0818 0%, #1A1124 30%, #2E1A4A 65%, #3D2468 100%)',
                  borderRadius: '80px 80px 0 0',
                  marginTop: '-80px',
                  position: 'relative',
                  zIndex: 3,
                  overflow: 'hidden',
                }}>
                  <ContactCTA />
                  <Footer />
                </div>
              </motion.div>
            ) : route === '#projects' ? (
              <motion.div
                key="projects"
                initial={{ y: '100vh', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '20vh', opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{ width: '100%', backgroundColor: '#ffffff' }}
              >
                <ProjectsPage />
                <div style={{
                  background: 'linear-gradient(160deg, #0E0818 0%, #1A1124 30%, #2E1A4A 65%, #3D2468 100%)',
                  borderRadius: '80px 80px 0 0',
                  marginTop: '-80px',
                  position: 'relative',
                  zIndex: 3,
                  overflow: 'hidden',
                }}>
                  <ContactCTA />
                  <Footer />
                </div>
              </motion.div>
            ) : route.startsWith('#project-') ? (
              <motion.div
                key={`project-detail-${route}`}
                initial={{ y: '100vh', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '20vh', opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{ width: '100%', backgroundColor: '#ffffff' }}
              >
                <ProjectDetailPage id={parseInt(route.split('-')[1], 10)} />
                <div style={{
                  background: 'linear-gradient(160deg, #0E0818 0%, #1A1124 30%, #2E1A4A 65%, #3D2468 100%)',
                  borderRadius: '80px 80px 0 0',
                  marginTop: '-80px',
                  position: 'relative',
                  zIndex: 3,
                  overflow: 'hidden',
                }}>
                  <ContactCTA />
                  <Footer />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{ width: '100%' }}
              >
                <HomePage openServices={navigateToServices} />
                <div style={{
                  background: 'linear-gradient(160deg, #0E0818 0%, #1A1124 30%, #2E1A4A 65%, #3D2468 100%)',
                  borderRadius: '80px 80px 0 0',
                  marginTop: '-80px',
                  position: 'relative',
                  zIndex: 3,
                  overflow: 'hidden',
                }}>
                  <ContactCTA />
                  <Footer />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <FloatingContact />
      </div>
    </SiteDataProvider>
  );
}
