"use client";
import SmallArrowLeftIcon from "../icons/SmallArrowLeftIcon";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IAccordeon {
  title: string;
  items: { title: string; subtitle: string }[];
}

const Accordeon = ({ title, items }: IAccordeon) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article>
      <div
        className="flex items-center cursor-pointer justify-center gap-2 mb-2 xl:justify-start"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <SmallArrowLeftIcon
          className={`transition-all ${isOpen ? "-rotate-90" : " rotate-180"}`}
        />
        {title}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-2"
          >
            {items.map((item) => {
              return (
                <div key={item.title}>
                  <p className="text-xs">{item.title}</p>
                  <p className="text-sm font-semibold">{item.subtitle}</p>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default Accordeon;
