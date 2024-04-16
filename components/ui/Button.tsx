"use client";
import IUi from "@/interfaces/IUi";

interface IButton extends IUi {
  color: "green" | "blue";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  children,
  className,
  color,
  disabled,
  type,
  onClick,
}: IButton) => {
  const greenButton = "bg-[#40A74B] text-white hover:bg-[#296D30]";

  const blueButton = "bg-[#0C60A4] hover:bg-[#0A406B] text-white";

  const currentColor = color === "green" ? greenButton : blueButton;

  const buttonSizes = "h-[42px] w-[255px] lg:w-[400px] lg:h-[53px]";

  return (
    <button
      className={
        `${currentColor} ${buttonSizes} rounded-xl transition-all ${
          disabled ? "!bg-[#979797]" : ""
        }` + ` ${className}`
      }
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
