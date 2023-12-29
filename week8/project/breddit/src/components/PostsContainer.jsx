import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faImage } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import profile from "../../../ImageForReddit/profile.png"
import imageIcons from "../../../ImageForReddit/icons8-image-50.png"
import Linkicons from "../../../ImageForReddit/link.png"


export default function postcontainer() {
  
  return (
    <div className='MainContentPost'>
        <Image
                  src={faCircleUser}
                  className="profile"
        />
        <input placeholder="Create Post" className="content-text"/>
        <Image
                  src={faImage}
                  className="image-icon"
                  alt="Picture of the author"
        />
        {/* <Image
                  src={Linkicons}
                  className='linkIcons'
                  alt="Picture of the author"
        /> */}
    </div>
  )
}