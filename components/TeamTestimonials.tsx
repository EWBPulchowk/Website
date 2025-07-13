import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Project Manager",
    quote: "Being part of EWB has transformed my understanding of engineering's role in social impact. Every project teaches us that technical solutions must be rooted in community needs.",
    image: "/api/placeholder/80/80"
  },
  {
    name: "Michael Chen",
    role: "Water Systems Lead",
    quote: "The collaborative approach we take here - working directly with communities - has shaped me into a more empathetic engineer. It's about people, not just technology.",
    image: "/api/placeholder/80/80"
  },
  {
    name: "Aisha Patel",
    role: "Sustainability Coordinator",
    quote: "EWB showed me that engineering can be a force for equity and justice. We're not just building structures; we're building relationships and trust.",
    image: "/api/placeholder/80/80"
  }
];

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 relative">
      <Quote className="text-accent w-8 h-8 mb-4" />
      <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
        <div>
          <h4 className="font-semibold text-primary">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function TeamTestimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-primary mb-4">
            Words from Our Team Members
          </h3>
          <p className="text-lg text-gray-600">
            Hear from the passionate engineers making a difference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
