interface StatItem {
    value: string;
    label: string;
  }
  
  const stats: StatItem[] = [
    { value: '50+', label: 'Projects Completed' },
    { value: '200+', label: 'Active Members' },
  ];
  
  export default function About() {
    return (
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700 mb-6">
                Engineers Without Borders builds a better world through engineering projects 
                that empower communities to meet their basic human needs and equip leaders 
                to solve the world's most pressing challenges.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We work alongside local partners to design and implement sustainable solutions 
                that create lasting impact in communities around the world.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500">Mission Impact Image</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
  