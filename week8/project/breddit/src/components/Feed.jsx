import Postscontainer from "@/components/PostsContainer.jsx";
import SortPostsFeed from "@/components/PostsContainer.jsx";
import Posts from "@/app/posts/page";


export default function HomeFeed() {
  
  return (
    <div className="feedhome-container">
      <div className="left"></div>
      <div className="center">
        <Postscontainer />
        <SortPostsFeed />
        <Posts />
      </div>
      <div className="right"></div>
    </div>
  );
}


// import Post from './Post'
// import Subcat from './Subcat'
// import RightItempart1 from '../RightItems/RightItempart1'
// import RightItempart2 from '../RightItems/RightItempart2'

// export default function HomeFeed() {

//   return (
//     <div className="feedhome-container">
//         <div className="left">
//         </div>
//         <div className="center">
//             <Postscontainer />
//             <SortPostsFeed />
//             <Posts />
//         </div>
//         <div className="right">
//             {/* <RightItempart1/>
//             <RightItempart2/> */}
//         </div>
//     </div>
//   )
// }
