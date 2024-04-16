"use client";
import CatalogItem from "../CatalogItem/CatalogItem";
import CatalogSearchFilterTab from "./CatalogSearchFilterTab/CatalogSearchFilterTab";
import Pagination from "@/components/ui/Pagination/Pagination";
import { useState } from "react";
import CatalogMobileFIlters from "../CatalogMobileFIlters/CatalogMobileFIlters";
import ICatalogItem from "@/interfaces/ICatalogItem";

interface ICatalogMobileProps {
  catalogItems: { id: number; attributes: ICatalogItem }[];
  allItems: { id: number; attributes: ICatalogItem }[];
  setFilteredItems: (value: any) => void;
}

const CatalogMobile = ({
  catalogItems,
  setFilteredItems,
  allItems,
}: ICatalogMobileProps) => {
  const [filterShown, setFilterShown] = useState(false);

  return (
    <div className="xl:hidden">
      <CatalogSearchFilterTab
        filterShown={filterShown}
        setFilterShown={setFilterShown}
      />
      {filterShown ? (
        <CatalogMobileFIlters
          setFiltersHidden={setFilterShown}
          catalogItems={catalogItems}
          setCatalogItems={setFilteredItems}
        />
      ) : (
        <ul className="flex items-center justify-center flex-wrap">
          {catalogItems.map((item) => {
            return <CatalogItem key={item.id} {...item} />;
          })}
        </ul>
      )}
      <Pagination
        items={allItems}
        itemsPerPage={6}
        setCurrentItems={setFilteredItems}
      />
    </div>
  );
};

export default CatalogMobile;
