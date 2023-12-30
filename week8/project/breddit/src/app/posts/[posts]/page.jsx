"use client"

import React, { useState } from 'react'
import { prisma } from "@/lib/prisma.js";
import Link from "next/link";
import redditFace from "@/../public/redditFace.svg";
import Image from "next/image";
import bgimg from "@/../public/bgimg.webp";
import JoinSub from "@/components/joinsub";
import Feed from "@/components/feed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faArrorRightFromBracket, faSquarePen, faTrashCan, faArrowUpFromBracket , faUpLong, faDownLong, faEllipsis, faMessage } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';



import showmore from "../../../ImageForReddit/icons8-dot-67.png"
import Profile from "../../../ImageForReddit/profile.png"
import upIcon from "../../../ImageForReddit/icons8-up-80.png"
import down from "../../../ImageForReddit/icons8-down-80.png"
import postImage from "../../../ImageForReddit/image.jpg"
import Commenticons from "../../../ImageForReddit/icons8-comment-50.png"
import shareicon from "../../../ImageForReddit/icons8-share-50.png"
import saveicon from "../../../ImageForReddit/icons8-save-50.png"
import Upvote from "../../../ImageForReddit/Upvote.png"
import Downvote from "../../../ImageForReddit/downVote.png"
import Link from 'next/link';
import { useState } from 'react';



export default function Post({item}) {

    const [count , setCount] = useState(11)
    const [like , setlike] = useState(faUpLong);
    const [Dislike , setDislike] = useState(down)
    
    const handleLike=()=>{
        if(like == faUpLong){
            setlike(faUpLong);
            setDislike(faDownLong);
            setCount(count+1)
        }else{
            setlike(faUpLong);
            setCount(count-1) 
        }
    }
    const handleDislike = ()=>{
        if(Dislike == faDownLong){
            setDislike(faDownLong)
            setlike(faUpLong)
            setCount(count-1)
        }else{
            setDislike(faDownLong);
            setCount(count+1);
        }
    }

    function extractDomainNameFromURL(url){
        console.log(url)
        const withoutProtocol = url.replace(/https:\/\//, '');
        const parts = withoutProtocol.split('/');
        console.log(parts[0] , "dfja")
        return parts[0];
    }

    
    const Ids = extractTwitterIDFromURL(item?.URL);
    console.log(Ids , )
    

    return (

        <div>
        {/* ... */}
        <p style={{ marginLeft: 0, fontSize: 12 }}>r/{item?.subreddit?.name}</p>
        <p style={{ marginLeft: 10, fontSize: 12, color: "#808080" }}>Posted by u/{item?.user?.username}</p>
        {/* ... */}
        </div>
        
    )
}


        // <div>
           
        //     <div className='PostContainer'>
        //         <div className='postContainerLeftbar'>
        //             {/* <Image onClick={handleLike}
        //                 src={like}
        //             /> */}
        //             <FontAwesomeIcon icon="fa-regular fa-up-long" />
        //             <p style={{marginLeft:3}}>{count}</p>
        //             {/* <Image onClick={handleDislike}
        //                 src={Dislike}
        //             /> */}
        //             <FontAwesomeIcon icon="fa-regular fa-down-long" />

        //         </div>
        //         <Link href={`/CommentPage/${item.id}`}>
        //         <div className='postContainerRightbar'>
        //             <div style={{ display: "flex", alignItems: "center" }}>
        //                 <FontAwesomeIcon icon="fa-brands fa-reddit-alien" />
        //                 <p style={{ marginLeft: 0, fontSize: 12 }}>r/{post.username}</p>
        //                 <p style={{ marginLeft: 10, fontSize: 12, color: "#808080" }}>Posted by u/{username}</p>
        //             </div>
        //             <p style={{padding:10}}>{post.title}</p>
        //             {post?.image_url !== "" ?
        //             <img
        //                 src={post?.image_url}
        //                 className="PostImage"
        //             />:""
        //             }

        //             {item.URL !== "" ? 
        //             <div>
        //                 {DomainName == "www.youtube.com" ?
        //                 <iframe width="560" height="315" src={YoutubeURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        //                 : DomainName == "twitter.com" ? 
        //                 <div>
        //                     <Tweet id={Ids} />
                        
        //                 </div> :""}
        //             </div>:""}


        //             <div style={{ display: 'flex', alignItems: 'center' }}>
        //                 <div style={{ display: 'flex', alignItems: 'center' , marginLeft:-10}}>
        //                     {/* <Image
        //                         src={faMessage}
        //                         className="profile"
        //                     /> */}
        //                     <FontAwesomeIcon icon="fa-regular fa-message" />
        //                     <p style={{paddingLeft:6 , paddingRight:29 , color:"#808080" , fontSize:14}}>{comments.count}</p>
        //                 </div>
        //                 <div style={{ display: 'flex', alignItems: 'center' }}>
        //                     {/* <Image
        //                         src={faArrowUpFromBracket}
        //                         className="profile"
        //                     /> */}
        //                     <FontAwesomeIcon icon="fa-regular fa-arrow-up-from-bracket" />
        //                     <p style={{paddingLeft:3 , paddingRight:29, color:"#808080" , fontSize:14}}>Share</p>
        //                 </div>
        //                 <div style={{ display: 'flex', alignItems: 'center' }}>
        //                     <Image
        //                         src={saveicon}
        //                         className="profile"
        //                     />
        //                     <p style={{paddingLeft:3 , paddingRight:29, color:"#808080" , fontSize:14}}>Save</p>
        //                 </div>
        //                 {/* <Image
        //                     src={faEllipsis}
        //                     className="profile"
        //                 /> */}
        //                 <FontAwesomeIcon icon="fa-solid fa-ellipsis" />
        //             </div>
        //         </div>
        //         </Link>
        //     </div>

        // </div>