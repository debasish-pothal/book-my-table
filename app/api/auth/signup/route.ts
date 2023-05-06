import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import validator from "validator";
import bcrypt from "bcrypt";
import * as jose from "jose";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, phone, city, password } = await req.json();

  const errors: string[] = [];

  const validationSchema = [
    {
      valid: validator.isLength(firstName, {
        min: 1,
        max: 20,
      }),
      error: "First Name is invalid",
    },
    {
      valid: validator.isLength(lastName, {
        min: 1,
        max: 20,
      }),
      error: "Last Name is invalid",
    },
    {
      valid: validator.isEmail(email),
      error: "Email is invalid",
    },
    {
      valid: validator.isStrongPassword(password),
      error: "Password is invalid",
    },
    {
      valid: validator.isMobilePhone(phone),
      error: "Phone is invalid",
    },
    {
      valid: validator.isLength(city, {
        min: 1,
      }),
      error: "City is invalid",
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

  if (userWithEmail) {
    return NextResponse.json(
      { errorMessage: "Email is already used" },
      { status: 400 }
    );
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: hashPassword,
      city: city,
      phone: phone,
    },
  });

  const algo = "HS256";
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  const token = await new jose.SignJWT({ email: user.email })
    .setProtectedHeader({ alg: algo })
    .setExpirationTime("24h")
    .sign(secret);

  

  return NextResponse.json({...user}, { status: 200, headers: {
    'Set-Cookie': `jwt=${token}; Max-Age=8640; Path=/`
  } });
}
