"use client";
import ContentZone from "../ui/ContentZone";
import BurgerIcon from "../ui/icons/BurgerIcon";
import HeaderIcons from "./HeaderIcons/HeaderIcons";
import HeaderNavList from "./HeaderNavList/HeaderNavList";
import Logo from "../ui/icons/Logo";
import Input from "../ui/Input";
import SearchIcon from "../ui/icons/SearchIcon";
import { useState } from "react";
import Burger from "./Burger/Burger";
import { AnimatePresence } from "framer-motion";
import routes from "@/utils/routes";

const Header = () => {
  const [shown, setShown] = useState(false);

  const navList = [
    {
      text: "Главная",
      link: "/",
    },
    {
      text: "Каталог",
      link: routes.catalog,
    },
    {
      text: "Контакты",
      link: routes.contacts,
    },
  ];

  return (
    <header className="mt-6">
      <ContentZone className="flex items-center justify-between">
        {/* <Logo className="hidden xl:block" /> */}
        <BurgerIcon
          className="xl:hidden cursor-pointer"
          onClick={() => {
            setShown(true);
          }}
        />
        <HeaderNavList navList={navList} />
        <div className="bg-[#F4F4F4] hidden xl:flex items-center justify-center gap-6 rounded-2xl px-10">
          <SearchIcon className="cursor-pointer" />
          <Input
            placeholder="Поиск"
            type="text"
            className="!bg-[#F4F4F4] border-none"
          />
        </div>
        <HeaderIcons />
        <AnimatePresence>
          {shown && <Burger navList={navList} setShown={setShown} />}
        </AnimatePresence>
      </ContentZone>
    </header>
  );
};

export default Header;
