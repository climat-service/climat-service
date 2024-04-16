interface CatalogItemTitleAndPriceProps {
  type: string;
  title: string;
  price: number;
}

const CatalogItemTitleAndPrice = ({
  type,
  title,
  price,
}: CatalogItemTitleAndPriceProps) => {
  return (
    <>
      <p className="text-xs font-medium flex flex-col xl:text-4xl xl:mb-2">
        <span className="font-semibold text-sm xl:text-2xl">{type}</span>
        {title}
      </p>
      <p className="text-sm font-semibold mt-[2px] xl:text-xl">{price}₽</p>
    </>
  );
};

export default CatalogItemTitleAndPrice;
