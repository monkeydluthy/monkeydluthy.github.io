import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import contactHero from '../assets/images/hero/contact-hero.jpg';

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

function ContactInfo({ icon, title, content, link }) {
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
          {link ? (
            <motion.a
              href={link}
              className="text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              {content}
            </motion.a>
          ) : (
            <p className="text-gray-700">{content}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        'service_2jqp68p',
        'template_gy0d5xj',
        form.current,
        'hguBxp_4_8yE-3O7q'
      );
      setSubmitStatus('success');
      form.current.reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                Contact Us
              </motion.h1>
              <motion.p
                className="text-xl text-blue-50 max-w-2xl mx-auto"
                variants={fadeInUp}
              >
                Get in touch with us to discuss your project and how we can help
                your business grow.
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
                  src={contactHero}
                  alt="Modern Communication Setup"
                  className="relative rounded-xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent h-40"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                className="card group bg-gradient-to-br from-gray-50 to-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold mb-6">
                  Send Us a Message
                </h3>
                <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  {submitStatus === 'success' && (
                    <p className="text-green-600 text-center">
                      Message sent successfully!
                    </p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-red-600 text-center">
                      Failed to send message. Please try again.
                    </p>
                  )}
                </form>
              </motion.div>

              {/* Contact Info */}
              <div className="space-y-6">
                <ContactInfo
                  icon="📍"
                  title="Location"
                  content="Tampa, Florida"
                />
                <ContactInfo
                  icon="📧"
                  title="Email"
                  content="info@digitaldynamicsolution.com"
                  link="mailto:info@digitaldynamicsolution.com"
                />
                <ContactInfo
                  icon="📱"
                  title="Phone"
                  content="+1 (813) 555-0123"
                  link="tel:+18135550123"
                />
                <ContactInfo
                  icon="⏰"
                  title="Business Hours"
                  content="Monday - Friday: 9:00 AM - 6:00 PM EST"
                />
              </div>
            </div>
          </div>
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
            <button className="btn-secondary">
              Schedule a Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
