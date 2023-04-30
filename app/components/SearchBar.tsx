"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  }

  const handleSearch = () => {
    if (location === '') {
      return;
    }

    router.push(`/search?location=${location}`);
  }

  return (
    <div className="text-left py-3 m-auto flex justify-center">
      <input
        type="text"
        placeholder="State, City or Town"
        className="bg-white text-black rounded-md text-sm mr-3 py-2 px-4 w-96 outline-none"
        value={location}
        onChange={handleInputChange}
      />
      <button className="text-white bg-red-600 px-4 py-2 rounded-md text-sm font-medium ml-2 hover:cursor-pointer" onClick={handleSearch}>
        Find
      </button>
    </div>
  );
}
