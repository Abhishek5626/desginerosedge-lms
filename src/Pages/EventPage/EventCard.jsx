import React from 'react'
import './EventCard.css'

// icons (update paths to your actual svg files)
import TimeIcon from '../../assets/icons/TimeIcon.svg'
import CalendarIcon from '../../assets/icons/CalendarIcon.svg'
import PeopleIcon from '../../assets/icons/PeopleIcon.svg'
import avatarImg from '../../assets/avatarImg.jpg'
// default thumbnail (replace with your asset path if needed)


/**
 * Props:
 *  - thumbnail (string)
 *  - category (string)
 *  - title (string)
 *  - description (string)
 *  - date (string)
 *  - time (string)
 *  - going (string|number)
 */
export default function EventCard({
  thumbnail = avatarImg,
  category = 'EVENT',
  title = 'Workshop | Designing Human-Centered AI Outputs',
  description = 'Exercise where you learn about the fundamental principles of designs by replicating the design as it is.',
  date = 'Oct 22',
  time = '8:30 PM',
  going = 62
}) {
  return (
    <article className="eventCard" tabIndex="0" aria-label={title}>
      

      <div className="eventCard__body">
        <div className="eventCard__media">
        {thumbnail ? <img src={thumbnail} alt={`${title} thumbnail`} /> : null}
      </div>
        <div className="eventCard__row">
          <span className="eventCard__category">{category}</span>
          <div className="eventCard__dot" aria-hidden="true" />
        </div>

        <h3 className="eventCard__title">{title}</h3>

        <p className="eventCard__desc">{description}</p>

        <div className="eventCard__meta">
          <div className="eventCard__metaItem">
            <img src={CalendarIcon} alt="" aria-hidden="true" className="eventCard__metaIcon" />
            <span>{date}</span>
          </div>

          <div className="eventCard__metaItem">
            <img src={TimeIcon} alt="" aria-hidden="true" className="eventCard__metaIcon" />
            <span>{time}</span>
          </div>

          <div className="eventCard__metaItem">
            <img src={PeopleIcon} alt="" aria-hidden="true" className="eventCard__metaIcon" />
            <span>{going} going</span>
          </div>
        </div>
      </div>
    </article>
  )
}
