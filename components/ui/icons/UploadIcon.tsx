import { upload } from "@/images/icons";
import IUi from "@/interfaces/IUi";
import Image from "next/image";

const UploadIcon = ({ onClick, className }: IUi) => {
  return (
    <Image
      src={upload}
      alt="стрелочка указывает на открытый квадратик"
      priority
      className={className}
      onClick={onClick}
    />
  );
};

export default UploadIcon;
