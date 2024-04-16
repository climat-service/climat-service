import { plus } from "@/images/icons";
import IUi from "@/interfaces/IUi";
import Image from "next/image";

const PlusIcon = ({ onClick, className }: IUi) => {
  return (
    <Image
      src={plus}
      alt="иконка плюсик"
      priority
      className={className}
      onClick={onClick}
    />
  );
};

export default PlusIcon;
