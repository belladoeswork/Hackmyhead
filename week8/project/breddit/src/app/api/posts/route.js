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


// export async function GET(request, response) {

//   try {

//     const posts = await prisma.post.findMany({
//       include: {
//         subreddit: true,
//         user: true,
//         parent: {
//           select: {
//             id: true,
//             title: true,
//           },
//           where: {
//             parentId: {
//               not: null
//             }
//           }
//         },
//         children: true, 
//       },
//     });

//   } catch (error) {

//     return NextResponse.json({ success: false, error: error.message });
//   }
// }


