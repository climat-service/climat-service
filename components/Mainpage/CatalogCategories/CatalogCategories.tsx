import ContentZone from "@/components/ui/ContentZone";
import Link from "next/link";
import CatalogCategoryitem from "./CatalogCategoryitem/CatalogCategoryitem";
import routes from "@/utils/routes";

interface ICatalogCategoriesProps {
  categoryName: string;
  data: {
    type: string;
    name: string;
    description: string;
    tags: string[];
  }[];
}

const CatalogCategories = ({ categoryName, data }: ICatalogCategoriesProps) => {
  return (
    <section>
      <ContentZone>
        <article className="flex items-center justify-between">
          <h2 className="font-semibold text-[#2F2F2F]">{categoryName}</h2>
          <Link
            href={routes.catalog}
            className="text-[#0C60A4] text-xs font-medium"
          >
            Все товары
          </Link>
        </article>
        <ul className="mt-8 flex flex-col gap-8 lg:grid lg:grid-cols-2">
          {data.map((item, index) => {
            let reversed = false;
            if (index >= 1) reversed = true;

            return (
              <li key={item.name} className="lg:first:row-span-2">
                <CatalogCategoryitem catalogItem={item} reversed={reversed} />
              </li>
            );
          })}
        </ul>
      </ContentZone>
    </section>
  );
};

export default CatalogCategories;
