import RatingStarIcon from "@/components/ui/icons/RatingStarIcon";

interface ReviewsItemProps {
  name: string;
  rate: number;
  reviewText: string;
}

const ReviewsItem = ({ name, rate, reviewText }: ReviewsItemProps) => {
  return (
    <article className="max-w-[255px] lg:max-w-none lg:w-full py-4 border-b-[#EEE] border-b">
      <div className="mb-2 lg:flex items-center justify-between">
        <p className="text-sm font-medium">{name}</p>
        <p className="flex items-center j ustify-start gap-1">
          <RatingStarIcon />
          {rate}
        </p>
      </div>
      <p className="text-xs">{reviewText}</p>
    </article>
  );
};

export default ReviewsItem;
