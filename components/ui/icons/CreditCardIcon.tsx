import { creditCard } from "@/images/icons";
import IUi from "@/interfaces/IUi";
import Image from "next/image";

const CreditCardIcon = ({ onClick, className }: IUi) => {
  return (
    <Image
      src={creditCard}
      alt="изображение кредитной карточки"
      priority
      className={className}
      onClick={onClick}
    />
  );
};

export default CreditCardIcon;
