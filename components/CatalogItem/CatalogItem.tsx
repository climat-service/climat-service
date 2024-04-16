import ContentZone from "@/components/ui/ContentZone";
import Link from "next/link";
import "pure-react-carousel/dist/react-carousel.es.css";
import Accordeon from "@/components/ui/Accordeon/Accordeon";
import CatalogItemDescription from "./CatalogItemDescription/CatalogItemDescription";
import RatingStartList from "@/components/ui/RatingStarList/RatingStartList";
import CatalogItemTitleAndPrice from "./CatalogItemTitleAndPrice/CatalogItemTitleAndPrice";
import CatalogItemCategoryAndSerial from "./CatalogItemCategoryAndSerial/CatalogItemCategoryAndSerial";
import CatalogItemCarousel from "./CatalogItemCarousel/CatalogItemCarousel";
import api from "@/utils/classes/Api";
import routes from "@/utils/routes";
import RatingReviews from "@/utils/classes/RatingReviews";

const getCurrentItem = async (id: string) => {
  const response = await api.get(
    `${routes.backend}/api/catalog-items/${id}?populate=*`
  );
  return response.data.attributes;
};

const CatalogItem = async ({ id }: { id: string }) => {
  const catalogItemData = await getCurrentItem(id);
  const {
    name,
    type,
    price,
    description,
    coveringArea,
    energyClass,
    power,
    invertor,
    category,
  } = catalogItemData;

  const images = catalogItemData.images.data.map((image: any) => ({
    src: `${routes.backend}${image.attributes.url}`,
  }));

  const ratingReviews = new RatingReviews(catalogItemData.reviews.data);

  const rating = ratingReviews.defineRating();

  const allRating = ratingReviews.defineAllRating();

  return (
    <main>
      <ContentZone className="mb-16 xl:my-16 xl:flex items-start justify-center gap-14">
        <CatalogItemCarousel images={images} />
        <article className="xl:max-w-[474px]">
          <CatalogItemCategoryAndSerial category={category} serial="107293" />
          <div>
            <CatalogItemTitleAndPrice type={type} title={name} price={price} />
            <div className="flex items-center justify-start gap-2 my-2">
              <RatingStartList rating={rating} allRating={allRating} />
              <Link
                href={`/catalog/${id}/reviews`}
                className="text-xs text-[#2F2F2F]"
              >
                Отзывы
              </Link>
            </div>
            <CatalogItemDescription description={description} id={id}/>
            <div className="flex items-center justify-start">
              <Accordeon
                title="Основные характеристики"
                items={[
                  {
                    title: "Площадь помещения",
                    subtitle: `${coveringArea} м²`,
                  },
                  {
                    title: "Класс энергопотребления",
                    subtitle: energyClass,
                  },
                  {
                    title: "Мощность кондиционера",
                    subtitle: power,
                  },
                  {
                    title: "Инвертор",
                    subtitle: invertor ? "Да" : "Нет",
                  },
                  {
                    title: "Тип системы",
                    subtitle: type,
                  },
                ]}
              />
            </div>
          </div>
        </article>
      </ContentZone>
    </main>
  );
};

export default CatalogItem;
