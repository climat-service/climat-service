import ContentZone from "@/components/ui/ContentZone";
import CatalogItem from "../CatalogItem/CatalogItem";
import CatalogMobileFIlters from "../CatalogMobileFIlters/CatalogMobileFIlters";
import Pagination from "@/components/ui/Pagination/Pagination";
import ICatalogItem from "@/interfaces/ICatalogItem";

interface ICatalogDesktopProps {
  catalogItems: { id: number; attributes: ICatalogItem }[];
  setFilteredItems: (value: any) => void;
  allItems: { id: number; attributes: ICatalogItem }[];
}

const CatalogDesktop = ({
  catalogItems,
  setFilteredItems,
  allItems,
}: ICatalogDesktopProps) => {
  const blueText = `text-[#0C60A4]`;

  return (
    <ContentZone className="hidden xl:block">
      <h1 className="text-2xl font-semibold mb-8 mt-16">
        Найдено <span className={blueText}>{allItems.length}</span> товаров
      </h1>
      <div className="flex items-start justify-center gap-10">
        <CatalogMobileFIlters
          catalogItems={allItems}
          setCatalogItems={setFilteredItems}
        />
        <ul className="flex items-center justify-start flex-wrap w-full">
          {catalogItems.map((item) => {
            return (
              <li key={item.id}>
                <CatalogItem {...item} />
              </li>
            );
          })}
        </ul>
      </div>
      <Pagination
        items={allItems}
        itemsPerPage={6}
        setCurrentItems={setFilteredItems}
      />
    </ContentZone>
  );
};

export default CatalogDesktop;
