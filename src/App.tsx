import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import FeaturedProjects from './components/FeaturedProjects';
import OurServices from './components/OurServices';
import ContactCTA from './components/ContactCTA';
import FloatingContact from './components/FloatingContact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', color: '#050505', position: 'relative', display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
      <Navbar />
      <main style={{ flex: 1, width: '100%' }}>
        <Hero />
        <Services />
        <FeaturedProjects />
        <OurServices />
        <ContactCTA />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
