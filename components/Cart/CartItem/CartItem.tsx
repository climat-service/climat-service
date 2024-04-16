"use client";
import RatingStartList from "@/components/ui/RatingStarList/RatingStartList";
import ContentZone from "@/components/ui/ContentZone";
import HeartIcon from "@/components/ui/icons/HeartIcon";
import MinusIcon from "@/components/ui/icons/MinusIcon";
import PlusIcon from "@/components/ui/icons/PlusIcon";
import SmallArrowLeftIcon from "@/components/ui/icons/SmallArrowLeftIcon";
import Image from "next/image";
import { useState } from "react";
import RatingReviews from "@/utils/classes/RatingReviews";
import IReview from "@/interfaces/IReview";
import ICatalogItem from "@/interfaces/ICatalogItem";
import routes from "@/utils/routes";

const CartItem = ({ images, type, name, price, reviews }: ICatalogItem) => {
  const [cartCount, setCartCount] = useState<number>(1);

  const image = images as any;

  const imageLink = `${routes.backend}${image.data[0].attributes.url}`;

  const ratingReviews = new RatingReviews(reviews.data);

  const rating = ratingReviews.defineRating();

  const allRating = ratingReviews.defineAllRating();

  const handlePlus = () => {
    setCartCount((prev) => prev + 1);
  };

  const handleMinus = () => {
    if (cartCount > 1) {
      setCartCount((prev) => prev - 1);
    }
  };

  return (
    <>
      <article className="border-y border-[#EEE] w-full py-4 lg:hidden">
        <ContentZone className="flex items-center justify-center flex-col">
          <Image src={imageLink} alt="кондиционер" width={250} height={206} />
          <div className="flex flex-col gap-1 mb-4">
            <p className="text-xs">
              <span className="text-sm font-semibold">{type}</span> {name}
            </p>
            <p className="text-lg font-semibold">{price}₽</p>
            <RatingStartList rating={rating} allRating={allRating} />
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-3 py-2 px-3 bg-[#F4F4F4] rounded-md">
              <MinusIcon onClick={handleMinus} />
              {cartCount}
              <PlusIcon onClick={handlePlus} />
            </div>
            <div className="flex items-center justify-center gap-2 py-2 px-3 border border-[#EEE] rounded-xl text-xs">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.67115 6.22115C6.42126 5.47127 7.43849 5.05001 8.49915 5.05001C9.5598 5.05001 10.577 5.47127 11.3271 6.22115L12.4991 7.39215L13.6711 6.22115C14.0401 5.83911 14.4815 5.53438 14.9695 5.32475C15.4575 5.11511 15.9824 5.00477 16.5135 5.00015C17.0447 4.99554 17.5714 5.09674 18.063 5.29787C18.5545 5.49899 19.0012 5.796 19.3767 6.17157C19.7523 6.54714 20.0493 6.99375 20.2504 7.48534C20.4516 7.97692 20.5528 8.50364 20.5481 9.03476C20.5435 9.56588 20.4332 10.0908 20.2236 10.5788C20.0139 11.0668 19.7092 11.5082 19.3271 11.8772L12.4991 18.7062L5.67115 11.8772C4.92126 11.127 4.5 10.1098 4.5 9.04915C4.5 7.9885 4.92126 6.97126 5.67115 6.22115Z"
                  fill="#979797"
                />
              </svg>
              В избранное
            </div>
          </div>
        </ContentZone>
      </article>
      <article className="hidden lg:flex py-4 px-6 gap-11 border border-[#EEE] max-w-[792px] mx-auto">
        <Image src={imageLink} alt="кондиционер" width={250} height={206} />
        <div className="flex flex-col items-start justify-center gap-8">
          <div>
            <p className="text-xs mb-[6px]">
              <span className="text-base font-semibold">{type}</span> <br />
              {name}
            </p>
            <RatingStartList rating={rating} allRating={allRating} />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-8">
          <p className="text-lg font-semibold">15 000₽</p>
          <div className="flex items-center justify-center gap-3 py-2 px-3 bg-[#F4F4F4] rounded-md text-sm">
            {cartCount}
            <div>
              <SmallArrowLeftIcon
                onClick={handlePlus}
                className="rotate-90  w-4 h-4 cursor-pointer"
              />
              <SmallArrowLeftIcon
                onClick={handleMinus}
                className="-rotate-90 w-4 h-4 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default CartItem;
