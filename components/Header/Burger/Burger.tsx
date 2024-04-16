"use client";
import ContentZone from "@/components/ui/ContentZone";
import Overlay from "@/components/ui/Overlay";
import BurgerIcon from "@/components/ui/icons/BurgerIcon";
import Logo from "@/components/ui/icons/Logo";
import Link from "next/link";
import { motion } from "framer-motion";
import routes from "@/utils/routes";

interface IBurger {
  navList: {
    text: string;
    link: string;
  }[];
  setShown: (value: boolean) => void;
}

const Burger = ({ navList, setShown }: IBurger) => {
  const additionalLinks = [
    {
      text: "Избранное",
      link: routes.favourites,
    },
    {
      text: "Корзина",
      link: routes.cart,
    },
    {
      text: "Профиль",
      link: routes.profile,
    },
  ];

  navList = [...navList, ...additionalLinks];

  return (
    <Overlay>
      <motion.div
        initial={{ x: -2000 }}
        animate={{ x: 0 }}
        exit={{ x: -2000 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="min-h-screen flex items-center justify-start flex-col mt-6 w-full"
      >
        <ContentZone className="min-h-screen flex items-center justify-start flex-col mt-6">
          <article className="flex items-center justify-between w-full">
            <BurgerIcon
              onClick={() => {
                setShown(false);
              }}
            />
            <Logo />
          </article>
          <nav className="mt-[62px]">
            <ul className="flex flex-col items-center justify-center gap-10">
              {navList.map((item) => {
                return (
                  <li key={item.text}>
                    <Link
                      href={item.link}
                      className="font-medium text-lg"
                      onClick={() => {
                        setShown(false);
                      }}
                    >
                      {item.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </ContentZone>
      </motion.div>
    </Overlay>
  );
};

export default Burger;
