import { Calendar, MapPin, Users } from 'lucide-react';

interface Event {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  attendees: string;
}

const events: Event[] = [
  {
    title: "Water Filtration Workshop",
    date: "March 15, 2024",
    location: "Engineering Building, Room 205",
    description: "Hands-on workshop teaching sustainable water filtration techniques for rural communities.",
    image: "/api/placeholder/400/250",
    attendees: "45 students"
  },
  {
    title: "Solar Panel Installation Training",
    date: "February 28, 2024",
    location: "Campus Solar Lab",
    description: "Technical training session on solar panel installation and maintenance for developing regions.",
    image: "/api/placeholder/400/250",
    attendees: "30 students"
  },
  {
    title: "Community Partnership Summit",
    date: "February 10, 2024",
    location: "Student Union Auditorium",
    description: "Annual summit bringing together community partners, students, and faculty to discuss ongoing projects.",
    image: "/api/placeholder/400/250",
    attendees: "120 attendees"
  },
  {
    title: "Fundraising Gala",
    date: "January 25, 2024",
    location: "Grand Ballroom",
    description: "Annual fundraising event to support our international development projects.",
    image: "/api/placeholder/400/250",
    attendees: "200 guests"
  },
  {
    title: "Bridge Design Competition",
    date: "January 18, 2024",
    location: "Engineering Plaza",
    description: "Student competition designing sustainable bridge solutions for rural communities.",
    image: "/api/placeholder/400/250",
    attendees: "60 participants"
  },
  {
    title: "Global Impact Conference",
    date: "December 15, 2023",
    location: "Conference Center",
    description: "Multi-day conference featuring speakers from around the world discussing engineering for social good.",
    image: "/api/placeholder/400/250",
    attendees: "300 attendees"
  }
];

interface EventCardProps {
  event: Event;
}

function EventCard({ event }: EventCardProps){
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-300 flex items-center justify-center">
        <span className="text-gray-500">Event Image</span>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-semibold text-primary mb-2">{event.title}</h4>
        <p className="text-gray-600 mb-4">{event.description}</p>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            {event.date}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-2" />
            {event.location}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Users className="w-4 h-4 mr-2" />
            {event.attendees}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Events(){
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-primary mb-4">
            Events We Organized
          </h3>
          <p className="text-lg text-gray-600">
            Engaging our community through impactful events and educational opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}