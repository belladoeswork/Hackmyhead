import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";



//get votes
export async function GET() {

    const votes = await prisma.post.findMany();

  return NextResponse.json({ success: true, votes });
}


//update votes
export async function POST(request, response) {

  try {
    // const { postId } = response.params;
    const { postId, userId, isUpvote } = request.body;

    const post = await prisma.post.findFirst({
      where: { id: postId },
    });

    if (!post) {
      return NextResponse.json({
        success: false,
        message: "No post with that ID found.",
      });
    }

     // new vote record?
     const newVote = await prisma.vote.create({
      data: {
        user: { connect: { id: userId } },
        post: { connect: { id: postId } }, 
        isUpvote: isUpvote,  
      },
    });

    return NextResponse.json({ success: true, post: newVote});
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

// // Create a new vote record
// export async function POST(request, response) {

//   try {
//   const newVote = await prisma.vote.create({
//     data: {
//       user: { connect: { id: userId } },  // Connect the vote to the user
//       post: { connect: { id: postId } },  // Connect the vote to the post
//     },
//   });

//   return NextResponse.json({ success: true, vote: newVote });
//   } catch (error) {
//   return NextResponse.json({ success: false, error: error.message });
// }
// }


