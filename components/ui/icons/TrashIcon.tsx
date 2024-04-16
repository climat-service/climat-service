import { trash } from "@/images/icons";
import Image from "next/image";
import IUi from "@/interfaces/IUi";

const TrashIcon = ({ onClick, className }: IUi) => {
  return (
    <Image
      src={trash}
      alt="три палочки параллельно друг другу"
      priority
      className={className}
      onClick={onClick}
    />
  );
};

export default TrashIcon;
