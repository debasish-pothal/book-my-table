import Link from "next/link";

export default function RestaurantCard() {
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href="/restaurant/test">
        <img
          src="https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg"
          alt=""
          className="w-full h-36"
        />
        <div className="p-1">
          <h3 className="font-bold text-2xl text-black mb-2">
            Milestones Grill
          </h3>
          <div className="flex items-start text-black">
            <div className="flex mb-2">*****</div>
            <p className="ml-2">77 reviews</p>
          </div>
          <div className="flex text-reg font-light capitalize text-black">
            <p className=" mr-3">Mexican</p>
            <p className="mr-3">$$$$</p>
            <p>Toronto</p>
          </div>
          <p className="text-sm mt-1 font-bold text-black">
            Booked 3 times today
          </p>
        </div>
      </Link>
    </div>
  );
}
