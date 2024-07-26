import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
// import { logoutFunction } from "../../redux/apiMethods";
import { useSelector, useDispatch } from "react-redux";

/**
* @author
* @function Navbar

**/

export default function Navbar() {
  // const signout = useSelector(
  //   (state) => state.user.currentUser.isAdmin === "false"
  // );
  // const dispatch = useDispatch();

  // const handleSignout = (e) => {
  //   dispatch(logoutFunction);
  // };

  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navLeft" style={{ textDecoration: "none" }}>
          <Link to="/" className="link">
            <span className="logo">Enigma Admin</span>
          </Link>
        </div>
        <div className="navRight">
          {/* <div className="navbarIconContainer">
            <button onClick={() => handleSignout(signout)}>Logout</button>
          </div> */}
          <div className="navbarIconContainer">
            <NotificationsNone />
            <span className="navIconBadge">2</span>
          </div>
          <div className="navbarIconContainer">
            <Language />
            <span className="navIconBadge">2</span>
          </div>
          <div className="navbarIconContainer">
            <Settings />
          </div>
          <div className="navbarIconContainer">
            <span className="navIconBadge">2</span>
          </div>

          <img
            src="https://images.pexels.com/photos/10154884/pexels-photo-10154884.jpeg?cs=srgb&dl=pexels-rodrigo-pederzini-10154884.jpg&fm=jpg"
            alt=""
            className="navAvatar"
          />
        </div>
      </div>
    </div>
  );
}
