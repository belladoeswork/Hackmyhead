import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";
import { fetchUser } from  "@/lib/fetchUser.js";



export async function GET(request, response) {
  try {
    const posts = await prisma.post.findMany({
      include: {
        subreddit: true,
        user: true,
      },
    });

    posts.sort((a, b) => new Date(b.createAt) - new Date(a.createAt));

    // Fetch the parent and children for each post if they exist
    const postsWithRelations = await Promise.all(
      posts.map(async (post) => {
        let parent, children;

        if (post.parentId) {
          parent = await prisma.post.findUnique({
            where: { id: post.parentId },
          });
        }

        children = await prisma.post.findMany({
          where: { parentId: post.id },
        });

        return { ...post, parent, children };
      })
    );

    return NextResponse.json({ success: true, posts: postsWithRelations });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}




// export async function POST(request, response) {
//   console.log("REQUEST BODY:", request.body);
//   const {  } = request.body;

//   // const user = await fetchUser();
//   let user;
//   try {
//     user = await fetchUser(request);
//   } catch (error) {
//     console.error('Error fetching user:', error);
//     return NextResponse.json({ success: false, error: 'Error fetching user' });
//   }

//   // Validate the user
//   if (!user || !user.id) {
//     return NextResponse.json({ success: false, error: 'Invalid user' });
//   }

//   try {
//     const newPost = await prisma.post.create({
//       data: {
//         subredditId,
//         title,
//         text,
//         userId: user.id,
//         // You also need to provide the userId here. You can get it from the request if you have authentication set up.
//         // userId: request.user.id,
//       },
//     });

//     return NextResponse.json({ success: true, post: newPost });
//   } catch (error) {
//     return NextResponse.json({ success: false, error: error.message });
//   }
// }


// create new post
export async function POST(request, response) {
  
  try {
    const { subredditId, title, message } = await request.json();

    const user = await fetchUser();

    //no title provided?

    if (!title) {
      return NextResponse.json({
        success: false,
        error: "Please give the post a title.",
      });
    }

    const newPost = await prisma.post.create({ data: { title, userId: user.id, message, subredditId} });

    return NextResponse.json({ success: true, newPost });

  } catch (error) {

    return (

        NextResponse.json({ success: false, error: error.message })
    );
  }
}





