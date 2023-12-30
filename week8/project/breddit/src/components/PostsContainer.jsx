import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faImage } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
// import profile from "../../../ImageForReddit/profile.png"
// import imageIcons from "../../../ImageForReddit/icons8-image-50.png"
// import Linkicons from "../../../ImageForReddit/link.png"

// create post bar on top of feed

export default function postcontainer() {
  
  return (
    <div className='MainContentPost'>
      <FontAwesomeIcon icon={faCircleUser} className="profile" />
      <input placeholder="Create Post" className="content-text"/>
      <FontAwesomeIcon icon={faImage} className="image-icon" />
    </div>
  );
}


// export default function postcontainer() {

//   return (
//     <div className='MainContentPost'>
//         <Image
//                   src={faCircleUser}
//                   className="profile"
//         />
//         <input placeholder="Create Post" className="content-text"/>
//         <Image
//                   src={faImage}
//                   className="image-icon"
//         />
//         {/* <Image
//                   src={Linkicons}
//                   className='linkIcons'
//                   alt="Picture of the author"
//         /> */}
//     </div>
//   )
// }

