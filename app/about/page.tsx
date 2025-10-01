"use client"
import * as Avatar from "@radix-ui/react-avatar"
import teamData from "@/data/members.json"

export default function AboutPage() {
  const featuredTeam = teamData.teamMembers;
  
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
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
            Engineers Without Borders (EWB) Pulchowk Campus Chapter is a student-led initiative that believes in
            engineering for impact. We collaborate with local communities to design and implement sustainable, practical
            solutions to real-world problems, especially in underserved regions of Nepal.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We also invest in developing the next generation of socially conscious engineers through skill-building
            workshops, field projects, and interdisciplinary collaborations.
          </p>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {featuredTeam.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl shadow-lg p-4 text-center border border-gray-100">
                <Avatar.Root className="w-28 h-28 mx-auto mb-4 inline-flex items-center justify-center overflow-hidden rounded-full bg-blue-100">
                  <Avatar.Image 
                    src={member.image || "/placeholder.svg"} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                  <Avatar.Fallback 
                    className="w-full h-full flex items-center justify-center text-lg font-semibold bg-blue-100 text-blue-600"
                    delayMs={600}
                  >
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </Avatar.Fallback>
                </Avatar.Root>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}