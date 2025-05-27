import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import images
import marketingImg from '../assets/images/stock-photos/digital-marketing.jpg';
import analyticsImg from '../assets/images/stock-photos/digital-services.jpg';
import socialMediaImg from '../assets/images/stock-photos/social-media.jpg';

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

function FeatureCard({ title, description, icon }) {
  return (
    <motion.div
      className="card group bg-gradient-to-br from-gray-50 to-white"
      variants={cardAnimation}
      whileHover="hover"
    >
      <div className="flex items-start gap-4">
        <div className="text-blue-600 text-2xl">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

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

function InternetMarketing() {
  const services = [
    {
      title: 'Search Engine Marketing',
      description:
        'Drive targeted traffic and increase visibility with strategic PPC campaigns and SEO optimization.',
      image: marketingImg,
    },
    {
      title: 'Social Media Marketing',
      description:
        'Build brand awareness and engage with your audience across all major social platforms.',
      image: socialMediaImg,
    },
    {
      title: 'Content Marketing',
      description:
        'Create valuable content that attracts, engages, and converts your target audience.',
      image: marketingImg,
    },
  ];

  const features = [
    {
      title: 'Strategic Planning',
      description:
        'Customized marketing strategies aligned with your business goals and target audience.',
      icon: '📊',
    },
    {
      title: 'Campaign Management',
      description:
        'Expert execution and continuous optimization of your marketing campaigns.',
      icon: '🎯',
    },
    {
      title: 'Performance Tracking',
      description:
        'Real-time analytics and comprehensive reporting to measure success.',
      icon: '📈',
    },
    {
      title: 'ROI Optimization',
      description:
        'Data-driven decisions to maximize your return on marketing investment.',
      icon: '💰',
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
                Internet Marketing
              </motion.h1>
              <motion.p
                className="text-xl text-blue-50 max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                Drive growth and reach your target audience with our
                comprehensive digital marketing solutions.
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
                  src={marketingImg}
                  alt="Internet Marketing"
                  className="relative rounded-xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent h-40"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Our Marketing Services</h2>
            <p className="text-xl text-gray-700">
              Comprehensive digital marketing solutions to help your business
              grow.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Why Choose Our Marketing Services?</h2>
            <p className="text-xl text-gray-700">
              Data-driven strategies that deliver measurable results.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
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
              Ready to Grow Your Online Presence?
            </h2>
            <p className="text-xl mb-8 text-blue-50">
              Let's create a marketing strategy that drives real results for
              your business.
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

export default InternetMarketing;
