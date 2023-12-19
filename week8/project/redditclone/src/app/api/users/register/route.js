import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";
import bcrypt from "bcrypt";



export async function POST(request) {
  try {

    // no info to create account
    const { username, password } = await request.json();
    if (!username || !password) {
      return NextResponse.json({
        success: false,
        error: "Please provide a username and password to register",
      });
    }

    // check if user already exist
    const user = await prisma.users.findFirst({
      where: { username, password },
    });

    if (user) {
      return NextResponse.json({
        success: false,
        error: "Username already exists. Login instead?",
      });
    }

    // hash pwd
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const newUser = await prisma.users.create({
      data: { username, password: hashedPassword },
    });

    delete user.password;
    console.log(username, password);
    
    return NextResponse.json({ success: true, newUser });

  } catch (error) {

    return NextResponse.json({ success: false, error: error.message });
  }
}