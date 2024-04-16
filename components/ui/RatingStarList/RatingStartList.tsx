import RatingStarIcon from "../icons/RatingStarIcon";

interface RatingStartListProps {
  rating: number;
  allRating: number;
}

const RatingStartList = ({ rating, allRating }: RatingStartListProps) => {
  const ratingStarEmpyCount = 5 - rating;

  const RatingStarArray = Array(rating).fill(
    <li>
      <RatingStarIcon />
    </li>
  );
  const RatingStarEmpyArray = Array(ratingStarEmpyCount).fill(
    <li>
      <RatingStarIcon type="empty" />
    </li>
  );

  return (
    <div className="flex items-center justify-start gap-2 self-start">
      <ul className="flex items-center justify-start">
        {RatingStarArray}
        {RatingStarEmpyArray}
      </ul>
      <p className="text-xs">
        {rating}
        <span className="text-[#717171]">/{allRating}</span>
      </p>
    </div>
  );
};

export default RatingStartList;
