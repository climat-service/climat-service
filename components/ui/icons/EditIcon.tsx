import { edit } from "@/images/icons";
import IUi from "@/interfaces/IUi";
import Image from "next/image";

const EditIcon = ({ onClick, className }: IUi) => {
  return (
    <Image
      src={edit}
      alt="черный карандаш"
      priority
      className={className}
      onClick={onClick}
    />
  );
};

export default EditIcon;
