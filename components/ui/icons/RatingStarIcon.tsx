import { ratingStar, ratingStarEmpty } from "@/images/icons";
import IUi from "@/interfaces/IUi";
import Image from "next/image";

interface IRatingStarIcon extends IUi {
  type?: "full" | "empty";
}

const RatingStarIcon = ({
  onClick,
  className,
  type = "full",
}: IRatingStarIcon) => {
  if (type === "full") {
    return (
      <Image
        src={ratingStar}
        alt="черная звезда"
        priority
        className={className}
        onClick={onClick}
      />
    );
  }

  return (
    <Image
      src={ratingStarEmpty}
      alt="черная звезда"
      priority
      className={className}
      onClick={onClick}
    />
  );
};

export default RatingStarIcon;
