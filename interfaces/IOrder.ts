import IUser from "./IUser";
import ICatalogItem from "./ICatalogItem";

interface IOrder {
  id: number;
  user: IUser;
  price: number;
  catalogItems: ICatalogItem[];
  deliveryDate: string;
  address: string;
}

export default IOrder;
