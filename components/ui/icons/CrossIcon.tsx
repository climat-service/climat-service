import { cross } from "@/images/icons";
import IUi from "@/interfaces/IUi";
import Image from "next/image";

const CrossIcon = ({ onClick, className }: IUi) => {
  return (
    <Image
      src={cross}
      alt="черный крестик"
      priority
      className={className}
      onClick={onClick}
    />
  );
};

export default CrossIcon;
