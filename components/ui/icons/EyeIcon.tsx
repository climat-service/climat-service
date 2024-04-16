import { eye } from "@/images/icons";
import IUi from "@/interfaces/IUi";
import Image from "next/image";

const EyeIcon = ({ onClick, className }: IUi) => {
  return (
    <Image
      src={eye}
      alt="черный глаз"
      priority
      className={className}
      onClick={onClick}
    />
  );
};

export default EyeIcon;
