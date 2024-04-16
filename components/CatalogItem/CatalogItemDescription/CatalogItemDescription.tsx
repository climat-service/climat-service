"use client";
import Button from "@/components/ui/Button";
import { useState } from "react";
import local from "@/utils/classes/Local";

const CatalogItemDescription = ({
  description,
  id,
}: {
  description: string;
  id: string;
}) => {
  const idNumber = Number(id);
  const cartArray = local.get("cart");
  let isInCart = false;
  if (cartArray) {
    if (cartArray.includes(idNumber)) {
      isInCart = true;
    }
  }
  const [inCart, setInCart] = useState(isInCart);
  const handleAddToCart = () => {
    const actualCartArray = local.get("cart");
    if (inCart) {
      setInCart(false);
      const newCartArray = actualCartArray.filter(
        (item: any) => item !== idNumber
      );
      local.set("cart", newCartArray);
    } else {
      setInCart(true);
      if (!actualCartArray || actualCartArray.length === 0) {
        local.set("cart", [idNumber]);
        return;
      }
      const newCartArray = [...actualCartArray, idNumber];
      local.set("cart", newCartArray);
    }
  };
  return (
    <div className="mb-5">
      <p className="text-sm font-medium mb-1">Описание</p>
      <p className="text-xs lg:text-sm">{description}</p>
      <Button
        color={isInCart ? "blue" : "green"}
        className="mt-3"
        onClick={handleAddToCart}
      >
        {isInCart ? "Удалить из корзины" : "В корзину"}
      </Button>
    </div>
  );
};

export default CatalogItemDescription;
