import React from 'react'
import '../Bulletin/Bulletin.css'
import BulletinCard from '../BulletinCard/BulletinCard'
import ThunderIcon from "../../assets/icons/ThunderIcon.svg";


export default function Bulletin() {

  const cards = [
    {
      id: 1,
      title: "AI Fundamentals for UX",
      desc:
        "Explore AI concepts, principles and practices essential for creating human-centered, trustworthy AI-powered experiences",
      time: "3h",
      level: "Intermediate"
    },
    {
      id: 2,
      title: "AI Fundamentals for UX",
      desc:
        "Explore AI concepts, principles and practices essential for creating human-centered, trustworthy AI-powered experiences",
      time: "3h",
      level: "Intermediate"
    }
  ]

  return (
    <section className="bulletin">
      <div className="bulletin__header">
        <div className="bulletin__titleWrap">
          <img src={ThunderIcon} alt="ThunderIcon" className="ThunderIcon" />
          <h3 className="bulletin__title">Bulletin Board</h3>
        </div>

        <div className="bulletin__controls">
          <button className="bulletin__navBtn">←</button>
          <button className="bulletin__navBtn">→</button>
        </div>
      </div>

      <div className="bulletin__grid">
        {cards.map(card => (
          <BulletinCard
            key={card.id}
            title={card.title}
            desc={card.desc}
            time={card.time}
            level={card.level}
          />
        ))}
      </div>
    </section>
  )
}
