import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const bearerToken = req.headers.get("authorization") as string;

  if (!bearerToken) {
    return NextResponse.json(
      { errorMessage: "Unauthorized Access" },
      { status: 401 }
    );
  }

  const token = bearerToken.split(" ")[1];

  if (!token) {
    return NextResponse.json(
      { errorMessage: "Unauthorized Access" },
      { status: 401 }
    );
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  try {
    await jose.jwtVerify(token, secret);
  } catch (error) {
    return NextResponse.json(
      { errorMessage: "Unauthorized Access" },
      { status: 401 }
    );
  }

  const payload = jwt.decode(token);

  if (!payload || !payload.email) {
    return NextResponse.json(
      { errorMessage: "Unauthorized Access" },
      { status: 401 }
    );
  }

  const user = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
    select: {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
      city: true,
      phone: true,
    },
  });

  if (!user) {
    return NextResponse.json(
      { errorMessage: "User not found" },
      { status: 401 }
    );
  }

  return NextResponse.json(
    {
      id: user?.id,
      firstName: user?.first_name,
      lastName: user?.last_name,
      phone: user?.phone,
      city: user?.city,
    },
    { status: 200 }
  );
}
