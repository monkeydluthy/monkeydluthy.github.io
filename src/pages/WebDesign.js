import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import images
import webDesignImg from '../assets/images/stock-photos/web-design.jpg';
import contentCreationImg from '../assets/images/stock-photos/content-creation.jpg';
import socialMediaImg from '../assets/images/stock-photos/social-media.jpg';
import marketingImg from '../assets/images/stock-photos/digital-marketing.jpg';
import strategyImg from '../assets/images/stock-photos/digital-services.jpg';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { y: -5, transition: { duration: 0.2 } },
};

function ServiceCard({ title, description, image }) {
  return (
    <motion.div
      className="card group bg-gradient-to-br from-gray-50 to-white p-6"
      variants={cardAnimation}
      whileHover="hover"
    >
      <div className="aspect-video mb-6 overflow-hidden rounded-xl bg-gray-100">
        <div className="relative h-full w-full">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-xl blur-xl"></div>
          <img
            src={image}
            alt={title}
            className="relative w-full h-full object-contain object-center p-4 group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: 'center' }}
          />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
}

function ProcessStep({ number, title, description }) {
  return (
    <motion.div
      className="card group bg-gradient-to-br from-gray-50 to-white"
      variants={cardAnimation}
      whileHover="hover"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold text-xl">
          {number}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

function WebDesign() {
  const features = [
    {
      title: 'Responsive Design',
      description:
        'Websites that look and function beautifully on all devices, from mobile to desktop.',
      image: webDesignImg,
    },
    {
      title: 'User Experience',
      description:
        'Intuitive navigation and engaging interfaces that keep visitors coming back.',
      image: socialMediaImg,
    },
    {
      title: 'Performance',
      description:
        'Fast-loading, optimized websites that provide an excellent user experience.',
      image: marketingImg,
    },
  ];

  const process = [
    {
      title: 'Discovery',
      description:
        'We start by understanding your business, goals, and target audience to create a strategic plan.',
    },
    {
      title: 'Design',
      description:
        'Our designers create beautiful, modern layouts that align with your brand and objectives.',
    },
    {
      title: 'Development',
      description:
        'We build your website using the latest technologies and best practices for optimal performance.',
    },
    {
      title: 'Launch',
      description:
        'After thorough testing, we launch your site and provide ongoing support to ensure success.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              className="lg:w-1/2 text-center"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1 className="text-white mb-6" variants={fadeInUp}>
                Web Design Services
              </motion.h1>
              <motion.p
                className="text-xl text-blue-50 max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                Create a stunning online presence with our professional web
                design and development solutions.
              </motion.p>
            </motion.div>
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-xl blur-xl"></div>
                <img
                  src={webDesignImg}
                  alt="Web Design Process"
                  className="relative rounded-xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent h-40"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Why Choose Our Web Design Services?</h2>
            <p className="text-xl text-gray-700">
              We create beautiful, functional websites that engage your audience
              and drive business growth.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <ServiceCard key={index} {...feature} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Our Design Process</h2>
            <p className="text-xl text-gray-700">
              A proven approach to creating websites that deliver results.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {process.map((step, index) => (
              <ProcessStep
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-white mb-6">
              Ready to Start Your Web Design Project?
            </h2>
            <p className="text-xl mb-8 text-blue-50">
              Let's create a website that perfectly represents your brand and
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

export default WebDesign;
