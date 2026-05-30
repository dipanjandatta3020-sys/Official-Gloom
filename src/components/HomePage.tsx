import Hero from './Hero';
import Services from './Services';
import FeaturedProjects from './FeaturedProjects';
import OurServices from './OurServices';

export default function HomePage({ openServices }: { openServices: () => void }) {
  return (
    <>
      <Hero />
      <Services openServices={openServices} />
      <FeaturedProjects />
      <OurServices openServices={openServices} />
    </>
  );
}
