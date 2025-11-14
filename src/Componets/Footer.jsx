import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import Logo from "../assets/img/KrishiLink.png";

export default function Footer() {
  return (
    <footer className="  border-t  bg-[#003C43]">
      <div className="max-w-7xl mx-auto px-6 text-white py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="text-2xl gap-1 flex flex-row items-center space-x-1 mb-3  ">
            {/* <img className="w-10" src={} alt="logo" /> */}
            <img className="w-10 h-10 rounded-3xl" src={Logo} alt="logo" />
            <h2 className="text-2xl font-bold  ">KrishiLink</h2>
          </div>
          <p className=" text-sm leading-relaxed">
            KrishiConnect was founded in 2025 with a vision to revolutionize
            farming in Bangladesh by bringing together technology, data science,
            and agricultural expertise.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold  mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-primary transition">
                My Profile
              </Link>
            </li>
            <li>
              <Link to="/AllCrops" className="hover:text-primary transition">
                All Crops
              </Link>
            </li>
            <li>
              <Link to="/AddCrops" className="hover:text-primary transition">
                Add Crops
              </Link>
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
            <Link
              to="https://www.facebook.com/"
              className="p-3  rounded-full shadow transition"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="https://x.com/"
              className="p-3  rounded-full shadow transition"
            >
              <FaXTwitter></FaXTwitter>
            </Link>
            <Link
              to="https://www.instagram.com/"
              className="p-3  rounded-full shadow  transition"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://www.linkedin.com/"
              className="p-3 rounded-full shadow transition"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
