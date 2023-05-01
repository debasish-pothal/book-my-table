import { Review } from "@prisma/client";

export default function Reviews({ reviews }: { reviews: Review[] }) {
  return (
    <div>
      {reviews.length === 0 ? (
        <h1 className="font-bold text-3xl text-red-500 mt-10 mb-7 borber-b pb-5">
          No Reviews!
        </h1>
      ) : (
        <>
          <h1 className="font-bold text-3xl text-black mt-10 mb-7 borber-b pb-5">
            {reviews.length === 1
              ? `What ${reviews.length} person is saying`
              : `What ${reviews.length} people are saying`}
          </h1>
          {reviews.map((review) => (
            <div key={review.id}>
              <div className="border-b pb-7 mb-7">
                <div className="flex">
                  <div className="w-1/6 flex flex-col items-center">
                    <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                      <h2 className="text-white text-2xl">{review.first_name.charAt(0)}{review.last_name.charAt(0)}</h2>
                    </div>
                    <p className="text-center text-black">{review.first_name} {review.last_name}</p>
                  </div>
                  <div className="ml-10 w-5/6">
                    <div className="flex items-center">
                      <div className="flex mr-5 text-black">*****</div>
                    </div>
                    <div className="mt-5">
                      <p className="text-lg text-black font-light">{review.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
