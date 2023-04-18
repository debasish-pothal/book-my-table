import Link from "next/link";

export default function RestaurantCard() {
  return (
    <div className="border-b flex pb-5">
      <img
        src="https://images.otstatic.com/prod1/49153814/2/medium.jpg"
        alt=""
        className="w-44 rounded"
      />
      <div className="pl-5">
        <h2 className="text-3xl text-black">Aiāna Restaurant Collective</h2>
        <div className="flex items-start text-black">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg text-black">
            <p className="mr-4">$$$</p>
            <p className="mr-4">Mexican</p>
            <p className="mr-4">Ottawa</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href="/restaurant/test">View more information</Link>
        </div>
      </div>
    </div>
  );
}