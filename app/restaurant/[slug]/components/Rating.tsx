import { calculateReviewRatingAverage } from "@/utils/calculateREviewRatingAverage";
import { Review } from "@prisma/client";

export default function Rating({reviews}: {reviews: Review[]}) {
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <p className="text-black">*****</p>
        <p className="text-reg text-black ml-3">{calculateReviewRatingAverage(reviews).toFixed(1)}</p>
      </div>
      <div>
        <p className="text-reg text-black ml-4">{reviews.length} Review{reviews.length > 1 && 's'}</p>
      </div>
    </div>
  );
}
