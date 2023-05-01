import Header from "../components/Header";
import SearchSidebar from "./components/SearchSidebar";
import RestaurantCard from "./components/RestaurantCard";
import { PRICE, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface SearchParams {
  location?: string;
  cuisine?: string;
  price?: PRICE;
};

const fetchRestaurantsByLocation = (searchParams: SearchParams) => {
  const where: any = {};

  if (searchParams.location) {
    const location = {
      name: {
        equals: searchParams.location.toLowerCase()
      }
    };

    where.location = location;
  }

  if (searchParams.cuisine) {
    const cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase()
      }
    };

    where.cuisine = cuisine;
  }

  if (searchParams.price) {
    const price = {
      equals: searchParams.price
    };

    where.price = price;
  }


  return prisma.restaurant.findMany({
    where: where,
    select: {
      id: true,
      name: true,
      main_image: true,
      price: true,
      cuisine: true,
      location: true,
      slug: true,
      reviews: true
    },
  });
};

const fetchLocations = () => {
  return prisma.location.findMany();
}

const fetchCuisines = async () => {
  return prisma.cuisine.findMany();
}

export default async function Search({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const restaurants = await fetchRestaurantsByLocation(searchParams);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <main>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSidebar locations={locations} cuisines={cuisines} searchParams={searchParams} />
        <div className="w-5/6">
          {restaurants.length ? (
            restaurants.map((restaurant) => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)
          ) : (
            <p className="text-red-500">Looks Empty!!</p>
          )}
        </div>
      </div>
    </main>
  );
}
