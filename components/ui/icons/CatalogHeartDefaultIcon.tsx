import { catalogHeartDefault, catalogHeartActive } from "@/images/icons";
import IUi from "@/interfaces/IUi";
import Image from "next/image";

interface ICatalogHeartDefaultIcon extends IUi {
  type: "default" | "active";
}

const CatalogHeartDefaultIcon = ({
  onClick,
  className,
  type,
}: ICatalogHeartDefaultIcon) => {
  const defineImageForIcon =
    type === "active" ? catalogHeartActive : catalogHeartDefault;

  return (
    <Image
      src={defineImageForIcon}
      alt="изображение кредитной карточки"
      priority
      className={className}
      onClick={onClick}
    />
  );
};

export default CatalogHeartDefaultIcon;
