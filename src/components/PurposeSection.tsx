import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { fadeIn, textVariant } from "../utils/motion";
import { Card, CardFooter } from "@heroui/card";

const PurposeSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: "🟣",
      title: t("built-impact"),
      description: t("built-impact-desc"),
    },
    {
      icon: "🔴",
      title: t("in-sync"),
      description: t("in-sync-desc"),
    },
  ];

  return (
    <section id="about" className="w-full py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 grid-cols-1 gap-8"
        >
          {/* Columna izquierda */}
          <motion.div variants={fadeIn("right", 0.3)}>
            <motion.div
              variants={fadeIn("up", 0.4)}
              className="text-sm text-purple-600 font-medium mb-2"
            >
              {t("achieve-more")}
            </motion.div>
            <motion.h2
              variants={textVariant(0.5)}
              className="text-3xl md:w-4/5 md:text-4xl font-bold text-gray-900 dark:text-gray-100"
            >
              {t("purpose-title")}
            </motion.h2>
          </motion.div>

          {/* Columna derecha con features */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.3 * (index + 1))}
              >
                <Card
                  isFooterBlurred
                  className="border-none"
                  radius="lg"
                  shadow="sm"
                >
                  {/* Contenido principal */}
                  <div className="flex items-start space-x-4 p-4">
                    <motion.div
                      variants={fadeIn("right", 0.4 * (index + 1))}
                      className="w-12 h-12 flex items-center justify-center rounded-lg text-2xl"
                    >
                      {feature.icon}
                    </motion.div>
                    <motion.div variants={fadeIn("left", 0.4 * (index + 1))}>
                      <motion.h3
                        variants={textVariant(0.3)}
                        className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100"
                      >
                        {feature.title}
                      </motion.h3>
                      <motion.p variants={fadeIn("up", 0.4)} className="pb-8 text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </motion.p>
                    </motion.div>
                  </div>

                  {/* Footer con efecto glass */}
                  <CardFooter
                    className="
                      absolute bottom-1 
                      w-[calc(100%_-_8px)] ml-1 z-10
                      flex items-center justify-between
                      before:bg-white/10 backdrop-blur-md
                      border-white/20 border-1
                      overflow-hidden rounded-xl shadow-small
                      py-2 px-3
                    "
                  >
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{feature.title}</p>
                    <span className="text-xs">✨</span>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PurposeSection;
