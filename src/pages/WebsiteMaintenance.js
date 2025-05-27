import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import images
import maintenanceImg from '../assets/images/stock-photos/website-maintenance.jpg';
import webDesignImg from '../assets/images/stock-photos/web-design.jpg';
import analyticsImg from '../assets/images/stock-photos/digital-services.jpg';

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

function WebsiteMaintenance() {
  const services = [
    {
      title: 'Regular Updates',
      description:
        'Keep your website secure and up-to-date with the latest software updates and patches.',
      image: maintenanceImg,
    },
    {
      title: 'Performance Optimization',
      description:
        'Ensure your website loads quickly and performs optimally for all users.',
      image: webDesignImg,
    },
    {
      title: 'Security Monitoring',
      description:
        '24/7 monitoring and protection against security threats and vulnerabilities.',
      image: analyticsImg,
    },
  ];

  const features = [
    {
      title: 'Backup Management',
      description:
        'Regular backups and data protection to ensure your content is always safe.',
      icon: '💾',
    },
    {
      title: 'Technical Support',
      description:
        'Expert assistance available when you need help or have questions.',
      icon: '🛠️',
    },
    {
      title: 'Content Updates',
      description:
        'Quick and reliable content updates to keep your site fresh.',
      icon: '📝',
    },
    {
      title: 'SEO Maintenance',
      description:
        'Ongoing optimization to maintain and improve search rankings.',
      icon: '📈',
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
                Website Maintenance
              </motion.h1>
              <motion.p
                className="text-xl text-blue-50 max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                Keep your website running smoothly with our comprehensive
                maintenance services.
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
                  src={maintenanceImg}
                  alt="Website Maintenance"
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
            <h2 className="mb-4">Our Maintenance Services</h2>
            <p className="text-xl text-gray-700">
              Comprehensive website maintenance to keep your site secure and
              performing at its best.
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
            <h2 className="mb-4">Why Choose Our Maintenance?</h2>
            <p className="text-xl text-gray-700">
              Reliable support to keep your website running smoothly.
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
              Ready to Keep Your Website at Its Best?
            </h2>
            <p className="text-xl mb-8 text-blue-50">
              Let us handle the technical details while you focus on your
              business.
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

export default WebsiteMaintenance;
