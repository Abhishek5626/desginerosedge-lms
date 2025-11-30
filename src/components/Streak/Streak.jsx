import React from 'react'
import './Streak.css'
import ThunderIcon from '../../assets/icons/ThunderIcon.svg'

/**
 * Props:
 *  - currentStreak: number
 *  - targetProblems: number
 *  - activeDays: array of day strings to highlight, e.g. ['Mon','Tue']
 */
export default function Streak({
  currentStreak = 0,
  targetProblems = 3,
  activeDays = []
}) {
  // full week labels (short form)
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <section className="streakPanel" aria-label="Streak">
      <header className="streakPanel__header">
        <div className="streakPanel__iconWrap" aria-hidden>
          <img src={ThunderIcon} alt="" className="streakPanel__icon" />
        </div>
        <span className="streakPanel__title">Streak</span>
      </header>

      <div className="streakPanel__main">
        <span className="streakPanel__count">{currentStreak}</span>
        <img
          src={ThunderIcon}
          alt=""
          aria-hidden="true"
          className="streakPanel__countIcon"
        />
      </div>

      <p className="streakPanel__subtitle">
        Solve <span className="streakPanel__subtitle--strong">{targetProblems}</span>{' '}
        <span className="streakPanel__subtitle--strong">problems</span> to start a streak
      </p>

      <div className="streakPanel__days" role="list" aria-label="Week days">
        {days.map(d => {
          const isActive = activeDays.includes(d)
          return (
            <div
              key={d}
              role="listitem"
              className={`streakPanel__day ${isActive ? 'is-active' : ''}`}
            >
              <div className="streakPanel__dayCircle">
                <img src={ThunderIcon} alt="" className="streakPanel__dayIcon" />
              </div>
              <span className="streakPanel__dayLabel">{d}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
