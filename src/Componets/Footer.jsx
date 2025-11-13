import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="  border-t mt-10 bg-[#003C43]">
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="text-2xl gap-1 flex flex-row items-center space-x-1 mb-3  ">
            {/* <img className="w-10" src={} alt="logo" /> */}
            <img
              className="w-10 h-10 rounded-3xl"
              src="/src/assets/img/KrishiLink.png"
              alt="logo"
            />
            <h2 className="text-2xl font-bold ">KrishiLink</h2>
          </div>
          <p className=" text-sm leading-relaxed">
            A smart platform to learn new skills by sharing what you already
            know. Grow together through teaching and learning.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold  mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-primary transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                My Profile
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold  mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-primary transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Feedback
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-3  rounded-full shadow transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-3  rounded-full shadow transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-3  rounded-full shadow  transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-3 rounded-full shadow transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
