import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";

export default function SearchSidebar({
  locations,
  cuisines,
  searchParams,
}: {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: {
    location?: string;
    cuisine?: string;
    price?: PRICE;
  };
}) {
  const prices = [
    {
      price: PRICE.CHEAP,
      label: "$",
      classes: "border w-full text-reg text-center font-light rounded-l p-2",
    },
    {
      price: PRICE.REGULAR,
      label: "$$",
      classes: "border-r border-t border-b w-full text-reg text-center  font-light p-2",
    },
    {
      price: PRICE.EXPENSIVE,
      label: "$$$",
      classes:
        "border-r border-t border-b w-full text-reg text-center font-light p-2 rounded-r",
    },
  ];

  return (
    <div className="w-1/5">
      <div className="border-b pb-4 text-black flex flex-col">
        <h1 className="mb-2">Region</h1>
        {locations.length ? (
          locations.map((location) => (
            <Link
              href={{
                pathname: "/search",
                query: {
                  ...searchParams,
                  location: location.name,
                },
              }}
              key={location.id}
              className="font-light text-reg capitalize"
            >
              {location.name}
            </Link>
          ))
        ) : (
          <p className="text-red-500">Looks Empty!</p>
        )}
      </div>
      <div className="border-b pb-4 mt-3 text-black flex flex-col">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.length ? (
          cuisines.map((cuisine) => (
            <Link
              href={{
                pathname: "/search",
                query: {
                  ...searchParams,
                  cuisine: cuisine.name,
                },
              }}
              key={cuisine.id}
              className="font-light text-reg capitalize"
            >
              {cuisine.name}
            </Link>
          ))
        ) : (
          <p className="text-red-500">Looks Empty!</p>
        )}
      </div>
      <div className="mt-3 pb-4 text-black">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          {prices.map((price) => (
            <Link
              href={{
                pathname: "/search",
                query: {
                  ...searchParams,
                  price: price.price,
                },
              }}
              className={price.classes}
            >
              {price.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
