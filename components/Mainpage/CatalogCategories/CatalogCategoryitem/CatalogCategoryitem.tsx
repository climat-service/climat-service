import Image from "next/image";

interface ICalatogItemProps {
  catalogItem: {
    type: string;
    name: string;
    description: string;
    tags: string[];
  };
  reversed: boolean;
}

const CatalogCategoryitem = ({ catalogItem, reversed }: ICalatogItemProps) => {
  return (
    <article
      className={`flex flex-col gap-4 ${
        reversed ? "lg:flex-row" : ""
      } cursor-pointer`}
    >
      <div className="pt-3 px-6 lg:pt-7 lg:px-11 bg-[#F4F4F4] rounded-2xl flex items-end justify-center">
        <Image
          src={"/images/categoryItemImage.png"}
          alt="кондиционер"
          width={525}
          height={198}
          className="w-[210px] h-[79px] lg:w-[525px] lg:h-[198px] object-contain"
        />
      </div>
      <div>
        <p className="flex flex-col gap-1 text-[#2F2F2F] lg:text-2xl font-semibold lg:gap-3">
          <span className="text-[#0C60A4] text-xs lg:text-sm">
            {catalogItem.type}
          </span>
          {catalogItem.name}
        </p>
        <p className="text-xs lg:text-base lg:mt-3">
          {catalogItem.description}
        </p>
        <div className="flex flex-wrap items-center justify-start gap-2 mt-2 lg:mt-6">
          {catalogItem.tags.map((tag) => {
            return (
              <p
                key={tag}
                className="text-xs lg:text-sm text-[#2F2F2F] bg-[#F4F4F4] py-[2px] px-2 rounded-2xl"
              >
                {tag}
              </p>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default CatalogCategoryitem;
