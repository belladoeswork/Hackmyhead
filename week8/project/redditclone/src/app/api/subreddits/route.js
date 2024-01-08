import { fetchUser } from "@/lib/fetchUser.js";
import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";


export async function POST(request, response) {
  
  try {

    const { name } = await request.json();


    const user = await fetchUser();


    if (!name) {
      return NextResponse.json({
        success: false,
        error: "Subreddit not found. Please create one",
      });
    }


    const subExist = await prisma.subreddit.findFirst({ where: {name}});

    if (subExist) {

        return NextResponse.json({ success: false, error: "Subreddit already exist. Create a new one."});
    }

    const sub = await prisma.subreddit.create({ data: {name, userId: user.id}});

    return NextResponse.json({ success: true, sub });

  } catch (error) {

    return (

        NextResponse.json({ success: false, error: error.message })
    );
  }
}