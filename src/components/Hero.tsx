import React, { useState } from "react";
import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Chip } from "@heroui/chip";
import { useDisclosure } from "@heroui/modal";
import { addToast } from "@heroui/toast";

import { fadeIn, textVariant } from "../utils/motion";
import heroImage from "../assets/hero-image.webp";
import ContactModal from "./ContactModal"; // Importamos nuestro nuevo componente

const Hero = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email.trim()) {
      addToast({
        title: "Error",
        description: "Por favor, ingresa un correo electrónico válido.",
        color: "danger",
      });
      return;
    }

    // Abrir el modal con el email prellenado
    onOpen();
  };

  return (
    <>
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
            <Chip
              color="default"
              variant="light"
              className="cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 py-3 px-4 h-12"
              startContent={
                <span className="text-blue-600 hover:scale-110 transition-transform duration-300 hover:text-blue-700 dark:hover:text-blue-400">
                  ★
                </span>
              }
            >
              {t("jump-start-growth")}
            </Chip>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-gray-100"
            initial="hidden"
            variants={textVariant(0.3)}
            whileInView="show"
          >
            <Trans
              components={[
                // 0 -> texto azul con subrayado ajustado al ancho del texto
                <span className="inline-block text-blue-600 border-b-2 border-blue-200/60 dark:border-blue-400/60 pb-1" />,
                // 1 -> emoji reloj animado
                <span className="inline-block ml-2 animate-pulse" />,
              ]}
              i18nKey="hero-title"
            />
          </motion.h1>

          <motion.p
            className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-xl"
            initial="hidden"
            variants={fadeIn("up", 0.4)}
            whileInView="show"
          >
            {t("hero-subtitle")}
          </motion.p>

          <motion.form
            className="flex gap-3 max-w-md"
            initial="hidden"
            variants={fadeIn("up", 0.5)}
            whileInView="show"
            onSubmit={handleFormSubmit}
          >
            {/* Email Form */}
            <Input
              isRequired
              className="flex-1"
              classNames={{
                inputWrapper: "h-14 px-6 rounded-xl",
                input: "text-base",
              }}
              name="email"
              placeholder={t("email-placeholder")}
              type="email"
              variant="bordered"
              value={email}
              onValueChange={setEmail}
            />
            <Button
              className="px-8 py-4 h-14 rounded-xl"
              color="primary"
              size="lg"
              type="submit"
              variant="shadow"
              isDisabled={!email.trim()}
            >
              →
            </Button>
          </motion.form>
        </div>

        {/* Right Column - Images */}
        <motion.div
          className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12"
          initial="hidden"
          variants={fadeIn("left", 0.5)}
          whileInView="show"
        >
          <div className="relative">
            <Image
              isBlurred
              alt={t("hero-image-alt")}
              className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300"
              radius="lg"
              src={heroImage}
              width={500}
              /* src="https://heroui.com/images/album-cover.png" */
            />
          </div>
        </motion.div>
      </section>

      {/* Modal de contacto */}
      <ContactModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        initialEmail={email}
        onSuccess={() => setEmail("")}
      />
    </>
  );
};

export default Hero;