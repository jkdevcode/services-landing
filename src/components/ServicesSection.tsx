import { useTranslation } from "react-i18next";
import { BsStack } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Button } from "@heroui/button";
import { CheckboxGroup, Checkbox } from "@heroui/checkbox";

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600" />,
      title: t("service-web-title"),
      description: t("service-web-desc"),
      link: "#learn-more",
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
      title: t("service-adcreatives-title"),
      description: t("service-adcreatives-desc"),
      link: "#learn-more",
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400" />,
      title: t("service-automation-title"),
      description: t("service-automation-desc"),
      link: "#learn-more",
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: t("service-infographics-title"),
      description: t("service-infographics-desc"),
      link: "#learn-more",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 container mx-auto px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        variants={fadeIn("up", 0.3)}
        className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24"
      >
        {/* Header */}
        <motion.div variants={fadeIn("right", 0.4)} className="md:w-1/3">
          <motion.h2
            variants={textVariant(0.2)}
            className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5"
          >
            {t("services-title")}
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.5)}
            className="text-gray-600 text-lg mb-4 md:w-4/5"
          >
            {t("services-subtitle")}
          </motion.p>

          <motion.div variants={fadeIn("up", 0.6)}>
            <CheckboxGroup
              isDisabled
              defaultValue={["ux", "dev"]}
              className="gap-3"
            >
              <Checkbox value="ux" className="text-gray-600">
                {t("services-list-ux")}
              </Checkbox>
              <Checkbox value="dev" className="text-gray-600">
                {t("services-list-dev")}
              </Checkbox>
            </CheckboxGroup>
          </motion.div>

          {/* <motion.div variants={fadeIn("up", 0.9)}> */}
          <Button
            className="mt-8"
            color="primary"
            size="lg"
            variant="shadow"
            radius="full"
          >
            {t("services-button")}
          </Button>
          {/* </motion.div> */}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.3 * (index + 1))}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-black max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-white/20 transition-shadow duration-300"
            >
              <motion.div
                variants={fadeIn("down", 0.4 * (index + 1))}
                className="mb-4"
              >
                {service.icon}
              </motion.div>
              <motion.h3
                variants={textVariant(0.3)}
                className="text-xl font-semibold mb-2"
              >
                {service.title}
              </motion.h3>
              <motion.p
                variants={fadeIn("up", 0.5 * (index + 1))}
                className="text-gray-600 mb-4"
              >
                {service.description}
              </motion.p>
              <motion.a
                variants={fadeIn("up", 0.6 * (index + 1))}
                href={service.link}
                className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
              >
                {t("service-learn-more")}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
