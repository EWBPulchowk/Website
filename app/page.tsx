import Hero from '@/components/Hero';
import About from '@/components/About';
import TeamTestimonials from '@/components/TeamTestimonials';
import Events from '@/components/Events';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <TeamTestimonials />
      <Events />
    </div>
  );
}