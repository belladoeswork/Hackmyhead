// import { prisma } from "@/lib/prisma.js";

// export default async function Subreddit({ params }) {

//     // posts associated subreddit
//     const { subredditId } = params;

//     const subreddit = await prisma.subreddit.findFirst({
//         where: { id: subredditId },
//     });

//     const posts = await prisma.post.findMany({
//         where: { subredditId },
//         include: {
//             subreddit: true,
//             user: true,
//             parent: true,
//             children: true, // include children posts
//         },
//     });
    
//     console.log(posts);

//     return (
//         <div>
//         <h3>{subreddit.name}</h3>
//         {posts.map((post) => (
//             <div>{post.title}</div>
//         ))}
//         </div>
//     );
// }



import { prisma } from "@/lib/prisma.js";

export default async function Subreddit({ params }) {
    // posts associated subreddit
    const { subredditId } = params;

    const subreddit = await prisma.subreddit.findFirst({
        where: { id: subredditId },
    });

    const posts = await prisma.post.findMany({
        where: { subredditId },
        include: {
            subreddit: true,
            user: true,
            parent: true,
            children: true, 
        },
    });

    console.log(posts);

    return (
        <div>
        <h3>{subreddit.name}</h3>
        {posts.map((post) => (
            <div key={post.id}>{post.title}</div>
        ))}
        </div>
    );
}