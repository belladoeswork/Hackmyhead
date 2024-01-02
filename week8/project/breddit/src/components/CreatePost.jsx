"use client";

// import Image from 'next/image'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleUser, faImage } from '@fortawesome/free-regular-svg-icons';
// import { useState, useRef, useEffect } from 'react';
import { useRouter } from "next/navigation.js";


// import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
// // import profile from "../../../ImageForReddit/profile.png"
// // import imageIcons from "../../../ImageForReddit/icons8-image-50.png"
// // import Linkicons from "../../../ImageForReddit/link.png"

// // create post bar on top of feed

// export default function createPost( {subreddit}) {
//   const [subreddits, setSubreddits] = useState([]);
//   const [selectedsub, setSelectedSub] = useState("");
//   const [title, setTitle] = useState("");
//   const [text, setText] = useState("");
//   const [error, setError] = useState("");
//   const [isPosting, setIsPostiong] = useState(false);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);


//   const route = useRouter();

//   async function fetchSubs() {
//     const response = await fetch("/api/subreeddits", {});

//     const info = await response.json();
//     setSubreddits(info.subreddits);
//   }

//   async function handleCreate(e) {
//     e.preventDefault();

//     if(!selectedsub || !text) {
//       return setError("Please enter a text to create a post");
//     }
    
  

//   const response = await fetch("/api/subreeddits", {method: "POST", BODY: JSON.stringify({setSelectedSub, title, text})});

//   const info = await response.json();

//   if(info.error) {
//     return setError(info.error);
//   }

//   setSelectedSub("");
//   setTitle("");
//   setError("");

//   setIsPostiong(false);
//   if(subreddits) {
//     route.push(`/subreddits/${subreddit.id}`);
//   } else {
//     route.push("/");
//     route.refresh();
//   }
// }

//   useEffect(() => {
//     fetchSubs();
//   }, []);

//   useEffect(() => {
//     if (subreddit) {
//       setSelectedSubId(subreddit.id);
//     }
//   }, [subreddit]);




  
//   return (

//     <div className='MainContentPost'>
//         {!isPosting? (
//           <div>
//             <FontAwesomeIcon icon={faCircleUser} className="profile" />
//             <input placeholder="Create Post" className="content-text"/>
//             <FontAwesomeIcon icon={faImage} className="image-icon" />
//             <button onClick={() => setIsPostiong(true)}> Post</button>
//           </div>
//           ) : (
//             <div></div>
//             )
//           }
        
//     </div>
//   );
// }




import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faImage } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function CreatePost({ subreddit }) {
  const [subreddits, setSubreddits] = useState([]);
  const [selectedSub, setSelectedSub] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const router = useRouter();

  async function fetchSubs() {
    try {

      const response = await fetch("/api/subreddits");

      if (!response.ok) {
        return error(`${response.status}`);
      }

      const info = await response.json();
      setSubreddits(info.subreddits);

    } catch(error) {
      console.error("Error fetching subreddits:", error)
    }
  }

  async function handleCreate(e) {
    e.preventDefault();

    if (!selectedSub || !text) {
      return setError("Please enter a text to create a post");
    }

    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ subredditId: selectedSub, title, text })
    });

    const info = await response.json();

    if (info.error) {
      return setError(info.error);
    }

    setSelectedSub("");
    setTitle("");
    setText("");
    setError("");
    setIsPopupOpen(false);

    if (subreddit) {
      router.push(`/subreddits/${subreddit.id}`);
    } else {
      router.push("/");
      router.reload();
    }
  }

  useEffect(() => {
    fetchSubs();
  }, []);

  useEffect(() => {
    if (subreddit) {
      setSelectedSub(subreddit.id);
    }
  }, [subreddit]);

  return (
    <div className="create-container">
      {!isPosting ? (
        <div className="elements">
          <FontAwesomeIcon icon={faCircleUser} className="profile" />
          <input placeholder="Create Post" className="content-text" onClick={() => setIsPopupOpen(true)} />
          <FontAwesomeIcon icon={faImage} className="image-icon" />
        </div>
      ) : null}

      {isPopupOpen && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Create Post</h2>
            <form onSubmit={handleCreate}>
              {!subreddit && (
                <div>
                  <label>Subreddit:</label>
                  <select value={selectedSub} onChange={(e) => setSelectedSub(e.target.value)}>
                    {subreddits.map(sub => (
                      <option key={sub.id} value={sub.id}>{sub.name}</option>
                    ))}
                  </select>
                </div>
              )}
              <label>Title:</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
              <label>Text:</label>
              <textarea value={text} onChange={(e) => setText(e.target.value)} />
              {error && <p>{error}</p>}
              <button type="submit">Create Post</button>
            </form>
            <button onClick={() => setIsPopupOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}