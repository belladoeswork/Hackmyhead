import { prisma } from "@/lib/prisma.js";
import Link from "next/link";

export default async function Subreddits() {
    
    // fetch subs from the db
    const subreddits = await prisma.subreddit.findMany();

    console.log(subreddits);

    return (
        <div>
        {/* <h1>Subreddits</h1> */}
        {/* feed */}
        {subreddits.map((subreddit) => (

            // subred info create a class of rows with 3 columns?
            // href={`/subreddits/${subreddit.id}`}
            <div key={subreddit.id}>
                <Link >"NAME"</Link>
            </div>
        ))}
        </div>
    );
}  

// export async function getServerSideProps() {
//     const subreddits = await prisma.subreddit.findMany();
//     return {
//         props: { subreddits },
//     };
// }




    // return subreddits.map((subreddit) => ({
    //     id: subreddit.id,
    //     name: subreddit.name,
    // }));



// "use client"





//   return (
//     <div className="side">
//       <div className="side-navbar">
//         <Image
//             src={bg}
//             alt="cover img"
//             style={{ objectFit: "cover" }}
//             width={250}
//             height={90}
//         />
//         <div className="logo-section">
//           <Link href="/">
//             <Image src={redditFace} alt="Reddit Logo" className="logo" width={42} height={42} />
//           </Link>
//           <h4>Home</h4>
//         </div>
//         <div className="text-section">    
//           <p>Your personal Reddit frontpage, built for you.</p>
//         </div>
//         <div className="buttons-section">
//           <button className="buttons-community">Create Community</button>
//           <button className="buttons-post">Create Post</button>
//         </div>
//       </div>
//       <div className="communities-section">
//         <Image
//                 src={bgimg}
//                 alt="cover img"
//                 style={{ objectFit: "cover" }}
//                 width={250}
//                 height={90}
//         />
//         <div>
//             <h4>Communities</h4>
//             {subreddits.map((subreddit) => (
//                 <div>
//                     <div>
//                         <ol>
//                             <li key={subreddit.id}> 
//                                 <Link >
//                                     <Image src={redditFace} alt="Reddit Logo" className="comlogo" width={25} height={25} />
//                                 </Link>
//                                 <span> r/{subreddit.name} </span>
//                                 <Link href={`/subreddits/${subreddit.id}`}>
//                                     <button className="join-bttn">Join</button>
//                                 </Link>
//                             </li>
//                         </ol>
//                     </div>
//                     <div className="class-bttn">
//                         <Link href="/subreddits">
//                             <button className="view">View All</button>
//                         </Link>
//                     </div>
//                 </div> 
//             ))}  
//         </div>
//       </div>
//     </div>
//   );
// }