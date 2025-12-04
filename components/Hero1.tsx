"use client";

import Image from "next/image";

export default function Hero1() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#f8fbff] to-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT — Image with glow */}
        <div className="relative w-full h-full md:w-[420px] md:h-[420px] rounded-2xl overflow-hidden">
            <Image
                src="/EWB_Logo.png"
                alt="EWB Pulchowk"
                fill
                className="object-contain" 
            />
        </div>


        {/* RIGHT — Text */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="font-extrabold text-4xl md:text-6xl leading-tight text-[#003f8e]">
            Engineering That <br /> Reaches Beyond <br /> Classrooms
          </h1>

          <p className="mt-5 text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
            Empowering communities through innovation, empathy, and hands-on engineering excellence.
          </p>

          <button className="mt-8 px-8 py-3 bg-[#003f8e] text-white rounded-xl font-semibold hover:bg-blue-700 transition">
            Discover More
          </button>
        </div>

      </div>
    </section>
  );
}
