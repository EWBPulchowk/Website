import Hero from '@/components/Hero';
import About from '@/components/About';
import TeamTestimonials from '@/components/TeamTestimonials';
import Events from '@/components/Events';


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
 
      <Hero />
      <About />
      <TeamTestimonials />
      <Events />
    </div>
  );
}