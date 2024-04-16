import ICatalogItem from "./ICatalogItem";
import IUser from "./IUser";

interface IReview {
  id: number;
  attributes: {
    text: string;
    user: { data: IUser };
    catalogItem: ICatalogItem;
    rate: number;
  };
}

export default IReview;
