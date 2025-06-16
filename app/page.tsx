"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { MarqueeDemoVertical } from "@/components/VerticalMarquee";
import {
  easeIn,
  easeInOut,
  easeOut,
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

export default function Home() {
  const firstSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: firstSectionRef,
    offset: ["start end", "start start"],
  });

  return (
    <main>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#ff0088",
        }}
      />
      <section className="h-screen w-full pb-36 flex justify-between items-center">
        <div className="flex items-center justify-between h-full px-24">
          <hgroup>
            <p className="text-7xl text-white font-black transform">
              Connecting Lives,
              <br />
              Building Bridges
            </p>

            <p className="mt-4 text-white font-light text-xl max-w-lg tracking-wide">
              We are a team of passionate engineering students driving social
              impact through sustainable, community-driven engineering projects
              across Nepal.
            </p>
          </hgroup>
        </div>
        <div className="mr-24">
          <Card className="relative flex items-center justify-center p-1">
            <DirectionAwareHover
              imageUrl={
                "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            >
              <p className="font-bold text-xl">In the mountains</p>
              <p className="font-normal text-sm">$1299 / night</p>
            </DirectionAwareHover>
          </Card>
        </div>
      </section>
      <motion.section
        ref={firstSectionRef}
        className="h-screen w-full flex items-center justify-center bg-slate-100 rounded-4xl shadow"
        style={{
          borderRadius: useTransform(
            scrollYProgress,
            [0, 1],
            ["12rem", "0rem"],
            {
              ease: easeInOut,
            }
          ),
        }}
      >
        <h2 className="text-6xl font-black text-center mb-12">
          <span className="bg-gradient-to-r from-[#00B4DB] to-[#0083B0] bg-clip-text text-transparent">
            Our Projects
          </span>
        </h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {[...Array(3)].map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>Rainwater Harvesting, Gorkha</CardTitle>
                <CardDescription>2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Designed and implemented a rainwater harvesting system for a
                  remote village school.
                </p>
              </CardContent>
              <CardFooter>
                <a href="#" className="text-blue-600 hover:underline">
                  Read more →
                </a>
              </CardFooter>
            </Card>
          ))}
        </div> */}
        <div className="w-2xl">
          <MarqueeDemoVertical />
        </div>
      </motion.section>
      <section className="h-screen w-full"></section>
    </main>
  );
}
