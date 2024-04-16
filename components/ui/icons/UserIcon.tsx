import { user } from "@/images/icons";
import IUi from "@/interfaces/IUi";
import Image from "next/image";

const UserIcon = ({ onClick, className }: IUi) => {
  return (
    <Image
      src={user}
      alt="черная иконка пользователя"
      priority
      className={className}
      onClick={onClick}
    />
  );
};

export default UserIcon;
