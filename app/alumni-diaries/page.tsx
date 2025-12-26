"use client";

import Image from "next/image";

export default function AlumniDiaries() {
  return (
    <div className="max-w-4xl mx-auto my-12 p-10 bg-white rounded-2xl shadow-2xl">
      <h1 className="text-4xl font-extrabold text-center text-[#295393] mb-12">
        Alumni Diaries
      </h1>

      {/* Alumni Card */}
      <div className="flex flex-col md:flex-row items-start gap-10 bg-gray-50 p-8 rounded-xl shadow-lg">
        {/* Photo Placeholder */}
        <div className="w-48 h-64 relative flex-shrink-0">
          <Image
            src="/alumni/jeevan.jpg" // replace with actual photo later
            alt="Jeevan"
            fill
            className="rounded-xl object-cover border-4 border-[#295393]"
          />
        </div>

        {/* Message */}
        <div className="flex-1 space-y-5">
          <h2 className="text-3xl font-semibold text-[#295393]">
            Jeevan
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Congratulations to the newly elected committee of Engineers Without Borders Pulchowk. Serving as an Executive for the club was one of the best and memorable experiences of my life. My formal tenure with EWB Pulchowk may have ended, but the chapters we created, lessons we learned and the friendships we earned remain deeply woven into my heart.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Engineers Without Borders isn't just about crossing geographical boundaries; it's about dissolving the borders between strangers until they become friends, colleagues, and family. The strength of EWB Pulchowk has always been in its collective spirit, and as an executive, my role was simply to tend that flame, not to claim it as my own. On leading the team, I discovered, isn’t about having all the answers. It's about creating space for others to find theirs. Learning to collaborate with people, to enjoy the process, and execute collectively as a team. On top of that, to be more pragmatic of what we do. Journey worth having and the curves worth turning around. EWB Pulchowk was the community I didn't know I needed.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The team meetings and fun moments we had, the hits and trials we did, some setbacks we faced, the team conflicts we had, the jokes that we laughed at, —these weren't distractions from our mission. They were the foundation of it. It made us get to know each other better and work on our weaknesses as a team. It brought us even closer. And one thing for sure - a sustainable community starts with sustainable relationships.
          </p>

          <p className="text-gray-700 leading-relaxed">
            To the newly elected team. You're not just maintaining a legacy, you're creating new chapters of it. Be bold in your vision, humble in your approach, trust the process and trust each other. Set boundaries, celebrate even your small wins. Communicate well with each other. Be empathetic, take care of yourself and the people around you.
          </p>

          <p className="text-gray-900 font-semibold mt-6">
            With Love,<br />Jeevan
          </p>
        </div>
      </div>
    </div>
  );
}
