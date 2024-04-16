import ProgressBar from "@/components/ui/ProgressBar/ProgressBar";
import RatingStarIcon from "@/components/ui/icons/RatingStarIcon";

interface ReviewsProgressListProps {
  ratingCount: number[];
  rating: number;
  AllRating: number;
}

const ReviewsProgressList = ({
  ratingCount,
  rating,
  AllRating,
}: ReviewsProgressListProps) => {
  return (
    <div>
      <div className="flex items-center justify-start gap-2 mb-3 lg:mb-5">
        <RatingStarIcon className="w-6 h-6" />
        <p className="text-xl font-medium flex items-center justify-center gap-1">
          {rating}
          <span className="text-base text-[#979797]">/5</span>
        </p>
      </div>
      <ul className="flex gap-3 flex-col-reverse">
        {ratingCount.map((rating, index) => {
          const progressPercentage = (rating / AllRating) * 100;

          return (
            <li
              className="flex items-center justify-center gap-1 lg:justify-start"
              key={index}
            >
              <p className="text-xs font-medium">{index + 1}</p>
              <ProgressBar
                progress={!progressPercentage ? 0 : progressPercentage}
                className="w-full max-w-[187px] lg:max-w-none"
              />
              <p className="text-[10px]">{rating}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReviewsProgressList;
