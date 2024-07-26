import React from "react";
import { Link } from "react-router-dom";
import "./user.css";
import {
  PermIdentity,
  Event,
  PhoneAndroid,
  MailOutline,
  LocationOn,
  AddOutlined,
  PublishTwoTone,
} from "@material-ui/icons";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function User() {
  return (
    <div className="containerHome">
      <Navbar />
      <div className="smContainerHome">
        <Sidebar />
        <div className="user">
          <div className="userTitleContainer">
            <h1 className="userTitle">Edit User Information</h1>
            <Link to="/registerUser">
              <button className="userAddButton">Create</button>
            </Link>
          </div>

          <div className="userContainer">
            <div className="userDisplay">
              <div className="userDisplayTop">
                <img
                  src="https://images.pexels.com/photos/10011010/pexels-photo-10011010.jpeg?cs=srgb&dl=pexels-michael-kanivetsky-10011010.jpg&fm=jpg"
                  alt=""
                  className="userDisplayImg"
                />
                <div className="userDisplayTopTitle">
                  <span className="userDisplayUsername">Abcd Efgh</span>
                  <span className="userDisplayUserTitle">
                    Software Engineer
                  </span>
                </div>
              </div>

              <div className="userDisplayBottom">
                <span className="userDisplayTitle">Account Details</span>
                <div className="userDisplayInfo">
                  <PermIdentity className="userDisplayIcon" />
                  <span className="userDisplayInfoTitle">abcdefgh13</span>
                </div>
                <div className="userDisplayInfo">
                  <Event className="userDisplayIcon" />
                  <span className="userDisplayInfoTitle">1.11.2000</span>
                </div>

                <span className="userDisplayTitle">Contact Details</span>

                <div className="userDisplayInfo">
                  <PhoneAndroid className="userDisplayIcon" />
                  <span className="userDisplayInfoTitle">+1 234 567 880</span>
                </div>
                <div className="userDisplayInfo">
                  <MailOutline className="userDisplayIcon" />
                  <span className="userDisplayInfoTitle">
                    abcdefgh13@enigmaproject.com
                  </span>
                </div>
                <div className="userDisplayInfo">
                  <LocationOn className="userDisplayIcon" />
                  <span className="userDisplayInfoTitle">
                    North Pole | Earth
                  </span>
                </div>
              </div>
            </div>
            <div className="userEdit">
              <AddOutlined className="userEditIcon" />

              <form className="userEditForm">
                <div className="userEditleft">
                  <div className="userEditItem">
                    <label>Full Name</label>
                    <input
                      type="text"
                      className="userEditInput"
                      placeholder="Abcd Efgh"
                    />
                  </div>
                  <div className="userEditItem">
                    <label>Username</label>
                    <input
                      type="text"
                      className="userEditInput"
                      placeholder="abcdefgh13"
                    />
                  </div>
                  <div className="userEditItem">
                    <label>Email</label>
                    <input
                      type="text"
                      className="userEditInput"
                      placeholder="abcdefgh13@enigmaproject.com"
                    />
                  </div>
                  <div className="userEditItem">
                    <label>Phone</label>
                    <input
                      type="text"
                      className="userEditInput"
                      placeholder="+1 234 567 880"
                    />
                  </div>

                  <div className="userEditItem">
                    <label>Address</label>
                    <input
                      type="text"
                      className="userEditInput"
                      placeholder="North Pole | Earth"
                    />
                  </div>
                </div>
                <div className="userEditRight">
                  <div className="userEditUpload">
                    <img
                      className="userEditImg"
                      src="https://images.pexels.com/photos/10011010/pexels-photo-10011010.jpeg?cs=srgb&dl=pexels-michael-kanivetsky-10011010.jpg&fm=jpg"
                      alt=""
                    />
                    <label htmlFor="file">
                      <PublishTwoTone
                        className="userEditIcon"
                        style={{ cursor: "pointer" }}
                      />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <button className="userEditButton">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
