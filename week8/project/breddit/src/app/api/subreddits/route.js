import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";
import { fetchUser } from  "@/lib/fetchUser.js";


export async function POST(request, response) {
  
  try {
    const { name } = await request.json();

    const user = await fetchUser();

    //no name provided?

    if (!name) {
      return NextResponse.json({
        success: false,
        error: "Please give your community a name.",
      });
    }

    // sub already exist?
    const subExist = await prisma.subreddit.findFirst({ where: { name } });

    if (subExist) {
      return NextResponse.json({
        success: false,
        error: "Community name already used.",
      });
    }


    const sub = await prisma.subreddit.create({ data: { name, creatorId: user.id} });

    return NextResponse.json({ success: true, sub });

  } catch (error) {

    return (

        NextResponse.json({ success: false, error: error.message })
    );
  }
}