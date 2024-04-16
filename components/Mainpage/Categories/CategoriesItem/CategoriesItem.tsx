import Image from "next/image";

const CategoriesItem = ({ categoryName }: { categoryName: string }) => {
  return (
    <article className="max-w-[200px] w-full py-5 bg-[#F4F4F4] rounded-3xl flex items-center justify-center flex-col gap-3">
      <Image
        src={"/images/categoryItem.png"}
        alt="камера"
        width={204}
        height={140}
        className="w-[176px] h-[121px]"
      />
      <p className="font-semibold text-center">{categoryName}</p>
    </article>
  );
};

export default CategoriesItem;
