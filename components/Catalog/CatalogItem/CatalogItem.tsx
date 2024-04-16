"use client";
import Image from "next/image";
import CatalogHeartDefaultIcon from "@/components/ui/icons/CatalogHeartDefaultIcon";
import Button from "@/components/ui/Button";
import Link from "next/link";
import RatingStartList from "@/components/ui/RatingStarList/RatingStartList";
import ICatalogItem from "@/interfaces/ICatalogItem";
import RatingReviews from "@/utils/classes/RatingReviews";
import { useState } from "react";
import local from "@/utils/classes/Local";
import routes from "@/utils/routes";

const CatalogItem = ({
  id,
  attributes,
}: {
  id: number;
  attributes: ICatalogItem;
}) => {
  const { name, price, type, reviews } = attributes;
  console.log(attributes);

  const ratingReviews = new RatingReviews(reviews.data);

  const rating = ratingReviews.defineRating();

  const allRating = ratingReviews.defineAllRating();

  const likedArray = local.get("liked");
  const cartArray = local.get("cart");

  let isLiked = false;

  let isInCart = false;

  if (likedArray) {
    if (likedArray.includes(id)) {
      isLiked = true;
    }
  }

  if (cartArray) {
    if (cartArray.includes(id)) {
      isInCart = true;
    }
  }

  const [liked, setLiked] = useState(isLiked);
  const [inCart, setInCart] = useState(isInCart);

  const handleLike = () => {
    const actualLikedArray = local.get("liked");
    if (liked) {
      setLiked(false);
      const newLikedArray = actualLikedArray.filter((item: any) => item !== id);
      local.set("liked", newLikedArray);
    } else {
      setLiked(true);
      if (!actualLikedArray || actualLikedArray.length === 0) {
        local.set("liked", [id]);
        return;
      }
      const newLikedArray = [...actualLikedArray, id];
      local.set("liked", newLikedArray);
    }
  };

  const handleAddToCart = () => {
    const actualCartArray = local.get("cart");
    if (inCart) {
      setInCart(false);
      const newCartArray = actualCartArray.filter((item: any) => item !== id);
      local.set("cart", newCartArray);
    } else {
      setInCart(true);
      if (!actualCartArray || actualCartArray.length === 0) {
        local.set("cart", [id]);
        return;
      }
      const newCartArray = [...actualCartArray, id];
      local.set("cart", newCartArray);
    }
  };

  const defineTypeForHeartIcon = liked ? "active" : "default";

  return (
    <article
      className={`flex flex-col xl:items-center xl:justify-center max-w-[160px] xl:max-w-[320px] px-4 py-2 xl:py-4 xl:px-6 border-b border border-[#EEE]`}
    >
      <CatalogHeartDefaultIcon
        className="self-end cursor-pointer"
        type={defineTypeForHeartIcon}
        onClick={handleLike}
      />
      <Link href={`/catalog/${id}`}>
        <Image
          src={`${routes.backend}${attributes.images.data[0].attributes.url}`}
          alt="кондиционер"
          width={250}
          height={206}
          className="w-[109px] h-[54px] xl:w-[250px] xl:h-[206px]"
        />
      </Link>
      <p className="text-xs flex flex-col max-w-[120px] xl:text-xs xl:items-start xl:gap-0 xl:justify-center xl:max-w-none xl:block xl:flex-row gap-1 xl:self-start">
        <span className="font-semibold xl:text-sm xl:min-w-max">{type}</span>{" "}
        {name}
      </p>
      <p className="font-semibold text-xs my-2 xl:self-start xl:text-lg">
        {price}₽
      </p>
      <RatingStartList allRating={allRating} rating={rating} />
      {inCart ? (
        <Button
          color="blue"
          className="max-w-[270px] hidden xl:block max-h-[26px] mt-4 text-sm"
          onClick={handleAddToCart}
        >
          Убрать из корзины
        </Button>
      ) : (
        <Button
          color="green"
          className="max-w-[270px] hidden xl:block max-h-[26px] mt-4 text-sm"
          onClick={handleAddToCart}
        >
          В корзину
        </Button>
      )}
    </article>
  );
};

export default CatalogItem;
