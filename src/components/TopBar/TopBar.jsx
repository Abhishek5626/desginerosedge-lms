import React from 'react'
import './TopBar.css'
import avatarImg from "../../assets/avatarImg.jpg";
import Notification from "../../assets/icons/Notification.svg";
export default function TopBar() {
  return (
    <header className="topbar">
      {/* Search Section */}
      <div className="topbar__search">
        <img src={Notification} alt="User profile" className="topbar__notification " />
        <input
          type="text"
          placeholder="Search Instructors, Classes, Topics and more"
          className="topbar__searchInput"
        />
      </div>

      {/* Right Section */}
      <div className="topbar__right">
        {/* Notification Icon */}
        <button className="topbar__iconBtn" aria-label="Notifications">
          <img src={Notification} alt="User profile" className="topbar__notification " />
        </button>

        {/* Profile Avatar */}
        <button className="topbar__avatarBtn" aria-label="Profile menu">
          <img src={avatarImg} alt="User profile" className="topbar__avatar" />
        </button>
      </div>
    </header>
  )
}
