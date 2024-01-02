import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";
import { fetchUser } from  "@/lib/fetchUser.js";



//get all subs
export async function GET(request, response) {
  try {
    const subreddits = await prisma.subreddit.findMany();
    return NextResponse.json({ success: true, subreddits }); 
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

// create sub
export async function POST(request, response) {
  
  try {
    const { name } = await request.json();
    const { userId, subredditId } = request.json();

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

    // // Subscribe the creator to the sub
    // await prisma.subscription.create({ data: { userId: user.id, subredditId: sub.id } });

    return NextResponse.json({ success: true, sub });

  } catch (error) {

    return (

        NextResponse.json({ success: false, error: error.message })
    );
  }
}

