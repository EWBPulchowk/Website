import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { EventRegistrationConfig } from '@/types/types';
import { Phone } from 'lucide-react';

export default function RegistrationHero({
  config,
}: {
  config: EventRegistrationConfig;
}) {
  return (
    <div className="relative pt-20 min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#306da2]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30" />
      </div>

      {/* Main Content Container */}
      <div className="container relative z-10 px-6 mx-auto ">
        <div className="flex flex-col items-center justify-between gap-8 ">
          {/* Left Content Section */}
          <div className="flex-1 text-center md:text-left">
            <div className="relative mb-6">
              {/* Logo positioning */}
              <div className="absolute -top-24 md:-top-32 scale-150 right-4 md:right-[-120px] w-24 h-24 md:w-32 md:h-32">

                <img
                  src="/alt-logo.png"
                  alt="EWB Logo"
                  className="object-contain w-full h-full opacity-90"
                />
              </div>
              
              <h1 className="text-4xl font-bold text-white md:text-6xl ">
                {config.title}
              </h1>
            </div>
            
            <div className="w-32 h-1 mx-auto mb-8 md:mx-0 bg-gradient-to-r from-secondary via-primary to-secondary" />
            
            <p className="mb-10 text-lg text-softwhite/80 md:text-xl">
              {config.shortDescription}
            </p>
            
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <Button className="px-8 py-6 text-lg bg-black text-white hover:bg-black/90">
                {config.date}
              </Button>
                   {/* Contact Information */}
                  {/* Phone Numbers */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 transition-colors rounded-lg bg-white hover:bg-white/5">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-softwhite/60">Prabesh Khatiwada</p>
                        <p className="font-medium">986-4087262</p>
                      </div>
                    </div>
                  
                  </div>
             
            </div>
          </div>

          {/* Right Content Section - Featured Card
          <div className=" w-full ">
            <Card className="p-6 bg-transparent bg-white text-[#306da2] backdrop-blur-sm border-primary/20">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold ">
                  Member Benefits
                </h3>
                <ul className="space-y-3 text-softwhite/80">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Access to global engineering projects
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Professional development opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Networking with industry experts
                  </li>
                  <li className="flex items-center gap-2 ">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Community impact initiatives
                  </li>
                </ul>

              </div>
            </Card>
          </div> */}
        </div>
      </div>
    </div>
  );
}