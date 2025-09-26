import { useState, useEffect } from "react";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import { clsx } from "@heroui/shared-utils";
import { Trans, useTranslation } from "react-i18next";

import { I18nIcon, LanguageSwitch } from "./language-switch";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  MailIcon,
  LinkedInIcon,
  GithubIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";
import { Logo } from "@/components/icons";
import { availableLanguages } from "@/i18n";

export const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Efecto para detectar la sección activa basada en el scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = siteConfig().navItems.map((item) => item.href);

      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Si la sección está visible en la parte superior de la ventana
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Llamar una vez al montar para establecer la sección inicial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: any) => {
    // Cerrar el menú móvil
    setIsMenuOpen(false);

    // Navegar a la sección
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const searchInput = (
    <Input
      aria-label={t("search")}
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder={`${t("search")}…`}
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <Logo />
            <p className="font-bold text-inherit">DJDEV</p>
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig().navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "cursor-pointer hover:text-primary transition-colors",
                  // Aplicar estilo activo solo a la sección actual
                  activeSection === item.href
                    ? "text-primary font-medium"
                    : "text-foreground"
                )}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link
            isExternal
            href={siteConfig().links.linkedin}
            title={t("linkedin")}
          >
            <LinkedInIcon className="text-2xl text-default-400 pointer-events-none shrink-0" />
          </Link>
          <Link isExternal href={siteConfig().links.email} title={t("email")}>
            <MailIcon className="text-2xl text-default-400 pointer-events-none shrink-0" />
          </Link>
          <Link isExternal href={siteConfig().links.github} title={t("github")}>
            <GithubIcon className="text-2xl text-default-400 pointer-events-none shrink-0" />
          </Link>
          <ThemeSwitch />
          <LanguageSwitch
            availableLanguages={availableLanguages}
            icon={I18nIcon}
          />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig().links.sponsor}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            <Trans i18nKey="sponsor" />
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig().links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <LanguageSwitch
          availableLanguages={availableLanguages}
          icon={I18nIcon}
        />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig().navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                // Remover los colores fijos y aplicar solo el estilo activo
                className={clsx(
                  "w-full text-large cursor-pointer transition-colors",
                  activeSection === item.href
                    ? "text-primary font-medium"
                    : "text-foreground hover:text-primary"
                )}
                href={item.href}
                size="lg"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
