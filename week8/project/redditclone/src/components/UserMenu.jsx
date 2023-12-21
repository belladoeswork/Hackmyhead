"use client";

// import { useState } from "react";

// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
// import Login from "@/app/login/page";

// // import NoUserList from "./NoUserList";
// // import UserList from "./UserList";



// export default function UserMenu() {

//     const [selectedOption, setSelectedOption] = useState("");
//     const [showInput, setShowInput] = useState(false);
//     const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);


//     function toggleInput() {
//         setShowInput((prev) => !prev);
//     }
    
//     const openLoginPopup = () => {
//         setLoginPopupOpen(true);
//     };

//     return (
//         <div className="menu">
//             <div className="select-wrapper">
//                 <button className="options" onClick={() => setShowInput(true)}>
//                     <FontAwesomeIcon icon={faCircleUser} />
//                 </button>
//                 {showInput && <button onClick={openLoginPopup}>Login / Register</button>}
//                 {isLoginPopupOpen && <Login toggle={() => setLoginPopupOpen(false)} />}
//             </div>
//             <div className="selected-option">{selectedOption}</div>
//         </div>
//     )
// }


import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


export default function UserMenu() {

    const [isPopupOpen, setPopupOpen] = useState(false);
    const iconButtonRef = useRef(null);
    const popupRef = useRef(null);
  
    const openPopup = () => {
      setPopupOpen((prevState) => !prevState);
    };
  
    const closePopup = () => {
      setPopupOpen(false);
    };
  
    const handleLoginButtonClick = () => {
      console.log('Login button clicked');
    };
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
          closePopup();
        }
      };
  
      document.body.addEventListener('click', handleClickOutside);
  
      return () => {
        document.body.removeEventListener('click', handleClickOutside);
      };
    }, [popupRef]);
  
    useEffect(() => {
      const handleNavbarClick = () => {
        closePopup();
      };
  
      document.querySelector('.navbar').addEventListener('click', handleNavbarClick);
  
      return () => {
        document.querySelector('.navbar').removeEventListener('click', handleNavbarClick);
      };
    }, []);

  return (
    <div className="menu">
      <div className="select-wrapper">
        <button
          ref={iconButtonRef}
          className="options"
          onClick={openPopup}
        >
          <FontAwesomeIcon icon={faCircleUser} className="icon-spacing" size="2x" />
          <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon" />
        </button>

        {isPopupOpen && (
          <div
            ref={popupRef}
            className="popup"
            style={{
              position: 'absolute',
              top: '-210px',
              left: '51%',
              width: '33%',
            }}
          >
            <div className="popup-inner">
              <div className="options-list">
                <button className="bttn" onClick={handleLoginButtonClick}>
                  Login / Register
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}








            {/* <button className="options" onClick={() => handleDropdownChange("")}>
                <FontAwesomeIcon icon={faCircleUser} />   
            </button> */}
    // setShowInput(false);

    // function toggleInput() {
    //     if (showInput) {
    //         return;
    //     }
    //     setShowInput(!showInput);
    // }


    // const openLoginPopup = () => {
    //     setLoginPopupOpen(true);
    // };

    

    



    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // const handleDropdownToggle = () => {
    //     setIsDropdownOpen((prev) => !prev);
    // };

    // const handleDropdownChange = (option) => {
    //     setSelectedOption(false);
    //     setSelectedOption(option);
    // };
