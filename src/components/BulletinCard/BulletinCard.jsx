// src/components/BulletinCard/BulletinCard.jsx
import React from 'react'
import './BulletinCard.css'

// import SVGs (bundler will give a URL)
import Timeicon from '../../assets/icons/Timeicon.svg'
import StarIcon from '../../assets/icons/StarIcon.svg'

export default function BulletinCard({
  title = 'AI Fundamentals for UX',
  desc = 'Explore AI concepts, principles and practices essential for creating human-centered, trustworthy AI-powered experiences',
  time = '3h',
  level = 'Intermediate'
}) {
  return (
    <article className="bulletCard" role="article" aria-label={title}>
      <div className="bulletCard__body">
        <div className="bulletCard__kicker">NEW COURSE</div>

        <h4 className="bulletCard__title">{title}</h4>

        <p className="bulletCard__desc">{desc}</p>

        <div className="bulletCard__meta" aria-hidden="false">
          <span className="pill" title={`${time} duration`}>
            <img src={Timeicon} alt="" aria-hidden="true" className="pill__icon" />
            <span className="pill__text">{time}</span>
          </span>

          <span className="pill" title={level}>
            <img src={StarIcon} alt="" aria-hidden="true" className="pill__icon" />
            <span className="pill__text">{level}</span>
          </span>
        </div>

        <div className="bulletCard__actions">
          <button className="btn btn--primary">Browse Courses</button>
          <button className="btn btn--ghost">Mark as Read</button>
        </div>
      </div>
    </article>
  )
}
