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
              className={navigationMenuTriggerStyle()}
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/events"
              className={navigationMenuTriggerStyle()}
            >
              Events
            </NavigationMenuLink>
          </NavigationMenuItem>
        
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/about"
              className={navigationMenuTriggerStyle()}
            >
              About Us
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/contact"
              className={navigationMenuTriggerStyle()}
            >
              Contact Us
            </NavigationMenuLink>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
