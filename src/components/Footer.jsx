import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-8 w-full">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start md:text-left md:justify-around">
            {/* Social Section */}
            <div className="w-full text-center sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Social</h3>
              <ul>
                <li className="mb-2">
                  <Link
                    to="http://facebook.com"
                    target="_blank"
                    className="text-sm hover:text-gray-400 hover:underline transition-all"
                  >
                    Facebook
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="http://linkedin.com"
                    target="_blank"
                    className="text-sm hover:text-gray-400 hover:underline transition-all"
                  >
                    Linkedin
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="http://x.com"
                    target="_blank"
                    className="text-sm hover:text-gray-400 hover:underline transition-all"
                  >
                    Twitter
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="http://printerest.com"
                    target="_blank"
                    className="text-sm hover:text-gray-400 hover:underline transition-all"
                  >
                    Pinterest
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="http://instagram.com"
                    target="_blank"
                    className="text-sm hover:text-gray-400 hover:underline transition-all"
                  >
                    Instagram
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="http://tiktok.com"
                    target="_blank"
                    className="text-sm hover:text-gray-400 hover:underline transition-all"
                  >
                    TikTok
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Section */}
            <div className="w-full text-center sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul>
                <li className="mb-2">
                  <Link
                    to="http://facebook.com"
                    target="_blank"
                    className="text-sm hover:text-gray-400 hover:underline transition-all"
                  >
                    Giotto Legno UK Ltd
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="http://linkedin.com"
                    target="_blank"
                    className="text-sm hover:text-gray-400 hover:underline transition-all"
                  >
                    Giotto Legno UK Ltd Italian Branch
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-center md:justify-around text-center text-sm mt-8">
            <p className="text-slate-400">© Giotto Legno UK Ltd - {new Date().getFullYear()} All Rights Reserved. </p>
            <p className="text-slate-400 hover:underline cursor-pointer"><Link to="/">Powered by ERPNext - ERP Software for Retail Companies</Link></p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
