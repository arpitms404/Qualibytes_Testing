import React from "react";
import { Link } from "wouter";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d0d0d] text-white py-12 px-6 w-screen">
      <div className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo + Description */}
        <div className="md:col-span-1">
          <img
            src="https://i.postimg.cc/Y0GKrbV8/Qualibytes-IT-Academy-white.png"
            alt="Qualibytes Logo"
            className="h-10 mb-4"
          />
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
            Qualibytes IT Academy
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Industry projects. Internship. Guaranteed guidance to get placed.
          </p>
          <p
            className="text-2xl font-extrabold text-gray-300 mt-6 italic"
            style={{ fontFamily: "cursive" }}
          >
            UPSKILL WITH US
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Explore Qualibytes</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link to="/programs" className="hover:text-white">
                Programs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Mentors
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Placements
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link to="/testimonials" className="hover:text-white">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Become a Mentor
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Hire from Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Socials</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a
                href="https://www.instagram.com/qualibytes/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center space-x-2 group"
              >
                <svg
                  className="w-5 h-5 text-white group-hover:text-pink-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="text-white hover:text-pink-500">
                  Instagram
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/qualibytes"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center space-x-2 group"
              >
                <svg
                  className="w-5 h-5 text-white group-hover:text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-white hover:text-blue-600">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/qualibytes"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center space-x-2 group"
              >
                <svg
                  className="w-5 h-5 text-white group-hover:text-gray-800"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="text-white hover:text-gray-800">
                  X (Twitter)
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@QualibytesITAcademy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center space-x-2 group"
              >
                <svg
                  className="w-5 h-5 text-white group-hover:text-red-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span className="text-white hover:text-red-600">YouTube</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-6">
        <>
          © {new Date().getFullYear()} Qualibytes IT Academy. All rights
          reserved. | Developed by{" "}
          <a
            href="https://skilllogic.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Skilllogic Technologies
          </a>
        </>
      </div>
    </footer>
  );
};

export default Footer;
