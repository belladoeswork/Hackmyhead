// import { prisma } from "@/lib/prisma.js";
// import { NextResponse } from "next/server.js";

// export async function PUT(request, response) {
//   const { postId } = request.query;

//   try {
//     const post = await prisma.post.findUnique({
//       where: { id: postId },
//       include: {
//         subreddit: true,
//         user: true,
//         parent: true,
//         children: {
//           include: {
//             user: true,
//             subreddit: true,
//           },
//         },
//       },
//     });

//     if (!post) {
//       return NextResponse.json({ success: false, error: 'Post not found' });
//     }

//     return NextResponse.json({ success: true, post });
//   } catch (error) {
//     return NextResponse.json({ success: false, error: error.message });
//   }
// }


import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";
import { fetchUser } from  "@/lib/fetchUser.js";

export default async function handler(request, response) {
  const { postId } = request.query;

  if (request.method === 'GET') {
    try {
      const post = await prisma.post.findUnique({
        where: { id: postId },
        include: {
          subreddit: true,
          user: true,
        },
      });

      if (!post) {
        return response.status(404).json({ success: false, error: 'Post not found' });
      }

      return response.json({ success: true, post });
    } catch (error) {
      return response.status(500).json({ success: false, error: error.message });
    }
  }

  if (request.method === 'PUT') {
    const { title, message } = request.body;

    try {
      const updatedPost = await prisma.post.update({
        where: { id: postId },
        data: {
          title,
          message
        },
        include: {
          subreddit: true,
          user: true,
        },
      });

      return response.json({ success: true, post: updatedPost });
    } catch (error) {
      return response.status(500).json({ success: false, error: error.message });
    }
  }

  // Handle any other HTTP method
  response.setHeader('Allow', ['GET', 'PUT']);
  response.status(405).end(`Method ${request.method} Not Allowed`);
}