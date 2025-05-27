import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import images
import webDesignImg from '../assets/images/stock-photos/web-design.jpg';
import marketingImg from '../assets/images/stock-photos/digital-marketing.jpg';
import consultingImg from '../assets/images/stock-photos/consulting.jpg';
import socialMediaImg from '../assets/images/stock-photos/social-media.jpg';
import seoImg from '../assets/images/stock-photos/seo.jpg';
import logoDesignImg from '../assets/images/stock-photos/logo-design.jpg';
import websiteMaintenanceImg from '../assets/images/stock-photos/website-maintenance.jpg';
import smMaintenanceImg from '../assets/images/stock-photos/social-media-management.jpg';
import contentCreationImg from '../assets/images/stock-photos/content-creation.jpg';
import floaterImg from '../assets/images/stock-photos/digital-services.jpg';

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

function Services() {
  const services = [
    {
      image: webDesignImg,
      title: 'Website Design',
      description:
        'Transform your online presence with stunning, responsive websites that engage visitors and drive conversions. Our modern designs are built for performance and user experience.',
      link: '/web-design',
    },
    {
      image: marketingImg,
      title: 'Digital Marketing',
      description:
        "Data-driven digital marketing strategies that connect with your target audience and generate measurable results. From PPC to content marketing, we've got you covered.",
      link: '/internet-marketing',
    },
    {
      image: consultingImg,
      title: 'Consulting Services',
      description:
        'Expert guidance to optimize your digital strategy and unlock new revenue streams. Get actionable insights and proven strategies for sustainable business growth.',
      link: '/consulting',
    },
    {
      image: socialMediaImg,
      title: 'Social Media Integration',
      description:
        'Build a powerful social media presence that resonates with your audience. We help you create engaging content, grow your following, and drive meaningful engagement.',
      link: '/social-media',
    },
    {
      image: seoImg,
      title: 'Search Engine Optimization',
      description:
        'Improve your search rankings and drive organic traffic with our comprehensive SEO solutions. We use data-driven strategies to help you outrank competitors.',
      link: '/seo',
    },
    {
      image: logoDesignImg,
      title: 'Logo Design',
      description:
        'Get a distinctive, memorable logo that captures your brand essence. Our creative team crafts unique visual identities that make lasting impressions.',
      link: '/logo-design',
    },
    {
      image: websiteMaintenanceImg,
      title: 'Website Maintenance',
      description:
        'Keep your website secure, fast, and up-to-date with our comprehensive maintenance services. We handle updates, backups, and performance optimization.',
      link: '/website-maintenance',
    },
    {
      image: smMaintenanceImg,
      title: 'Social Media Management',
      description:
        'Let us handle your social media presence while you focus on your business. We create content, engage with followers, and grow your online community.',
      link: '/sm-maintenance',
    },
    {
      image: contentCreationImg,
      title: 'Content Creation',
      description:
        'Engage your audience with compelling content that tells your story. From blog posts to videos, we create content that builds authority and drives engagement.',
      link: '/content-creation',
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
                Our Services
              </motion.h1>
              <motion.p
                className="text-xl text-blue-50 max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                Freelance Web Design and Development based in Tampa, Florida |
                Internet Marketing, and other Business Solutions
              </motion.p>
            </motion.div>
            <motion.div
              className="lg:w-1/2 hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-xl blur-xl"></div>
                <img
                  src={floaterImg}
                  alt="Digital Services"
                  className="relative rounded-xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent h-40"></div>
        <div className="container mx-auto px-6 relative">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <ServiceCard key={service.link} {...service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-blue-50">
              Let's work together to create the perfect digital solution for
              your business.
            </p>
            <Link to="/contact" className="btn-secondary">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
