import React from 'react';
import { Link } from 'react-router-dom';
import webDesignImg from '../assets/images/webdesign.png';
import marketingImg from '../assets/images/internet-marketing.png';
import consultingImg from '../assets/images/consulting.png';
import webdesignServiceImg from '../assets/images/webdesign-image.jpg';
import seoServiceImg from '../assets/images/seo-service.jpg';
import contentCreationImg from '../assets/images/content-creation-service-2.jpg';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8 text-center">
              <h1 className="text-gradient">Transform Your Digital Presence</h1>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Professional Web Design, Development, and Digital Marketing
                Solutions based in Tampa, Florida. We help businesses grow their
                online presence and achieve their digital goals.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/portfolio" className="btn-primary">
                  View Portfolio
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-xl"></div>
                <img
                  src={webdesignServiceImg}
                  alt="Web Design Services"
                  className="relative rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent h-40"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-700">
              Elevate your business with our comprehensive digital solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Web Design Card */}
            <div className="card group bg-gradient-to-br from-gray-50 to-white">
              <div className="aspect-video mb-6 overflow-hidden rounded-xl">
                <img
                  src={webDesignImg}
                  alt="Website Design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Website Design</h3>
              <p className="text-gray-700 mb-6">
                Our website design process focuses on developing a website that
                builds your brand and audience.
              </p>
              <Link to="/web-design" className="btn-primary w-full text-center">
                Learn More
              </Link>
            </div>

            {/* Digital Marketing Card */}
            <div className="card group bg-gradient-to-br from-gray-50 to-white">
              <div className="aspect-video mb-6 overflow-hidden rounded-xl">
                <img
                  src={seoServiceImg}
                  alt="Digital Marketing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Digital Marketing</h3>
              <p className="text-gray-700 mb-6">
                Customized digital marketing plans with the goal of driving high
                converting traffic to your website.
              </p>
              <Link
                to="/internet-marketing"
                className="btn-primary w-full text-center"
              >
                Learn More
              </Link>
            </div>

            {/* Content Creation Card */}
            <div className="card group bg-gradient-to-br from-gray-50 to-white">
              <div className="aspect-video mb-6 overflow-hidden rounded-xl">
                <img
                  src={contentCreationImg}
                  alt="Content Creation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Content Creation</h3>
              <p className="text-gray-700 mb-6">
                Engaging content that tells your story and connects with your
                audience across all platforms.
              </p>
              <Link
                to="/content-creation"
                className="btn-primary w-full text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-white mb-6">
              Ready to Start Your Digital Journey?
            </h2>
            <p className="text-xl mb-8 text-blue-50">
              Let's work together to create a powerful online presence that
              drives results.
            </p>
            <Link to="/contact" className="btn-secondary">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
