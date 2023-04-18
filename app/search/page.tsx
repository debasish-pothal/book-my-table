import Link from "next/link";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import SearchSidebar from "./components/SearchSidebar";
import RestaurantCard from "./components/RestaurantCard";

export default function Search() {
  return (
    <main className="bg-white min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <main>
          <Header />
          <div className="flex py-4 m-auto w-2/3 justify-between items-start">
            <SearchSidebar />
            <div className="w-5/6">
              <RestaurantCard />
            </div>
          </div>
        </main>
      </main>
    </main>
  );
}
