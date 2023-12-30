import React from 'react'
import "./post.css"
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faPlus, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';



// export default function SortPostsBy() {

//     return (
//         <div style={{ display: 'flex', justifyContent: "space-between", marginTop: 20, marginLeft: -29 }}>
//                     <div style={{ display: 'flex' }}>
//                         <div className="sort-container">
//                             <Image
//                                 src={faSquarePlus}
//                                 className="new-post"
//                             />
//                             <p style={{ marginTop: 10, fontSize: 13 }}>Best</p>
//                         </div>
                        
                        
//                     </div>
//                 </div>
//     )
// }

// filter option on top of posts feed

export default function SortPostsBy() {
    
    return (
      <div style={{ display: 'flex', justifyContent: "space-between", marginTop: 20, marginLeft: -29 }}>
        <div style={{ display: 'flex' }}>
          <div className="sort-container">
            <FontAwesomeIcon icon={faSquarePlus} className="new-post" />
            <p style={{ marginTop: 10, fontSize: 13 }}>Best</p>
          </div>
        </div>
      </div>
    );
  }