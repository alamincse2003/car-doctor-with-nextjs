import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Logo & Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Car Doctor</h2>
          <p className="text-gray-400 text-sm">
            We deliver innovative digital solutions that elevate your business.
            Let's build something amazing together.
          </p>
        </div>

        {/* Middle: Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-600">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-2xl text-gray-400">
            <a href="#" className="hover:text-blue-600">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-blue-600">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-600">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-600">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Car Doctor. All rights reserved.
      </div>
    </footer>
  );
}
