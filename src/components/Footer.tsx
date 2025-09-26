import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { fadeIn, textVariant } from "../utils/motion";

const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = {
    company: [
      { name: t("footer-company-about"), href: "#" },
      { name: t("footer-company-terms"), href: "#" },
      { name: t("footer-company-privacy"), href: "#" },
      { name: t("footer-company-how"), href: "#" },
      { name: t("footer-company-contact"), href: "#" },
    ],
    getHelp: [
      { name: t("footer-gethelp-support"), href: "#" },
      { name: t("footer-gethelp-24h"), href: "#" },
      { name: t("footer-gethelp-chat"), href: "#" },
    ],
    support: [
      { name: t("footer-support-faq"), href: "#" },
      { name: t("footer-support-policy"), href: "#" },
      { name: t("footer-support-business"), href: "#" },
    ],
    contact: [
      { name: t("footer-contact-whatsapp"), href: "#" },
      { name: t("footer-contact-support24"), href: "#" },
    ],
  };

  return (
    <motion.footer
      className="bg-gray-50 dark:bg-gray-900"
      initial="hidden"
      variants={fadeIn("up", 0.2)}
      whileInView="show"
    >
      <div className="section-container">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12"
          variants={fadeIn("up", 0.3)}
        >
          {/* Brand Column */}
          <motion.div className="lg:col-span-4" variants={fadeIn("right", 0.4)}>
            <motion.div
              className="flex items-center gap-1 mb-6"
              variants={fadeIn("down", 0.5)}
            >
              <div className="w-4 h-4 bg-yellow-600 rounded-full opacity-75" />
              <div className="w-4 h-4 bg-red-500 rounded-full -ml-2" />
              <span className="text-xl font-medium ml-1">
                {t("footer-brand")}
              </span>
            </motion.div>
            <motion.p
              className="text-gray-600 dark:text-gray-300 mb-6"
              variants={fadeIn("up", 0.6)}
            >
              {t("footer-description")}
            </motion.p>
            <motion.div className="flex gap-4" variants={fadeIn("up", 0.7)}>
              <motion.a
                className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
                href="#"
                whileHover={{ scale: 1.1 }}
              >
                <FaFacebookF className="w-5 h-5" />
              </motion.a>
              <motion.a
                className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-400 hover:text-white transition-colors"
                href="#"
                whileHover={{ scale: 1.1 }}
              >
                <FaTwitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-700 hover:text-white transition-colors"
                href="#"
                whileHover={{ scale: 1.1 }}
              >
                <FaLinkedinIn className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Links Columns */}
          <motion.div className="lg:col-span-8" variants={fadeIn("left", 0.4)}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(
                ([category, links], categoryIndex) => (
                  <motion.div
                    key={category}
                    variants={fadeIn("up", 0.3 * (categoryIndex + 1))}
                  >
                    <motion.h3
                      className="text-lg font-medium mb-4"
                      variants={textVariant(0.2)}
                    >
                      {t(`footer-${category.toLowerCase()}`)}
                    </motion.h3>
                    <motion.ul
                      className="space-y-3"
                      variants={fadeIn("up", 0.4)}
                    >
                      {links.map((link, index) => (
                        <motion.li
                          key={index}
                          variants={fadeIn("up", 0.1 * (index + 1))}
                        >
                          <motion.a
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                            href={link.href}
                            whileHover={{ x: 5 }}
                          >
                            {link.name}
                          </motion.a>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8"
          variants={fadeIn("up", 0.8)}
        >
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            variants={fadeIn("up", 0.9)}
          >
            <motion.p
              className="text-gray-600 dark:text-gray-300 text-sm"
              variants={fadeIn("right", 1.0)}
            >
              {t("footer-rights", { year: new Date().getFullYear() })}
            </motion.p>
            <motion.p
              className="text-gray-600 dark:text-gray-300 text-sm"
              variants={fadeIn("left", 1.0)}
            >
              {t("footer-created")}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
