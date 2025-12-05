"use client";

import * as React from "react";
import EWBLogo from "@/public/EWB Logo.svg";
import Logo from "@/public/Logo.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <NavigationMenu className="min-w-screen border-b border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-700">
      <NavigationMenuList className="flex min-w-screen px-16 py-4 items-center justify-between">
        <div>
          <NavigationMenuItem>
            <Link href={"/"} className="flex items-center h-full">
              <Image src={Logo} alt="EWB Logo" height={60} />
            </Link>
          </NavigationMenuItem>
        </div>

        <div className="flex items-center gap-4">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className={`${navigationMenuTriggerStyle()} font-bold text-md text-[#295393] hover:bg-[#295393] hover:text-white rounded-md px-3 py-2 transition-colors duration-200`}
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/events"
              className={`${navigationMenuTriggerStyle()} font-bold text-md text-[#295393] hover:bg-[#295393] hover:text-white rounded-md px-3 py-2 transition-colors duration-200`}
            >
              Events
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/about"
              className={`${navigationMenuTriggerStyle()} font-bold text-md text-[#295393] hover:bg-[#295393] hover:text-white rounded-md px-3 py-2 transition-colors duration-200`}
            >
              About Us
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/blogs"
              className={`${navigationMenuTriggerStyle()} font-bold text-md text-[#295393] hover:bg-[#295393] hover:text-white rounded-md px-3 py-2 transition-colors duration-200`}
            >
              Blogs
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/alumni"
              className={`${navigationMenuTriggerStyle()} font-bold text-md text-[#295393] hover:bg-[#295393] hover:text-white rounded-md px-3 py-2 transition-colors duration-200`}
            >
              Alumni Diaries
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/contact"
              className={`${navigationMenuTriggerStyle()} font-bold text-md text-[#295393] hover:bg-[#295393] hover:text-white rounded-md px-3 py-2 transition-colors duration-200`}
            >
              Contact Us
            </NavigationMenuLink>
          </NavigationMenuItem>
        </div>

        
        
      </NavigationMenuList>
    </NavigationMenu>
  );
}
