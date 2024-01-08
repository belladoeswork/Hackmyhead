"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Login from "@/app/login/page";
import Logout from "./Logout.jsx";
import { fetchUser } from  "@/lib/fetchUser.js";






export default function UserMenu({ userUpdated, registeredUsername, setUserUpdated }) {

    const [isPopupOpen, setPopupOpen] = useState(false);
    const iconButtonRef = useRef(null);
    const popupRef = useRef(null);
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);


  
    const openPopup = () => {
      setPopupOpen((prevState) => !prevState);
    };
  
    const closePopup = () => {
      setPopupOpen(false);
    };
  
    const handleLoginButtonClick = () => {
      console.log('Login button clicked');
      closePopup();
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
  
      // document.querySelector('.navbar').addEventListener('click', handleNavbarClick);
  
      // return () => {
      //   document.querySelector('.navbar').removeEventListener('click', handleNavbarClick);
      // };
      const navbar = document.querySelector('.navbar');
      navbar.addEventListener('click', handleNavbarClick);

      return () => {
        navbar.removeEventListener('click', handleNavbarClick);
      };
    }, []);


    useEffect(() => {
      const getUser = async () => {
        try {
      
          const userData = await fetchUser();
          setUser(userData);

        } catch (error) {

          console.error('Error fetching user data:', error);
        }
  
        setLoading(false);
      
      };
  
      getUser();
    }, [userUpdated]);


    useEffect(() => {
    }, [userUpdated, registeredUsername]);


  //   const handleLogout = async (username) => {
  //     setUserUpdated(false);
  //     console.log(`User ${username} logged out`);
  // };


  const handleLogout = () => {
    setUser(null);
    setUserUpdated(false);
    console.log("User logged out");
  };

  

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

        {isPopupOpen && !isLoading && (
          <div
            ref={popupRef}
            className="popup"
            style={{
              position: 'absolute',
              top: '-205px',
              left: '74%',
              width: '33%',
            }}
          >
            <div className="popup-inner">
              <div className="options-list">
                {user.id && (
                  <div>
                    <p>Welcome, {user.username}!</p>
                    <button className="bttn" style={{ textDecoration: 'none' }} >
                      <Logout onLogout={handleLogout}/>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


