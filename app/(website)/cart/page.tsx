import Cart from "@/components/Cart/Cart";
import routes from "@/utils/routes";
import api from "@/utils/classes/Api";

const fetchAllCatalogItems = async () => {
  const catalogItems = await api.get(`${routes.backend}/api/catalog-items?populate=*`);
  return catalogItems.data;
};

const CartPage = async () => {
  const catalogItems = await fetchAllCatalogItems();
  return <Cart catalogItems={catalogItems} />;
};

export default CartPage;
