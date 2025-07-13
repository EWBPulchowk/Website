// types/index.ts
export interface NavigationItem {
    href: string;
    label: string;
  }
  
  export interface Testimonial {
    name: string;
    role: string;
    quote: string;
    image: string;
  }
  
  export interface Event {
    title: string;
    date: string;
    location: string;
    description: string;
    image: string;
    attendees: string;
  }
  
  export interface StatItem {
    value: string;
    label: string;
  }
  
  export interface FooterLink {
    href: string;
    label: string;
  }
  
  export interface FooterSection {
    title: string;
    links: FooterLink[];
  }
  
  export interface ContactInfo {
    icon: React.ComponentType<{ className?: string }>;
    content: string;
  }