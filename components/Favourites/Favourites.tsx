"use client";
import CatalogItem from "../Catalog/CatalogItem/CatalogItem";
import Pagination from "../ui/Pagination/Pagination";
import ContentZone from "../ui/ContentZone";
import ICatalogItem from "@/interfaces/ICatalogItem";
import { useState } from "react";
import local from "@/utils/classes/Local";

interface FavouritesProps {
  catalogItems: { id: number; attributes: ICatalogItem }[];
}

const Favourites = ({ catalogItems }: FavouritesProps) => {
  const likedIdArray = local.get("liked");

  if (!likedIdArray || likedIdArray.length === 0)
    return (
      <ContentZone>
        <h1 className="font-bold my-6 lg:text-2xl lg:my-8">Избранное пусто</h1>
      </ContentZone>
    );

  const likedArrayItems = catalogItems.filter((item) =>
    likedIdArray.includes(item.id)
  );
  // eslint-disable-next-line
  const [visibleItems, setVisibleItems] = useState(likedArrayItems);


  return (
    <main>
      <ContentZone>
        <h1 className="font-bold my-6 lg:text-2xl lg:my-8">Избранное</h1>
        <ul className="flex items-center justify-center flex-wrap">
          {visibleItems.map((item, index) => {
            return (
              <li key={index}>
                <CatalogItem id={item.id} attributes={item.attributes} />
              </li>
            );
          })}
        </ul>
        <Pagination
          items={likedArrayItems}
          setCurrentItems={setVisibleItems}
          itemsPerPage={6}
        />
      </ContentZone>
    </main>
  );
};

export default Favourites;
