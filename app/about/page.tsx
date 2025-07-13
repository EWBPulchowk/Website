"use client";

export default function AboutPage() {
  const team = [
    {
      name: "Aarav Shrestha",
      role: "President",
      image: "/images/team/aarav.jpg",
    },
    {
      name: "Sneha Koirala",
      role: "Vice President",
      image: "/images/team/sneha.jpg",
    },
    {
      name: "Bikash Thapa",
      role: "Project Lead",
      image: "/images/team/bikash.jpg",
    },
    {
      name: "Anisha Lama",
      role: "Outreach Coordinator",
      image: "/images/team/anisha.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 font-medium mb-6 text-sm">
            Engineers Without Borders
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            About <span className="text-blue-600">EWB Pulchowk</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          
            Engineers Without Borders (EWB) Pulchowk Campus Chapter is a
            student-led initiative that believes in engineering for impact. We
            collaborate with local communities to design and implement
            sustainable, practical solutions to real-world problems, especially
            in underserved regions of Nepal.
            <br></br>
          </p>
          <p>
           
          </p>
          <p>
            We also invest in developing the next generation of socially
            conscious engineers through skill-building workshops, field
            projects, and interdisciplinary collaborations.
          </p>
       
        </div>
      </section>

      {/* Descriptive About Section */}
      <section className="pb-12 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 border border-gray-100 text-gray-700 text-base leading-relaxed space-y-6">
          
        </div>
      </section>

      {/* Our Team Section */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl shadow-lg p-4 text-center border border-gray-100"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
