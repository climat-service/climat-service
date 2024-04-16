interface CatalogItemCategoryAndSerialProps {
  category: string;
  serial: string;
}

const CatalogItemCategoryAndSerial = ({
  category,
  serial,
}: CatalogItemCategoryAndSerialProps) => {
  return (
    <div className="flex flex-col gap-3 mb-2 xl:gap-6">
      <p className="text-xs xl:text-sm font-medium py-1 px-2 bg-[#F4F4F4] text-center mt-8 max-w-[101px] xl:max-w-[120px] rounded-2xl">
        {category}
      </p>
      <p className="text-[#979797] text-xs xl:text-sm">
        Серийный номер:{" "}
        <span className="text-[#2F2F2F] font-semibold">{serial}</span>
      </p>
    </div>
  );
};

export default CatalogItemCategoryAndSerial;
