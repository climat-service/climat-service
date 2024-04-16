import Favourites from "@/components/Favourites/Favourites";
import routes from "@/utils/routes";
import api from "@/utils/classes/Api";

const getAllCatalogItems = async () => {
  const data = await api.get(`${routes.backend}/api/catalog-items?populate=*`);
  return data.data;
};

const FavouritesPage = async () => {
  const catalogItems = await getAllCatalogItems();
  return <Favourites catalogItems={catalogItems} />;
};

export default FavouritesPage;
