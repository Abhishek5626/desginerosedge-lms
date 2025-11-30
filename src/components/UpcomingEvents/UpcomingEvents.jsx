// src/components/Recommended/RecommendedList.jsx
import React from 'react'
import UpcomingCard from './UpcomingCard'
import Timeicon from '../../assets/icons/Timeicon.svg'
import StarIcon from '../../assets/icons/StarIcon.svg'
import ModulesIcon from '../../assets/icons/ModulesIcon.svg'
import TagIcon from '../../assets/icons/TagIcon.svg'
import avatarImg from '../../assets/avatarImg.jpg' // replace with your thumbnail path
import './UpcomingEvents.css'
import ThunderIcon from "../../assets/icons/ThunderIcon.svg";


export default function UpcomingEvents({ title = 'Upcoming Events' }) {
  // sample data: replace with real data later
  const cards = [
    {
      id: 1,
      thumbnail: avatarImg,
      title: 'Designing Dashboard from scratch start to finish.   ',
      desc:
        'Explore AI concepts, principles and practices essential for creating human-centered experiences.',
      tags: [
        { label: 'UX', icon: TagIcon },
        { label: '3h', icon: Timeicon },
        { label: '224 Going', icon: ModulesIcon }
      ]
    },
    {
      id: 2,
      thumbnail: avatarImg,
      title: 'UX Research Sprint',
      desc: 'Short course on guerrilla research and rapid testing.',
      tags: [
        { label: 'AI', icon: TagIcon },
        { label: '3h', icon: Timeicon },
        { label: '12 Going', icon: StarIcon }
      ]
    }
  ]

  return (
    <section className="recommended-panel">
      <div className="recommended__header">
        <div className="recommended__titleWrap">
          <img src={ThunderIcon} alt="ThunderIcon" className="ThunderIcon" />
          <h3 className="recommended__title">{title}</h3>
        </div>

        <div className="recommended__controls" role="toolbar" aria-label="Recommended navigation">
          <button className="recommended__navBtn" aria-label="previous">←</button>
          <button className="recommended__navBtn" aria-label="next">→</button>
        </div>
      </div>

      <div className="recommended__grid">
        {cards.map(c => (
          <div key={c.id} className="recommended__cell">
            <UpcomingCard
              thumbnail={c.thumbnail}
              title={c.title}
              desc={c.desc}
              tags={c.tags}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
