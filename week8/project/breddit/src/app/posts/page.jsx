
import { prisma } from "@/lib/prisma.js";
import Link from "next/link";
import redditFace from "@/../public/redditFace.svg";
import Image from "next/image";
import bgimg from "@/../public/bgimg.webp";
import JoinSub from "@/components/joinsub";



export default async function Posts() {


    // fetch from  db
    const Posts = await prisma.post.findMany({
        include: {
        subreddit: true,
        createdAt,
        },
    });

    subreddits.sort((a, b) => b.subscribers.length - a.subscribers.length);

    console.log(subreddits);



    return (
        <div className="communities-section">
            <Image
                src={bgimg}
                alt="cover img"
                style={{ objectFit: "cover" }}
                width={250}
                height={90}
            />
            <h4>Top Communities</h4>
                <div className="subreddit-list">
                    {subreddits.map((subreddit) => (

                        <div key={subreddit.id} className="subreddit-item">
                            <Image src={redditFace} alt="Reddit Logo" className="comlogo" width={25} height={25} />
                            
                            <Link href={`/subreddits/${subreddit.id}`} style={{ textDecoration: 'none' }}>
                            <span className="subreddit-name"> r/{subreddit.name} </span>
                            <p>{subreddit.subscribers.length} subscribers</p>
                            </Link>

                            <Link href={`/subreddits/${subreddit.id}`} style={{ textDecoration: 'none' }}>
                                {/* <JoinSub className="join-bttn" subredditId={subreddit.id} /> */}
                                <button className="join-bttn">Join</button>
                            </Link>             

                        </div>
                    ))}        
                </div>
                <div className="class-bttn">
                    <Link href="/subreddits">
                      <button className="view">View All</button>
                    </Link>
                </div> 

        </div>
    );
}

