import { logo } from "@/images/icons";
import IUi from "@/interfaces/IUi";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ onClick, className }: IUi) => {
  return (
    <Link href={"/"} className={className}>
      <Image src={logo} alt="logo eco" priority onClick={onClick} />
    </Link>
  );
};

export default Logo;
