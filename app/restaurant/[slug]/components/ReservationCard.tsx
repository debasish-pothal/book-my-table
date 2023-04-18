"use client";

export default function ReservationCard() {
  return (
    <div className="fixed w-[15%] bg-white rounded p-3 border-t shadow">
      <div className="text-center border-b pb-2 font-bold">
        <h4 className="mr-7 text-lg text-black">Make a Reservation</h4>
      </div>
      <div className="my-3 flex flex-col">
        <label htmlFor="" className="text-black">
          Party size
        </label>
        <select
          name=""
          className="bg-white text-black outline-none py-3 border-b font-light"
          id=""
        >
          <option value="">1 person</option>
          <option value="">2 people</option>
        </select>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col w-[48%]">
          <label htmlFor="" className="text-black">
            Date
          </label>
          <input
            type="text"
            className="bg-white text-black outline-none py-3 border-b font-light w-28"
          />
        </div>
        <div className="flex flex-col w-[48%]">
          <label htmlFor="" className="text-black">
            Time
          </label>
          <select
            name=""
            id=""
            className="bg-white text-black outline-none py-3 border-b font-light"
          >
            <option value="">7:30 AM</option>
            <option value="">9:30 AM</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">
          Find a Time
        </button>
      </div>
    </div>
  );
}
