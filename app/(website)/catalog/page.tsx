import Catalog from "@/components/Catalog/Catalog";
import api from "@/utils/classes/Api";
import routes from "@/utils/routes";

const getCatalogItems = async () => {
  return await api.get(`${routes.backend}/api/catalog-items?populate=*&pagination[limit]=300`);
};

const CatalogPage = async () => {
  const catalogItems = await getCatalogItems();
  return <Catalog catalogItems={catalogItems} allItems={catalogItems} />;
};

export default CatalogPage;
