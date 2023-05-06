import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import validator from "validator";
import bcrypt from "bcrypt";
import * as jose from "jose";
import { setCookie } from "cookies-next";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const errors: string[] = [];
  const { email, password } = await req.json();

  const validationSchema = [
    {
      valid: validator.isEmail(email),
      error: "Email is invalid",
    },
    {
      valid: validator.isLength(password, {
        min: 1,
      }),
      error: "Password is invalid",
    },
  ];

  validationSchema.forEach((check) => {
    if (!check.valid) {
      errors.push(check.error);
    }
  });

  if (errors.length) {
    return NextResponse.json({ errorMessage: errors[0] }, { status: 400 });
  }

  const userWithEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!userWithEmail) {
    return NextResponse.json(
      { errorMessage: "User does not exists" },
      { status: 401 }
    );
  }

  const isMatch = await bcrypt.compare(password, userWithEmail.password);

  if (!isMatch) {
    return NextResponse.json(
      { errorMessage: "Email or password is invalid" },
      { status: 401 }
    );
  }

  const algo = "HS256";
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  const token = await new jose.SignJWT({ email: userWithEmail.email })
    .setProtectedHeader({ alg: algo })
    .setExpirationTime("24h")
    .sign(secret);

  const userData = {
    firstName: userWithEmail.first_name,
    lastName: userWithEmail.last_name,
    phone: userWithEmail.phone,
    city: userWithEmail.city,
    email: userWithEmail.email
  };

  return NextResponse.json(userData, { status: 200, headers: {
    'Set-Cookie': `jwt=${token}; Max-Age=8640; Path=/`
  } });
}
