import IReview from "@/interfaces/IReview";

class RatingReviews {
  constructor(public reviews: IReview[]) {
    this.reviews = reviews;
  }

  calculateRating = () => {
    const ratingCount = [0, 0, 0, 0, 0];

    if (!this.reviews) return ratingCount;

    this.reviews.forEach((review) => {
      ratingCount[review.attributes.rate - 1] += 1;
    });

    return ratingCount;
  };

  defineRating = () => {
    const ratingCount = this.calculateRating();

    const rating = ratingCount.reduce((acc, rating, index) => {
      return acc + rating * (index + 1);
    }, 0);

    const AllRating = this.defineAllRating();

    const ratingAverage = rating / AllRating;

    if (isNaN(ratingAverage)) return 0;

    return ratingAverage;
  };

  defineAllRating = () => {
    const ratingCount = this.calculateRating();
    const AllRating = ratingCount.reduce((acc, rating) => acc + rating, 0);
    return AllRating;
  };
}

export default RatingReviews;
