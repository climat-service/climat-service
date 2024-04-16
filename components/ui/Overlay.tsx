"use client";
import IUi from "@/interfaces/IUi";
import { useEffect } from "react";

const Overlay = ({ children, className }: IUi) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className={
        "bg-[#F4F4F4] absolute z-50  top-0 left-0 w-full h-full flex items-center justify-center" +
        ` ${className}`
      }
    >
      {children}
    </div>
  );
};

export default Overlay;
