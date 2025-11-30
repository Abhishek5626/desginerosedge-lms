// src/App.jsx (app shell)
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SideNav from './components/SideNav/SideNav'
import TopBar from './components/TopBar/TopBar'
import Home from './Pages/HomePage/Home'      // page-only Home
import CoursesPage from './Pages/CoursesPage/CoursesPage' // other pages
import Profile from './Pages/ProfilePage/Profile'
import ShowcasePage from './Pages/ShowcasePage/ShowcasePage'
import EventPage from './Pages/EventPage/EventPage'


export default function App() {
  return (
    <div className="app">
      <SideNav />

      <div className="app__content">
        <TopBar />

        <main className="pageArea" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/showcase" element={<ShowcasePage />} />
            <Route path="/eventpage" element={<EventPage />} />

            {/* other routes */}
          </Routes>
        </main>
      </div>
    </div>
  )
}
