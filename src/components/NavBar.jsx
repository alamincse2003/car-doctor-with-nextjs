"use client";
import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white  mt-5 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-xl font-bold text-blue-600">
            <Link href="/">
              <Image
                src={"/assets/logo.svg"}
                width={107}
                height={80}
                alt="brand logo"
              />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 font-semibold">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-blue-600"
            >
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>

          <div className="hidden md:block font-semibold">
            <Link href="/appointment">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
                Appointment
              </button>
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white px-4 pt-4 pb-6 space-y-2 font-semibold">
          <Link href="/" className="block text-gray-700">
            Home
          </Link>
          <Link href="/about" className="block text-gray-700">
            About
          </Link>
          <Link href="/services" className="block text-gray-700">
            Services
          </Link>
          <Link href="/contact" className="block text-gray-700">
            Contact
          </Link>
          <Link href="/appointment">
            <button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition">
              Appointment
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
