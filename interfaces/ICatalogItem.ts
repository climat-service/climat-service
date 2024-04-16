import IReview from "./IReview";

interface ICatalogItem {
  id: number;
  name: string;
  coveringArea: number;
  producer: string;
  type: string;
  invertor: boolean;
  power: number;
  energyClass: string;
  description: string;
  price: number;
  category: string;
  reviews: { data: IReview[] };
  images: {
    data: {
      attributes: {
        url: string;
      };
    }[];
  };
}

export default ICatalogItem;
