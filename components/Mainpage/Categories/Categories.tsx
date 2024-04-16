"use client";
import ContentZone from "@/components/ui/ContentZone";
import routes from "@/utils/routes";
import Link from "next/link";
import CategoriesItem from "./CategoriesItem/CategoriesItem";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Categories = () => {
  const categories = [
    {
      categoryName: "Для дома",
    },
    {
      categoryName: "Для офиса",
    },
    {
      categoryName: "Полупромышленные кондиционеры",
    },
    {
      categoryName: "Профессиональное климатическое оборудование",
    },
    {
      categoryName: "Для дома",
    },
  ];

  return (
    <section>
      <ContentZone>
        <article className="flex items-center justify-between mb-8">
          <h2 className="lg:text-3xl font-bold">Категории</h2>
          <Link
            href={routes.catalog}
            className="text-[#0C60A4] font-medium text-xs"
          >
            Все товары
          </Link>
        </article>
        <ul className="md:hidden">
          <CarouselProvider
            naturalSlideWidth={200}
            naturalSlideHeight={197}
            totalSlides={categories.length}
          >
            <Slider>
              {categories.map((category, index) => {
                return (
                  <Slide key={index} index={index}>
                    <Link href={"/"}>
                      <li className="flex items-center justify-center">
                        <CategoriesItem categoryName={category.categoryName} />
                      </li>
                    </Link>
                  </Slide>
                );
              })}
            </Slider>
          </CarouselProvider>
        </ul>
        <ul className="hidden md:flex items-center justify-center flex-wrap gap-7">
          {categories.map((category, index) => {
            return (
              <Link href={"/"} key={index}>
                <li className="flex items-center justify-center">
                  <CategoriesItem categoryName={category.categoryName} />
                </li>
              </Link>
            );
          })}
        </ul>
      </ContentZone>
    </section>
  );
};

export default Categories;
