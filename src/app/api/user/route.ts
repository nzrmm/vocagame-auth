import { hash } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

import { db } from "@/libs/db";
import { RegisterSchema } from "@/schemas";

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();
    const { username, phoneNumber, password } = RegisterSchema.parse(data);

    // Check if username already exists
    const existingUsername = await db.user.findUnique({
      where: { username },
    });

    if (existingUsername) {
      return NextResponse.json(
        { data: null, message: "Username already exists" },
        { status: 400 }
      );
    }

    // Create user
    const hashedPassword = await hash(password, 10);
    const user = await db.user.create({
      data: { username, phoneNumber, password: hashedPassword },
    });

    return NextResponse.json(
      { data: user, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: null, message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
