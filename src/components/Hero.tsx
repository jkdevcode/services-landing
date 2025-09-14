import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";

import { fadeIn, textVariant } from "../utils/motion";
import heroImage from "../assets/hero-image.webp";

const Hero = () => {
  const { t } = useTranslation();

  return (
      <section
        className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 pb-16 container mx-auto"
        id="home"
      >
        {/* Left Column */}
        <div className="w-full md:w-1/2 space-y-8">
          <motion.div
            initial="hidden"
            variants={fadeIn("right", 0.2)}
            whileInView="show"
          >
            {/* Star badge */}
            <div className="flex items-center gap-2  w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">
              <span className="text-blue-600 group-hover:scale-110 transition-transform">
                ★
              </span>
              <span className="text-sm font-medium">
                {t("jump-start-growth")}
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial="hidden"
            variants={textVariant(0.3)}
            whileInView="show"
          >
            <Trans
              i18nKey="hero-title"
              components={[
                // 0 -> texto azul con subrayado ajustado al ancho del texto
                <span className="inline-block text-blue-600 border-b-2 border-blue-200/60 pb-1" />,
                // 1 -> emoji reloj animado
                <span className="inline-block ml-2 animate-pulse" />,
              ]}
            />
          </motion.h1>

          <motion.p
            className="text-gray-600 text-lg md:text-xl max-w-xl"
            initial="hidden"
            variants={fadeIn("up", 0.4)}
            whileInView="show"
          >
            {t("hero-subtitle")}
          </motion.p>

          <motion.div
            className="flex gap-3 max-w-md"
            initial="hidden"
            variants={fadeIn("up", 0.5)}
            whileInView="show"
          >
            {/* Email Form */}
            <input
              className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all text-gray-600"
              placeholder={t("email-placeholder")}
              type="email"
            />
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-100 active:scale-95">
              →
            </button>
          </motion.div>
        </div>

        {/* Right Column - Images */}
        <motion.div
          className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12"
          initial="hidden"
          variants={fadeIn("left", 0.5)}
          whileInView="show"
        >
          <div className="relative">
            <img
              alt={t("hero-image-alt")}
              className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300"
              src={heroImage}
            />
          </div>
        </motion.div>
      </section>
  );
};

export default Hero;
