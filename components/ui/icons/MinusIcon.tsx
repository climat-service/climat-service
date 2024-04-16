import { minus } from "@/images/icons";
import IUi from "@/interfaces/IUi";
import Image from "next/image";

const MinusIcon = ({ onClick, className }: IUi) => {
  return (
    <Image
      src={minus}
      alt="иконка минус"
      priority
      className={className}
      onClick={onClick}
    />
  );
};

export default MinusIcon;
