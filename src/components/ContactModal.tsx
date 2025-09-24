import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "@heroui/modal";

/* import { useTranslation } from "react-i18next"; */
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { addToast } from "@heroui/toast";
import { useForm } from "@formspree/react";

// Iconos para el modal
export const MailIcon = (props: any) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const MessageIcon = (props: any) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M8.5 19H8C4 19 2 17 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
        fill="currentColor"
      />
    </svg>
  );
};

interface ContactModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  initialEmail?: string;
  onSuccess?: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onOpenChange,
  initialEmail = "",
  onSuccess,
}) => {
  /* const { t } = useTranslation(); */
  const [state, handleFormSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);
  const [email, setEmail] = useState(initialEmail);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email.trim()) {
      addToast({
        title: "Error",
        description: "Por favor, ingresa un correo electrónico válido.",
        color: "danger",
      });
      return;
    }

    if (!message.trim()) {
      addToast({
        title: "Error",
        description: "Por favor, escribe un mensaje.",
        color: "danger",
      });
      return;
    }

    // Crear FormData para enviar a Formspree
    const formData = new FormData();
    formData.append("email", email);
    formData.append("message", message);

    // Enviar a Formspree
    await handleFormSubmit(e);
    
    if (state.succeeded) {
      addToast({
        title: "¡Mensaje enviado!",
        description: "Gracias por contactarnos. Te responderemos pronto.",
        color: "success",
        timeout: 3000,
        shouldShowTimeoutProgress: true,
      });
      setEmail("");
      setMessage("");
      onSuccess?.();
      onOpenChange(false);
    } else if (state.errors) {
      addToast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Inténtalo de nuevo.",
        color: "danger",
      });
    }
  };

  React.useEffect(() => {
    if (isOpen && initialEmail) {
      setEmail(initialEmail);
    }
  }, [isOpen, initialEmail]);

  return (
    <Modal isOpen={isOpen} placement="auto" onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <form onSubmit={handleSubmit}>
            <ModalHeader className="flex flex-col gap-1">
              Contáctanos
            </ModalHeader>
            <ModalBody>
              <Input
                isRequired
                endContent={
                  <MailIcon className="text-2xl text-default-400 pointer-events-none shrink-0" />
                }
                label="Correo electrónico"
                name="email"
                placeholder="tu@email.com"
                type="email"
                variant="bordered"
                value={email}
                onValueChange={setEmail}
              />
              <Textarea
                disableAutosize
                disableAnimation
                isRequired
                classNames={{
                    /* base: "max-w-xs", */
                    input: "resize-y min-h-[80px]",
                  }}
                endContent={
                  <MessageIcon className="text-2xl text-default-400 pointer-events-none shrink-0" />
                }
                label="Mensaje"
                name="message"
                placeholder="Escribe tu mensaje aquí..."
                variant="bordered"
                minRows={4}
                value={message}
                onValueChange={setMessage}
              />
            </ModalBody>
            <ModalFooter>
              <Button 
                color="danger" 
                variant="flat" 
                onPress={onClose}
                isDisabled={state.submitting}
              >
                Cancelar
              </Button>
              <Button 
                color="primary" 
                type="submit"
                isLoading={state.submitting}
                isDisabled={!email.trim() || !message.trim()}
              >
                {state.submitting ? "Enviando..." : "Enviar"}
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ContactModal;