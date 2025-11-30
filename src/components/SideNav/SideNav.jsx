import React from 'react'
import { NavLink } from 'react-router-dom'
import './SideNav.css'
import Bookmark from "../../assets/icons/Bookmark.svg";
import Assignments from "../../assets/icons/Assignments.svg";
import Brief from "../../assets/icons/Brief.svg";
import Classes from "../../assets/icons/Classes.svg";
import Courses from "../../assets/icons/Courses.svg";
import Leaderboard from "../../assets/icons/Leaderboard.svg";
import MasterClass from "../../assets/icons/MasterClass.svg";
import Mentor from "../../assets/icons/Mentor.svg";
import Logo from "../../assets/icons/Logo.svg"; 
import Showcase from "../../assets/icons/Showcase.svg"; 
import JobBoard from "../../assets/icons/JobBoard.svg"; 
import Events from "../../assets/icons/Events.svg";
import Profile from "../../assets/icons/Profile.svg";
import Home from "../../assets/icons/Home.svg";


export default function SideNav() {
  const sections = [
    {
      title: '',
      items: [
        { id: 'Home', label: 'Home', icon: Home, to: '/' },
        { id: 'bookmarks', label: 'Bookmarks', icon: Bookmark, disabled: true }
      ]
    },
    {
  title: 'Learn',
  items: [
    { id: 'courses', label: 'Courses', icon: Courses, to: '/courses' },
    { id: 'assignments', label: 'Assignments', icon: Assignments, disabled: true },
    { id: 'masterclass', label: 'Masterclass', icon: MasterClass, disabled: true },
    { id: 'briefs', label: 'Briefs', icon: Brief, disabled: true },
    { id: 'classes', label: 'Classes', icon: Classes, disabled: true }
  ]
},
{
  title: 'Grow',
  items: [
    { id: 'event', label: 'Events', icon: Events, to: '/EventPage' },
    { id: 'leaderboard', label: 'Leaderboard', icon: Leaderboard, disabled: true },
    { id: 'mentorship', label: 'Mentorship', icon: Mentor, disabled: true },
    { id: 'showcase', label: 'Showcase', icon: Showcase, to: '/ShowcasePage' },
    { id: 'Profile', label: 'Profile', icon: Profile, to: '/Profile' },
    { id: 'jobboard', label: 'Job Board', icon: JobBoard, disabled: true }
  ]
}

  ]

  return (
    <aside className="sidenav" aria-label="Primary">
      
      {/* Brand */}
      <div className="sidenav__brand">
        <img src={Logo} alt="MasterClass Logo" className="sidenav__logoImg" />
        <div className="sidenav__brandText">Edge</div>
      </div>

      {/* Sections */}
      <nav className="sidenav__nav" role="navigation" aria-label="Main navigation">
        {sections.map((section, sIdx) => (
          <div className="sidenav__section" key={sIdx}>
            {section.title && <div className="sidenav__sectionTitle">{section.title}</div>}

            <ul className="sidenav__list">
              {section.items.map(item => (
                <li key={item.id} className="sidenav__item">

                  {/* NavLink with disabled support */}
<NavLink
  to={item.disabled ? "#" : item.to}
  end={item.to === '/'}
  className={({ isActive }) =>
    `sidenav__link 
     ${isActive ? 'is-active' : ''} 
     ${item.disabled ? 'is-disabled' : ''}`
  }
  onClick={(e) => item.disabled && e.preventDefault()}
>
  <span className="sidenav__label">{item.label}</span>
  <img src={item.icon} alt={`${item.label} icon`} className="sidenav__icon" />
</NavLink>


                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Updates card */}
      <div className="sidenav__card" role="region" aria-label="Updates">
        <div className="sidenav__cardBody">
          <div className="sidenav__cardText">We've made some updates</div>
          <button className="sidenav__cardBtn">Updates</button>
        </div>
      </div>

      {/* Footer */}
      <div className="sidenav__footer">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `sidenav__link ${isActive ? 'is-active' : ''}`
          }
        >
          <span className="sidenav__label">Settings</span>
          <span className="sidenav__icon" aria-hidden>⚙️</span>
        </NavLink>
      </div>

    </aside>
  )
}
