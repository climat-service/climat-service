import { masterCard } from "@/images/icons";
import IUi from "@/interfaces/IUi";
import Image from "next/image";

const MasterCardIcon = ({ onClick, className }: IUi) => {
  return (
    <Image
      src={masterCard}
      alt="черная иконка Мастер Кард"
      priority
      className={className}
      onClick={onClick}
    />
  );
};

export default MasterCardIcon;
