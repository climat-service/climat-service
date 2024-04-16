"use client";
import CatalogDesktop from "./CatalogDesktop/CatalogDesktop";
import CatalogMobile from "./CatalogMobile/CatalogMobile";
import ICatalogItem from "@/interfaces/ICatalogItem";
import { useState } from "react";

interface CatalogProps {
  catalogItems: { data: { id: number; attributes: ICatalogItem }[] };
  allItems: { data: { id: number; attributes: ICatalogItem }[] };
}

const Catalog = ({ catalogItems, allItems }: CatalogProps) => {
  const [filteredItems, setFilteredItems] = useState(catalogItems.data);
  return (
    <main>
      <CatalogMobile
        catalogItems={filteredItems}
        setFilteredItems={setFilteredItems}
        allItems={allItems.data}
      />
      <CatalogDesktop
        catalogItems={filteredItems}
        setFilteredItems={setFilteredItems}
        allItems={allItems.data}
      />
    </main>
  );
};

export default Catalog;
