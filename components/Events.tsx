"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  images: string[];
  location?: string;
}

interface EventCardProps {
  event: Event;
  onClick: () => void;
}

function EventCard({ event, onClick }: EventCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer"
      onClick={onClick}
    >
      <div className="h-48 bg-gray-200 relative">
        <Image
          src={`/events/${event.images[0]}`}
          alt={event.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
          <span className="text-xs font-medium text-gray-700">
            {new Date(event.date).toLocaleDateString()}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-semibold text-primary mb-2">{event.title}</h4>
        <p className="text-gray-600 text-sm mb-3">{event.description}</p>
        {event.location && (
          <p className="text-xs text-gray-500 flex items-center">
            📍 {event.location}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch events from JSON file
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/data/events.json');
        const eventsData = await response.json();
        setEvents(eventsData);
      } catch (error) {
        console.error('Error fetching events:', error);
        // Fallback data if JSON fails
       
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleNext = () => {
    if (selectedEvent) {
      setCurrentIndex((prev) => (prev + 1) % selectedEvent.images.length);
    }
  };

  const handlePrev = () => {
    if (selectedEvent) {
      setCurrentIndex(
        (prev) => (prev - 1 + selectedEvent.images.length) % selectedEvent.images.length
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSelectedEvent(null);
    } else if (e.key === 'ArrowRight') {
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      handlePrev();
    }
  };

  if (loading) {
    return (
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading events...</p>
          </div>
        </div>
      </section>
    );
  }

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
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onClick={() => {
                setSelectedEvent(event);
                setCurrentIndex(0);
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Modal Dialog */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onKeyDown={handleKeyDown}
            tabIndex={-1}
          >
            {/* Backdrop with blur effect */}
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              className="absolute inset-0 bg-black/60"
              onClick={() => setSelectedEvent(null)}
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedEvent.title}
                    </h2>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>📅 {new Date(selectedEvent.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                      {selectedEvent.location && (
                        <span>📍 {selectedEvent.location}</span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                <p className="text-gray-700 mt-3">{selectedEvent.description}</p>
              </div>

              {/* Image Gallery */}
              <div className="relative">
                <div className="relative w-full h-[500px] bg-gray-100">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                      className="absolute w-full h-full"
                    >
                      <Image
                        src={`/events/${selectedEvent.images[currentIndex]}`}
                        alt={`${selectedEvent.title} - Image ${currentIndex + 1}`}
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Arrows */}
                {selectedEvent.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {currentIndex + 1} / {selectedEvent.images.length}
                </div>
              </div>

              {/* Image Thumbnails */}
              {selectedEvent.images.length > 1 && (
                <div className="p-4 border-t border-gray-200">
                  <div className="flex gap-2 overflow-x-auto">
                    {selectedEvent.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 ${
                          index === currentIndex 
                            ? 'ring-2 ring-primary ring-offset-2' 
                            : 'opacity-60 hover:opacity-100'
                        }`}
                      >
                        <Image
                          src={`/events/${image}`}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}