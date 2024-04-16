/* "use client";
import ContentZone from "@/components/ui/ContentZone";
import RatingStarIcon from "@/components/ui/icons/RatingStarIcon";
import Link from "next/link";
import "pure-react-carousel/dist/react-carousel.es.css";
import Accordeon from "@/components/ui/Accordeon/Accordeon";
import CatalogItemDescription from "../CatalogItemDescription/CatalogItemDescription";
import RatingStartList from "@/components/ui/RatingStarList/RatingStartList";
import CatalogItemTitleAndPrice from "../CatalogItemTitleAndPrice/CatalogItemTitleAndPrice";
import CatalogItemCategoryAndSerial from "../CatalogItemCategoryAndSerial/CatalogItemCategoryAndSerial";
import CatalogItemCarousel from "../CatalogItemCarousel/CatalogItemCarousel";

const CatalogItemMobile = () => {
  const RatingStarArray = Array(5).fill(
    <li>
      <RatingStarIcon />
    </li>
  );
  const images = [
    "/images/image-18.png",
    "/images/catalogItemExample.png",
    "/images/image-18.png",
  ];

  return (
    <ContentZone className="mb-16 xl:my-16 xl:flex items-start justify-center gap-14">
      <CatalogItemCarousel images={images} />
      <article className="xl:max-w-[474px]">
        <CatalogItemCategoryAndSerial category="Кондиционер" serial="107293" />
        <div>
          <CatalogItemTitleAndPrice
            type="Сплит-система TCL"
            title="TAC-07CHSA/IF"
            price={15000}
          />
          <div className="flex items-center justify-start gap-2 my-2">
            <RatingStartList />
            <Link href={"/"} className="text-xs text-[#2F2F2F]">
              Отзывы
            </Link>
          </div>
          <CatalogItemDescription
            description="Пульт ДУ, дисплей, таймер включения/выключения; Режим работы:
        охлаждение, обогрев; Цвет: белый; Минимальный уровень шума внутреннего
        блока: 25 дБ; Мощность в режиме охлаждения: 2050 Вт; Мощность в режиме
        обогрева: 2050 Вт; Потребляемая мощность при обогреве: 570 Вт;
        Потребляемая мощность при охлаждении: 640 Вт;"
          />
          <div>
            <Accordeon
              title="Основные характеристики"
              items={[
                {
                  title: "Площадь помещения",
                  subtitle: "20 м²",
                },
                {
                  title: "Площадь помещения",
                  subtitle: "20 м²",
                },
                {
                  title: "Площадь помещения",
                  subtitle: "20 м²",
                },
              ]}
            />
          </div>
        </div>
      </article>
    </ContentZone>
  );
};

export default CatalogItemMobile;
 */