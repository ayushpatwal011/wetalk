"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import NavItems from "./NavItems";
import { LogOut } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full z-50 bg-blue-600  text-black fixed">
      <div className="container mx-auto px-4 py-1  md:py-4 flex justify-between items-center ">
        {/* Logo */}

        <div className="text-lg font-bold">
          <Image src={"/logo.png"} alt="Logo" width={40} height={40} />
        </div>

        {/* Desktop Menu */}
        <div className="flex items-center gap-x-4">
          <nav className="hidden md:flex ">
            <div>
              <NavItems />
            </div>
          </nav>
          <div>
            <SignedIn>
              <div className="flex gap-2">
              <UserButton />
              </div>
                
            </SignedIn>
            <SignedOut>
              <Button className="bg-black">
                <SignInButton />
              </Button>
            </SignedOut>
          </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
            >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
              />
          </svg>
        </button>
              </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 p-4 bg-black">
          <div className="text-white text-sm flex gap-6">
            <NavItems />
            <SignedIn>
              <div className="flex flex-col">
                
              <LogOut/>
              <p>Logout</p>
              </div>
              </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
