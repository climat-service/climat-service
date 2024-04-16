import { cube } from "@/images/icons";
import IUi from "@/interfaces/IUi";
import Image from "next/image";

const CubeIcon = ({ onClick, className }: IUi) => {
  return (
    <Image
      src={cube}
      alt="черный куб"
      priority
      className={className}
      onClick={onClick}
    />
  );
};

export default CubeIcon;
