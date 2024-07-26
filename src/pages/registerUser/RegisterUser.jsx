import React from "react";
import "./registerUser.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function RegisterUser() {
  return (
    <div className="containerHome">
      <Navbar />
      <div className="smContainerHome">
        <Sidebar />
        <div className="registerUser">
          <h1 className="registerUserTitle">New User</h1>
          <form className="registerUserForm">
            <div className="registerUserItem">
              <label>Username</label>
              <input
                type="text"
                className="registerUserInput"
                placeholder="jon123"
              />
            </div>
            <div className="registerUserItem">
              <label>Full Name</label>
              <input
                type="text"
                className="registerUserInput"
                placeholder="jon Adam"
              />
            </div>
            <div className="registerUserItem">
              <label>Email</label>
              <input
                type="email"
                className="registerUserInput"
                placeholder="jonadam@enigmaproject.com"
              />
            </div>
            <div className="registerUserItem">
              <label>Password</label>
              <input
                type="password"
                className="registerUserInput"
                placeholder="password"
              />
            </div>
            <div className="registerUserItem">
              <label>Phone Number</label>
              <input
                type="number"
                className="registerUserInput"
                placeholder="+1 244 5577 89"
              />
            </div>
            <div className="registerUserItem">
              <label>Address</label>
              <input
                type="text"
                className="registerUserInput"
                placeholder="South Pole | Earth"
              />
            </div>
            <div className="registerUserItem">
              <label>Gender</label>
              <div className="registerUserGender">
                <input type="radio" name="gender" id="male" value="male" />
                <label for="male">Male</label>
                <input type="radio" name="gender" id="female" value="female" />
                <label for="female">Female</label>
                <input type="radio" name="gender" id="other" value="other" />
                <label for="others">Other</label>
              </div>
              <button className="registerUserButton">Create</button>
            </div>
            <div className="registerUserItem">
              <label>Active</label>
              <select className="registerUserSelect" name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
