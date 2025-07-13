// components/Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import EWBLogo from "@/public/EWB Logo.svg";

export default function Footer() {
  return (
    <footer className="bg-[#1B2431] text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-12 md:grid-cols-3">
        {/* --- Brand ---------------------------------------------------- */}
        <div className="flex flex-col items-start">
          <Link href="/" aria-label="Home">
            <Image
              src={EWBLogo}
              alt="Engineers Without Borders Logo"
              width={140}
              height={140}
              priority
            />
          </Link>
        </div>

        {/* --- Quick Links --------------------------------------------- */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">QUICK LINKS</h3>
          <ul className="space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/events", label: "Events" },
              { href: "/project", label: "Projects" },
              { href: "/faq", label: "FAQ" },
              { href: "/contact", label: "Contact Us" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-600"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Contact Us --------------------------------------------- */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">CONTACT US</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="tel:+9779867331247"
                className="flex items-center gap-2 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-600"
              >
                <Phone className="h-4 w-4 shrink-0" />
                +977 986-7331247
              </a>
            </li>
            <li>
              <a
                href="mailto:ewbpulchowk@gmail.com"
                className="flex items-center gap-2 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-600"
              >
                <Mail className="h-4 w-4 shrink-0" />
                ewbpulchowk@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/pzf8cnb1rrpJNoNm8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-600"
              >
                <MapPin className="h-4 w-4 shrink-0" />
                Pulchowk Campus, Lalitpur
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
