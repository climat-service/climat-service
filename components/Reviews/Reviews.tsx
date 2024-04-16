import IReview from "@/interfaces/IReview";
import ContentZone from "../ui/ContentZone";
import ReviewsItem from "./ReviewsItem/ReviewsItem";
import ReviewsProgressList from "./ReviewsProgressList/ReviewsProgressList";
import RatingReviews from "@/utils/classes/RatingReviews";

interface ReviewsProps {
  reviews: IReview[];
}

const Reviews = async ({ reviews }: ReviewsProps) => {
  const ratingReviews = new RatingReviews(reviews);

  const ratingCount = ratingReviews.calculateRating();

  const rating = ratingReviews.defineRating();

  const AllRating = ratingReviews.defineAllRating();

  return (
    <main>
      <ContentZone className="my-6 lg:my-11 lg:mb-20 lg:p-6">
        <h1 className="font-bold mb-6">Отзывы</h1>
        <ReviewsProgressList
          ratingCount={ratingCount}
          rating={rating}
          AllRating={AllRating}
        />
        <ul className="mt-9 flex items-center justify-center flex-col lg:w-full lg:items-start">
          {reviews ? (
            reviews.map((review) => {
              const { user, rate, text } = review.attributes;
              return (
                <>
                  {user && user.data.attributes && (
                    <li className="w-full" key={review.id}>
                      <ReviewsItem
                        name={user.data.attributes.username}
                        rate={rate}
                        reviewText={text}
                      />
                    </li>
                  )}
                </>
              );
            })
          ) : (
            <p>Отзывов пока нет</p>
          )}
        </ul>
      </ContentZone>
    </main>
  );
};

export default Reviews;
