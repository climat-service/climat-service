import { filter } from "@/images/icons";
import IUi from "@/interfaces/IUi";
import Image from "next/image";

const FilterIcon = ({ onClick, className }: IUi) => {
  return (
    <Image
      src={filter}
      alt="черное сердечко"
      priority
      className={className}
      onClick={onClick}
    />
  );
};

export default FilterIcon;
