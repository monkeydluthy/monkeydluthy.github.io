import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600 py-16 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              Digital Dynamic Solution
            </h3>
            <p className="text-gray-600 mb-6">
              Creating innovative digital solutions for modern businesses.
            </p>
            <div className="flex justify-center md:justify-start space-x-5">
              <a
                href="https://www.facebook.com/digitaldynamicsolution/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a
                href="https://x.com/Monkey_D_Luthy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/anthony-luth/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
              <a
                href="https://www.instagram.com/monkeyd_luthy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UClGRGq5lO-3DQuhQsd4us8g"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <i className="fab fa-youtube text-lg"></i>
              </a>
              <a
                href="https://www.pinterest.com/MonkeyD_Luthy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <i className="fab fa-pinterest text-lg"></i>
              </a>
              <a
                href="https://www.tumblr.com/blog/monkeydluthy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <i className="fab fa-tumblr text-lg"></i>
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <h4 className="text-lg font-semibold mb-6 text-gray-900">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <h4 className="text-lg font-semibold mb-6 text-gray-900">
              Services
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/web-design"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Web Design
                </Link>
              </li>
              <li>
                <Link
                  to="/seo"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  SEO
                </Link>
              </li>
              <li>
                <Link
                  to="/social-media"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Social Media
                </Link>
              </li>
              <li>
                <Link
                  to="/content-creation"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Content Creation
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-6 text-gray-900">
              Contact
            </h4>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center justify-center md:justify-start">
                <i className="fas fa-map-marker-alt mr-3"></i>
                Tampa, FL
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <i className="fas fa-envelope mr-3"></i>
                luthdigitalconsult@gmail.com
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <i className="fas fa-phone mr-3"></i>
                (813) 833-2988
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>
            Copyright © {new Date().getFullYear()} Digital Dynamic Solution |
            Anthony Luth | Freelance Website Developer & Digital Marketing
            Consultant
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
