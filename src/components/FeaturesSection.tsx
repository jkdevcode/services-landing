import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { useTranslation } from "react-i18next";
import { Button } from "@heroui/button";

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
      variants={fadeIn("up", 0.2)}
      id="features"
      initial="hidden"
      whileInView="show"
      className="max-w-7xl mx-auto px-4 py-16"
    >
      <motion.div variants={fadeIn("up", 0.3)} className="text-center mb-12">
        <motion.h2
          variants={textVariant(0.2)}
          className="text-3xl font-bold mb-4"
        >
          {t("features-title")}
        </motion.h2>
        <motion.p variants={fadeIn("up", 0.4)} className="text-gray-600 dark:text-gray-300">
          {t("features-subtitle")}
        </motion.p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.5)}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", 0.3 * (index + 1))}
            className="flex flex-col items-center p-6"
          >
            <motion.div
              variants={fadeIn("down", 0.4 * (index + 1))}
              className="w-24 h-24 rounded-full mb-6 flex items-center justify-center"
              style={{
                backgroundColor:
                  index === 0 ? "#F1EFFD" : index === 1 ? "#FFE7E7" : "#FFF3E4",
              }}
            >
              <motion.div
                variants={fadeIn("up", 0.5 * (index + 1))}
                className="text-3xl"
              >
                {feature.icon}
              </motion.div>
            </motion.div>
            <motion.h3
              variants={textVariant(0.3)}
              className="text-2xl font-medium mb-3"
            >
              {feature.title}
            </motion.h3>
            <motion.p
              variants={fadeIn("up", 0.6 * (index + 1))}
              className="text-gray-500 dark:text-gray-400 text-center"
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={fadeIn("up", 0.7)} className="text-center mt-12">
        <motion.div
          variants={fadeIn("up", 0.8)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <Button
            className="px-8 py-3 rounded-full font-medium relative"
            color="primary"
            size="lg"
            variant="shadow"
          >
            {t("become-partner")}
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default FeaturesSection;
