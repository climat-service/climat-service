import { crossedEye } from "@/images/icons";
import IUi from "@/interfaces/IUi";
import Image from "next/image";

const CrossedEyeIcon = ({ onClick, className }: IUi) => {
  return (
    <Image
      src={crossedEye}
      alt="черный крестик"
      priority
      className={className}
      onClick={onClick}
    />
  );
};

export default CrossedEyeIcon;
