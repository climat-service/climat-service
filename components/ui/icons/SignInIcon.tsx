import { signIn } from "@/images/icons";
import IUi from "@/interfaces/IUi";
import Image from "next/image";

const SignInIcon = ({ onClick, className }: IUi) => {
  return (
    <Image
      src={signIn}
      alt="стрелочка указывает на открытый квадратик"
      priority
      className={className}
      onClick={onClick}
    />
  );
};

export default SignInIcon;
