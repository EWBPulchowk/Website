import Link from "next/link"
import { ArrowRight, Users, Target, Globe, Calendar, Wrench,ChevronDown } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import teamData from "@/data/members.json"
import * as Avatar from "@radix-ui/react-avatar"
import eventData from "@/data/events.json"
import faqData from "@/data/faq.json"
import * as Collapsible from "@radix-ui/react-collapsible"
import Hero1 from "@/components/Hero1"


export default function HomePage() {
  const featuredTeam = teamData.teamMembers.slice(0, 6)
  const featuredEvents = eventData.events.slice(0,4);


  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
     
     <Hero1/>


      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate engineers and leaders working together to create positive change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredTeam.map((member, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
               
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.position}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              View Full Team
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Past Events</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us for workshops, seminars, and community engagement activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 text-blue-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{event.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/events"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors"
            >
              View All Events
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about EWB Pulchowk and how you can get involved
            </p>
          </div>

          <div className="space-y-4">
            {faqData.faqs.map((faq) => (
              <Collapsible.Collapsible key={faq.id} className="border border-gray-200 rounded-xl">
                <Collapsible.CollapsibleTrigger className="flex items-center justify-between w-full p-6 text-left hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200 data-[state=open]:rotate-180" />
                </Collapsible.CollapsibleTrigger>
                <Collapsible.Content className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </Collapsible.Content>
              </Collapsible.Collapsible>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Make a Difference?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our community of passionate engineers working to create positive change through innovative,
              sustainable solutions.
            </p>
            <Link
              href="/general-member"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg"
            >
              General Members Application
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
