import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Engineering a Better World
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We bridge communities through sustainable engineering solutions, 
            empowering local partnerships and creating lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
              Get Involved <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
