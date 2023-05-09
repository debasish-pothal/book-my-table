"use client";

import { CircularProgress } from "@mui/material";
import Link from "next/link";
import { partySize as partySizes, times } from "../../../../data";
import DatePicker from "react-datepicker";
import { useState } from "react";
// import useAvailabilities from "../../../../hooks/useAvailabilities";
// import { convertToDisplayTime, Time } from "../../../../utils/convertToDisplayTime";

export default function ReservationCard({
  openTime,
  closeTime,
  slug,
}: {
  openTime: string;
  closeTime: string;
  slug: string;
}) {
  // const { data, loading, error, fetchAvailabilities } = useAvailabilities();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [day, setDay] = useState(new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState(openTime);
  const [partySize, setPartySize] = useState("2");

  const handleChangeDate = (date: Date | null) => {
    if (date) {
      setDay(date.toISOString().split("T")[0]);
      return setSelectedDate(date);
    }
    return setSelectedDate(null);
  };

  const filterTimeByRestaurantOpenWindow = () => {
    const timesWithinWindow: typeof times = [];

    let isWithinWindow = false;

    times.forEach((time) => {
      if (time.time === openTime) {
        isWithinWindow = true;
      }
      if (isWithinWindow) {
        timesWithinWindow.push(time);
      }
      if (time.time === closeTime) {
        isWithinWindow = false;
      }
    });

    return timesWithinWindow;
  };

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
          value={partySize}
          onChange={(e) => setPartySize(e.target.value)}
        >
          {partySizes.map(size => <option value={size.value}>{size.label}</option>)}
        </select>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col w-[48%]">
          <label htmlFor="" className="text-black">
            Date
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={handleChangeDate}
            className="bg-white text-black outline-none py-3 borber-b font-light text-reg w-24"
            dateFormat="MMMM d"
            wrapperClassName="w-[48%]"
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
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            {filterTimeByRestaurantOpenWindow().map((time) => (
              <option value={time.time}>{time.displayTime}</option>
            ))}
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
