"use client";
import ICatalogItem from "@/interfaces/ICatalogItem";
import Button from "../ui/Button";
import ContentZone from "../ui/ContentZone";
import CrossIcon from "../ui/icons/CrossIcon";
import CartItem from "./CartItem/CartItem";
import local from "@/utils/classes/Local";

interface ICartProps {
  catalogItems: { id: number; attributes: ICatalogItem }[];
}

const Cart = ({ catalogItems }: ICartProps) => {
  const cartIdArray = local.get("cart");

  let actualCatalogItems = null;

  if (cartIdArray && cartIdArray.length > 0) {
    actualCatalogItems = catalogItems.filter((item) => {
      return cartIdArray.includes(item.id);
    });
  }

  const pricesBoxStyles = `flex items-center justify-between`;

  return (
    <main className="flex items-center justify-center flex-col pb-16 lg:pt-16 lg:flex-row lg:max-w-[1280px] lg:mx-auto">
      <div className="w-full">
        <ContentZone>
          <div className="flex items-center justify-start gap-[5px] mb-6">
            <h1 className="font-bold">Корзина</h1>
            <p className="text-[#979797] text-xs">
              {actualCatalogItems &&
                actualCatalogItems.length > 0 &&
                `${actualCatalogItems.length} товара`}
            </p>
          </div>
          <p
            className="flex items-center justify-start gap-2 text-sm mb-5 cursor-pointer"
            onClick={() => {
              local.remove("cart");
              window.location.reload();
            }}
          >
            <CrossIcon />
            Удалить все
          </p>{" "}
        </ContentZone>
        {actualCatalogItems && actualCatalogItems.length > 0 ? (
          actualCatalogItems.map((item) => {
            console.log(item);
            return <CartItem key={item.id} {...item.attributes} />;
          })
        ) : (
          <p className="text-center text-[#979797] text-sm">
            Ваша корзина пуста
          </p>
        )}
      </div>
      <div className="flex items-center justify-center flex-col">
        <Button color="green" className="mt-9 mb-5">
          Оплатить
        </Button>
        <ul className="max-w-[237px] lg:max-w-[400px] w-full flex flex-col gap-7 bg-[#F4F4F4] py-6 px-2 lg:px-5">
          <li className={pricesBoxStyles}>
            <p className="text-xs lg:text-sm font-semibold">Всего : 3 товара</p>
            <p className="font-semibold">45 000₽</p>
          </li>
          <li className={pricesBoxStyles}>
            <p className="text-xs lg:text-sm">Выгода</p>
            <p className="text-xs lg:text-sm text-[#979797]">-10 000₽</p>
          </li>
          <li className={pricesBoxStyles}>
            <p className="text-lg font-semibold">Итого</p>
            <p className="text-2xl font-semibold">35 000₽</p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Cart;
