import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import companyLogo from '../assets/images/logo-black.png';

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

function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              className="lg:w-1/2 text-center lg:text-left"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1 className="text-white mb-6" variants={fadeInUp}>
                About Us
              </motion.h1>
              <motion.p
                className="text-xl text-blue-50 max-w-2xl"
                variants={fadeInUp}
              >
                Digital Dynamic Solution is a full-service digital agency
                helping businesses thrive in the digital world.
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
                  src={companyLogo}
                  alt="Digital Dynamic Solutions Logo"
                  className="relative rounded-xl shadow-2xl bg-white p-8 w-3/4 mx-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story & Mission Section */}
      <section className="py-20 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent h-40"></div>
        <div className="container mx-auto px-6 relative">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-center mb-8">Our Story & Mission</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                Founded in Tampa, Florida, Digital Dynamic Solution has been
                helping businesses transform their digital presence since 2020.
                We combine creativity, technical expertise, and strategic
                thinking to deliver exceptional results for our clients.
              </p>
              <p className="text-lg">
                Our journey began with a simple vision: to help businesses
                thrive in the digital age by providing innovative, tailored
                solutions that drive real results. Today, we're proud to have
                helped numerous businesses across various industries establish
                strong online presences and achieve their digital goals.
              </p>
              <div className="border-t border-gray-200 pt-6 mt-8">
                <p className="text-lg font-semibold mb-4">
                  Our mission is to empower businesses with innovative digital
                  solutions that drive growth and success in the modern digital
                  landscape.
                </p>
                <p className="text-lg">
                  We strive to be more than just a service provider – we aim to
                  be a trusted partner in your digital journey, helping you
                  navigate the ever-evolving digital landscape with confidence
                  and achieve sustainable, long-term success.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values & Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Values Box */}
            <motion.div
              className="card group bg-gradient-to-br from-gray-50 to-white"
              variants={cardAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6">Our Values</h3>
              <motion.ul
                className="space-y-4"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {[
                  {
                    title: 'Innovation',
                    description:
                      'Constantly exploring new technologies and approaches to deliver cutting-edge solutions that keep you ahead of the competition.',
                  },
                  {
                    title: 'Excellence',
                    description:
                      'Committed to delivering the highest quality in everything we do, from design and development to customer service.',
                  },
                  {
                    title: 'Integrity',
                    description:
                      "Building trust through transparent communication, honest practices, and always putting our clients' interests first.",
                  },
                  {
                    title: 'Client Success',
                    description:
                      'Measuring our success by the achievements and growth of our clients, ensuring your goals become our goals.',
                  },
                ].map((value) => (
                  <motion.li
                    key={value.title}
                    className="flex items-start gap-3 group"
                    variants={fadeInUp}
                  >
                    <span className="text-blue-600 mt-1">✓</span>
                    <div>
                      <span className="font-semibold block mb-1">
                        {value.title}
                      </span>
                      <span className="text-gray-700">{value.description}</span>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Why Choose Us Box */}
            <motion.div
              className="card group bg-gradient-to-br from-gray-50 to-white"
              variants={cardAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6">Why Choose Us</h3>
              <motion.ul
                className="space-y-4"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {[
                  {
                    title: 'Expertise',
                    description:
                      'Our team brings years of experience and deep expertise in digital solutions.',
                  },
                  {
                    title: 'Custom Solutions',
                    description:
                      'We create tailored strategies that align with your unique business goals.',
                  },
                  {
                    title: 'Results-Driven',
                    description:
                      'We focus on delivering measurable results that impact your bottom line.',
                  },
                  {
                    title: 'Ongoing Support',
                    description:
                      'We provide continuous support and guidance throughout our partnership.',
                  },
                ].map((reason) => (
                  <motion.li
                    key={reason.title}
                    className="flex items-start gap-3 group"
                    variants={fadeInUp}
                  >
                    <span className="text-blue-600 mt-1">✓</span>
                    <div>
                      <span className="font-semibold block mb-1">
                        {reason.title}
                      </span>
                      <span className="text-gray-700">
                        {reason.description}
                      </span>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl mb-8 text-blue-50">
              Let's work together to create innovative solutions that drive your
              business forward.
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

export default About;
