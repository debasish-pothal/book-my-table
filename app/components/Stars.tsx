import Image from "next/image";
import fullStar from "../../public/icons/full-star.png";
import halfStar from "../../public/icons/half-star.png";
import emptyStar from "../../public/icons/empty-star.png";
import { Review } from "@prisma/client";
import { calculateReviewRatingAverage } from "@/utils/calculateReviewRatingAverage";

export default function Stars({ reviews, rating }: { reviews: Review[], rating?: number }) {
  const reviewRating = rating | calculateReviewRatingAverage(reviews);

  const ratingToStars = () => {
    const wholeStars = Math.floor(reviewRating);
    const halfStar = reviewRating - wholeStars;
    
    const stars = Array.from({ length: wholeStars }, () => 1);
    if (halfStar >= 0.1) {
      stars.push(0.5);
    }
    
    return stars.concat(Array.from({ length: 5 - stars.length }, () => 0));
  };

  const renderStars = () => {
    const stars = ratingToStars().map((rating) => rating === 1 ? fullStar : rating === 0.5 ? halfStar : emptyStar);

    return stars.map(star => <Image src={star} alt="" className="w-4 h-4 mr-1" />)
  }

  return (
    <div className="flex items-center">{renderStars()}</div>
  );
}
