import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    const bearerToken = req.headers.get("authorization") as string;

    if (!bearerToken) {
        return NextResponse.json({error: "Unauthorized Access"}, {status: 401});
    }

    const token = bearerToken.split(" ")[1];

    if (!token) {
        return NextResponse.json({error: "Unauthorized Access"}, {status: 401});
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    try {
        await jose.jwtVerify(token, secret)
    } catch(error) {
        return NextResponse.json({error: "Unauthorized Access"}, {status: 401});
    }

    const payload = jwt.decode(token);

    if (!payload || !payload.email) {
        return NextResponse.json({error: "Unauthorized Access"}, {status: 401});
    }

    const user = await prisma.user.findUnique({
        where: {
            email: payload.email
        },
        select: {
            id: true,
            first_name: true,
            last_name: true,
            email: true,
            city: true,
            phone: true
        }
    });

    return NextResponse.json(user, {status: 200});
  }
  