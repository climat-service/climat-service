import { heart } from "@/images/icons";
import IUi from "@/interfaces/IUi";
import Image from "next/image";

const HeartIcon = ({ onClick, className }: IUi) => {
  return (
    <Image
      src={heart}
      alt="черное сердечко"
      priority
      className={className}
      onClick={onClick}
    />
  );
};

export default HeartIcon;
