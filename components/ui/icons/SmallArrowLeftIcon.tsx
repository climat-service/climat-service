import { smallArrowLeft } from "@/images/icons";
import IUi from "@/interfaces/IUi";
import Image from "next/image";

const SmallArrowLeftIcon = ({ onClick, className }: IUi) => {
  return (
    <Image
      src={smallArrowLeft}
      alt="небольшая стрелочка указывающая налево"
      priority
      className={className}
      onClick={onClick}
    />
  );
};

export default SmallArrowLeftIcon;
