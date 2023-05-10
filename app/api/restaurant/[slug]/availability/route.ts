import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { findAvailabileTables } from "../../../../../services/restaurant/findAvailableTables";

const prisma = new PrismaClient();

interface SlugParam {
  params: {
    slug: string;
  };
}

export async function GET(req: NextRequest, { params }: SlugParam) {
  console.log(params);
    const slug = params.slug;
    const day = req.nextUrl.searchParams.get("day");
    const time = req.nextUrl.searchParams.get("time");
    const partySize = req.nextUrl.searchParams.get("partySize");

  if (!day || !time || !partySize) {
    return NextResponse.json({ errorMessage: "Invalid data provided" }, { status: 400 });
  }

  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      tables: true,
      open_time: true,
      close_time: true,
    },
  });

  if (!restaurant) {
    return NextResponse.json({ errorMessage: "Invalid data provided" }, { status: 400 });
  }

  const searchTimesWithTables = await findAvailabileTables({
    day,
    time,
    restaurant,
  });

  if (!searchTimesWithTables) {
    return NextResponse.json({ errorMessage: "Invalid data provided" }, { status: 400 });
  }

  const availabilities = searchTimesWithTables
    .map((t) => {
      const sumSeats = t.tables.reduce((sum, table) => {
        return sum + table.seats;
      }, 0);

      return {
        time: t.time,
        available: sumSeats >= parseInt(partySize),
      };
    })
    .filter((availability) => {
      const timeIsAfterOpeningHour =
        new Date(`${day}T${availability.time}`) >=
        new Date(`${day}T${restaurant.open_time}`);
      const timeIsBeforeClosingHour =
        new Date(`${day}T${availability.time}`) <=
        new Date(`${day}T${restaurant.close_time}`);

      return timeIsAfterOpeningHour && timeIsBeforeClosingHour;
    });

  return NextResponse.json(availabilities);
}

// http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/availability?day=2023-02-03&time=15:00:00.000Z&partySize=8
