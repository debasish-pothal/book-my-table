"use client";

export default function SearchBar() {
  return (
    <div className="text-left py-3 m-auto flex justify-center">
      <input
        type="text"
        placeholder="State, City or Town"
        className="bg-white text-black rounded-md text-sm mr-3 py-2 px-4 w-96 outline-none"
      />
      <button className="text-white bg-red-600 px-4 py-2 rounded-md text-sm font-medium ml-2 hover:cursor-pointer">
        Find
      </button>
    </div>
  );
}
