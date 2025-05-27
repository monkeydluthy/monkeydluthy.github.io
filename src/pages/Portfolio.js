import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

// Import portfolio images
import nrlLogo from '../assets/images/nrl-logo.PNG';
import tampaNaLogo from '../assets/images/tampa-na-logo.png';
import logoBlack from '../assets/images/logo-black.png';
import lyfestyleLogo from '../assets/images/lyfestyle-logo.png';
import anjLogo from '../assets/images/anj-logo.png';
import dealPortalLogo from '../assets/images/deal-portal.png';
import portfolioHero from '../assets/images/hero/portfolio-hero.jpg';

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

function PortfolioCard({ title, image, link, description, tags }) {
  return (
    <motion.div
      className="card group bg-gradient-to-br from-gray-50 to-white flex flex-col h-full"
      variants={cardAnimation}
      whileHover="hover"
    >
      <div className="aspect-video overflow-hidden rounded-xl bg-black relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex items-center justify-center">
          <p className="text-white text-center">{description}</p>
        </div>
      </div>
      <div className="flex-1 p-6 flex flex-col">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto w-full px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
        >
          Visit Site <FaExternalLinkAlt />
        </a>
      </div>
    </motion.div>
  );
}

function Portfolio() {
  const portfolioItems = [
    {
      title: 'Digital Resume',
      image: logoBlack,
      link: 'https://www.anthonyluth.com',
      description:
        'A modern, interactive digital resume showcasing professional experience and skills.',
      tags: ['React', 'Tailwind CSS', 'Responsive Design'],
    },
    {
      title: 'Deal Portal',
      image: dealPortalLogo,
      link: 'https://deal-portal.co.uk/',
      description:
        'AI-powered property CRM platform helping agents automate deal sourcing, sales, and investor management. Features include real-time pipeline tracking, lead automation, and integration with major property platforms.',
      tags: ['CRM Platform', 'AI Integration', 'Property Tech'],
    },
    {
      title: 'Lyfestyle Tattoos',
      image: lyfestyleLogo,
      link: 'http://www.lyfestyletattoos.com',
      description:
        'Custom website for a professional tattoo studio featuring artist portfolios and booking system.',
      tags: ['Web Design', 'E-commerce', 'Portfolio'],
    },
    {
      title: 'NRL Hair',
      image: nrlLogo,
      link: 'https://www.nrlhair.com',
      description:
        'Elegant website for a high-end hair salon with online booking capabilities.',
      tags: ['Branding', 'Web Design', 'Booking System'],
    },
    {
      title: 'ANJ Sports Cards',
      image: anjLogo,
      link: 'https://anj-sports-cards.netlify.app/',
      description:
        'Modern e-commerce platform for sports card collectors featuring a sleek design and seamless shopping experience.',
      tags: ['E-commerce', 'React', 'Netlify'],
    },
    {
      title: 'Tampa NA',
      image: tampaNaLogo,
      link: 'http://www.tampa-na.org',
      description:
        'Community website with event management and resource directory.',
      tags: ['Web Design', 'Community', 'Events'],
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
                Our Portfolio
              </motion.h1>
              <motion.p
                className="text-xl text-blue-50 max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                Explore our latest projects and see how we've helped businesses
                achieve their digital goals.
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
                  src={portfolioHero}
                  alt="Creative Workspace"
                  className="relative rounded-xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent h-40"></div>
        <div className="container mx-auto px-6 relative">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={index} {...item} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 text-blue-50">
              Let's work together to create something amazing for your business.
            </p>
            <Link to="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
