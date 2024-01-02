import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";
import { fetchUser } from  "@/lib/fetchUser.js";


// join sub
export async function POST(request, response) {
  const { userId } = request.body;
  const { subredditId } = request.params;

  try {
    await prisma.subscription.create({
      data: {
        userId,
        subredditId,
      },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}


// get subscribers count
export async function GET(request, response) {
    const subredditId = request.query.subredditId;
  
    const subscribersCount = await prisma.subscription.count({
      where: { subredditId },
    });
  
    return NextResponse.json({ subscribersCount });
  }