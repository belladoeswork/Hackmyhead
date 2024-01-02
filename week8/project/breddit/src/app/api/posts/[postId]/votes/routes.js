import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";



//get votes
export async function GET() {

    const votes = await prisma.post.findMany();

  return NextResponse.json({ success: true, votes });
}


//update likes
  export async function POST(request, response) {

  try {
    const { postId } = response.params;

    const post = await prisma.post.findFirst({
      where: { id: postId },
    });

    if (!post) {
      return NextResponse.json({
        success: false,
        message: "No post with that ID found.",
      });
    }

    const updatedpostvotes = await prisma.post.update({
        where: {
          id: postId,
        },
        data: { votes: {increment: 1,} },
    });
    return NextResponse.json({ success: true, post: updatedpostvotes});
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
