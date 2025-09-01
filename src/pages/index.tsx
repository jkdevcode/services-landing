import React from "react";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../utils/motion";
import heroImage from "../assets/hero-image.webp"
import DefaultLayout from "@/layouts/default";

const Hero = () => {
  return (
    <DefaultLayout>
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
            <div className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">
              <span className="text-blue-600 group-hover:scale-110 transition-transform">
                ★
              </span>
              <span className="text-sm font-medium">Jump start your growth</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial="hidden"
            variants={textVariant(0.3)}
            whileInView="show"
          >
            We boost the growth for{" "}
            <span className="text-blue-600 relative inline-block">
              Startup to Fortune 500
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60"></span>
            </span>{" "}
            Companies
            <span className="inline-block ml-2 animate-pulse">⏰</span>
          </motion.h1>

          <motion.p
            className="text-gray-600 text-lg md:text-xl max-w-xl"
            initial="hidden"
            variants={fadeIn("up", 0.4)}
            whileInView="show"
          >
            Get the most accurate leads, sales people training and conversions,
            tools and more — all within the same one billing.
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
              placeholder="Email address"
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
              alt="Team meeting"
              className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300"
              src={heroImage}
            />
          </div>
        </motion.div>
      </section>
    </DefaultLayout>
  );
};

export default Hero;