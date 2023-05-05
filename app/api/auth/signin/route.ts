import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import validator from "validator";
import bcrypt from "bcrypt";
import * as jose from "jose";

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
    return NextResponse.json({ errors }, { status: 400 });
  }

  const userWithEmail = await prisma.user.findUnique({
    where: {
        email
    }
  });

  if (!userWithEmail) {
    return NextResponse.json({ error: "User does not exists" }, { status: 401 });
  }

  const isMatch = await bcrypt.compare(password, userWithEmail.password);

  if (!isMatch) {
    return NextResponse.json({ error: "Email or password is invalid" }, { status: 401 });
  }

  const algo = "HS256";
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  const token = await new jose.SignJWT({ email: userWithEmail.email })
    .setProtectedHeader({ alg: algo })
    .setExpirationTime("24h")
    .sign(secret);

    return NextResponse.json({token}, {status: 200})
}
