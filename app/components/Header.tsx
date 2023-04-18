import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="h-56 bg-gradient-to-r from-blue-900 to-indigo-700">
      <div className="text-center">
        <h1 className="text-white text-4xl font-bold px-3 py-5">
          Find your table for any occasion
        </h1>

        <SearchBar />
      </div>
    </div>
  );
}
