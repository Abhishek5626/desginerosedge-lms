// src/pages/HomePage/Home.jsx
import React from 'react'
import Hero from '../../components/Hero/Hero'
import ContinueLearning from '../../components/ContinueLearning/ContinueLearning'
import Bulletin from '../../components/Bulletin/Bulletin'
import RecommendedList from '../../components/Recommended/RecommendedList'
import UpcomingEvents from '../../components/UpcomingEvents/UpcomingEvents'
import GetStarted from '../../components/GetStarted/GetStarted'
import './Home.css' // keep your Home-specific styles here (optional)
import Streak from '../../components/Streak/Streak'

export default function Home() {
  return (
    /* This component is a PAGE only — the App shell (SideNav + TopBar) must live in App.jsx */
    <div className="pageArea">
      {/* Hero sits immediately under the TopBar (TopBar is part of App.jsx) */}
      <Hero />

      {/* Grid: main column + right sidebar */}
      <div className="pageAreaaa__grid">
        <div className="pageArea__main">
          <ContinueLearning />
          <Bulletin />
          {/* Recommended & Upcoming are full-width blocks — you can keep them in the main column */}
          <RecommendedList />
          <UpcomingEvents />
        </div>

        <aside className="pageArea__aside">
          <GetStarted />
          <Streak currentStreak={2} targetProblems={3} activeDays={['Tue','Wed','Thu']} />
        </aside>
      </div>
    </div>
  )
}
