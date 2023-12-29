// "use client";

// import { useRouter } from "next/navigation.js";
// import { useState } from "react";
// import Link from "next/link";



// export default function NewSub(props) {

//   const [subName, setSubName] = useState("");
//   const [isCreatePopupOpen, setCreatePopupOpen] = useState(false);

//   const router = useRouter();

//   const handleFormSubmit = async (event) =>  {

//     event.preventDefault();

//     const response = await fetch(`/api/subreddits`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         text: subName,
//       }),
//     });
    
//     const info = await response.json();

    
//     if (info.error) {
//         setError(info.error);
//     } else {
//         props.onCreationComplete(subName);
//         props.toggle();
//         router.push("/");
//         router.refresh();
//         setSubName("");
//     }
//   };

//     return (
//         <div className="popup" style={{ display: props.isCreatePopupOpen ? "block" : "none" }}>
//             <div className="popup-inner">
//                 <h2>New Subreddit</h2>
//                 <p> Unleash your creativity</p>
//                 <form onSubmit={handleFormSubmit}>
//                     <label>Name:</label>
//                     <input type="text" value={subName} onChange={(e) => setSubName(e.target.value)} />
//                     <div className="confirm">
//                         <button className="reg-submit" type="submit">
//                             Create Community
//                         </button>
//                         <p className="text-submit">
//                             Community already exist? &nbsp;
//                             <Link href={"/subreddits"} style={{ textDecoration: "none" }}>
//                                 Join It
//                             </Link>
//                         </p>
//                     </div>
//                 </form>
//                 <button className="close-button" onClick={props.toggle}>
//                     X
//                 </button>
//             </div>
//         </div>
//     );
// }
