import { search } from "@/images/icons";
import IUi from "@/interfaces/IUi";
import Image from "next/image";

const SearchIcon = ({ onClick, className }: IUi) => {
  return (
    <Image
      src={search}
      alt="черная лупа"
      priority
      className={className}
      onClick={onClick}
    />
  );
};

export default SearchIcon;
