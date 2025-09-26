import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@heroui/button";

import { fadeIn, textVariant } from "../utils/motion";

const FeaturesSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: "🔍",
      title: t("find-out"),
      description: t("find-out-desc"),
    },
    {
      icon: "⚙️",
      title: t("work-out"),
      description: t("work-out-desc"),
    },
    {
      icon: "🚀",
      title: t("work-fast"),
      description: t("work-fast-desc"),
    },
  ];

  return (
    <motion.section
      className="max-w-7xl mx-auto px-4 py-16"
      id="features"
      initial="hidden"
      variants={fadeIn("up", 0.2)}
      whileInView="show"
    >
      <motion.div className="text-center mb-12" variants={fadeIn("up", 0.3)}>
        <motion.h2
          className="text-3xl font-bold mb-4"
          variants={textVariant(0.2)}
        >
          {t("features-title")}
        </motion.h2>
        <motion.p
          className="text-gray-600 dark:text-gray-300"
          variants={fadeIn("up", 0.4)}
        >
          {t("features-subtitle")}
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={fadeIn("up", 0.5)}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-6"
            variants={fadeIn("up", 0.3 * (index + 1))}
          >
            <motion.div
              className="w-24 h-24 rounded-full mb-6 flex items-center justify-center"
              style={{
                backgroundColor:
                  index === 0 ? "#F1EFFD" : index === 1 ? "#FFE7E7" : "#FFF3E4",
              }}
              variants={fadeIn("down", 0.4 * (index + 1))}
            >
              <motion.div
                className="text-3xl"
                variants={fadeIn("up", 0.5 * (index + 1))}
              >
                {feature.icon}
              </motion.div>
            </motion.div>
            <motion.h3
              className="text-2xl font-medium mb-3"
              variants={textVariant(0.3)}
            >
              {feature.title}
            </motion.h3>
            <motion.p
              className="text-gray-500 dark:text-gray-400 text-center"
              variants={fadeIn("up", 0.6 * (index + 1))}
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="text-center mt-12" variants={fadeIn("up", 0.7)}>
        <motion.div
          className="relative"
          variants={fadeIn("up", 0.8)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            className="px-8 py-3 rounded-full font-medium relative"
            color="primary"
            size="lg"
            variant="shadow"
            onPress={() => {
              const subject = encodeURIComponent(
                t("become-partner-email-subject"),
              );
              const body = encodeURIComponent(t("become-partner-email-body"));

              window.location.href = `mailto:dajozavargas@gmail.com?subject=${subject}&body=${body}`;
            }}
          >
            {t("become-partner")}
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default FeaturesSection;
