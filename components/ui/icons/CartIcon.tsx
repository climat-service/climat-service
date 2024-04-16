import { shoppingCart } from "@/images/icons";
import IUi from "@/interfaces/IUi";
import Image from "next/image";

const CartIcon = ({ onClick, className }: IUi) => {
  return (
    <Image
      src={shoppingCart}
      alt="черная тележка для покупок"
      priority
      className={className}
      onClick={onClick}
    />
  );
};

export default CartIcon;
