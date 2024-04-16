import IReview from "./IReview";
import IOrder from "./IOrder";

interface IUser {
  id: number;
  username: string;
  email: string;
  phone: string;
  reviews?: IReview[];
  orders?: IOrder[];
  deliveryAddress?: {
    city: string;
    entrance: string;
    floor: string;
    apartment: string;
    street: string;
  } | null;
  attributes?: {
    username: string;
  };
}

export default IUser;
