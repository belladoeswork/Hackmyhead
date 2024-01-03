import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";
import { fetchUser } from  "@/lib/fetchUser.js";


// // get the post
// export async function GET(request, response) {

//   try {
//     const { postId } = request.query;

//     const post = await prisma.post.findUnique({
//         where: { id: postId },
//         include: {
//           subreddit: true,
//           user: true,
//           comments: {
//             include: {
//               user: true,
//             },
//           },
//         },
//     });

//     if (!post) {
//         return NextResponse.json({ success: false, error: "Post not found" });
//     }
    

//     return NextResponse.json({ success: true, post });

//   } catch (error) {

//     console.error('Error fetching post:', error);

//     return NextResponse.json({ success: false, error: error.message });
//   }
// }



// // create new comment
// export async function POST(request, response) {
  
//   try {
//     const { postId, text } = await request.json();

//     const user = await fetchUser();

//     //no text provided?

//     if (!text) {
//       return NextResponse.json({
//         success: false,
//         error: "Please add some text.",
//       });
//     }

//     const newComment = await prisma.comment.create({ data: { userId: user.id, text, postId} });

//     return NextResponse.json({ success: true, newComment });

//   } catch (error) {

//     return (

//         NextResponse.json({ success: false, error: error.message })
//     );
//   }
// }






//update post
export async function PUT(request, response) {
  try {
    const { postId } = response.params;

    const { text } = await request.json();

    const post = await prisma.post.findFirst({
      where: { id: postId },
      include: {
        subreddit: true,
        user: true,
        comments: {
            include: {
                user: true,
            },
        },
        votes: true,
      },
    });

    if (!post) {
      return NextResponse.json({
        success: false,
        message: "No post with that ID found.",
      });
    }

    const updatedposttext = await prisma.post.update({
      where: {
        id: postId,
      },
      data: { message },
    });
    // const updatedpostvotes = await prisma.post.update({
    //     where: {
    //       id: postId,
    //     },
    //     data: { votes: {increment: 1,} },
    // });
    return NextResponse.json({ success: true, post: updatedposttext});
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}


//delete post
export async function DELETE (request, response) {
    try {
        const { postId } = response.params;

        const post = await prisma.post.findFirst({
            where: {
                id: postId,
              }
        });

        if (!post) {
            return NextResponse.json({
              success: false,
              message: "No post with that ID found.",
            });
          }
      
        const deletedpost = await prisma.post.delete({
            where: {
              id: postId,
            }
          });

        return NextResponse.json({ success: true, post: deletedpost });

    } catch (error){
        return NextResponse.json({ success: false, error: error.message });

    }
}