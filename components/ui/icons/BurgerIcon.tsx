import { burger } from "@/images/icons";
import Image from "next/image";
import IUi from "@/interfaces/IUi";

const BurgerIcon = ({ onClick, className }: IUi) => {
  return (
    <Image
      src={burger}
      alt="три палочки параллельно друг другу"
      priority
      className={className}
      onClick={onClick}
    />
  );
};

export default BurgerIcon;
