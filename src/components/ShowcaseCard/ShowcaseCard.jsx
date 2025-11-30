import React from 'react'
import './ShowcaseCard.css'

/**
 * ShowcaseCard props:
 *  - thumbnail: string (url/path)
 *  - category: string (small label)
 *  - title: string
 *  - description: string
 *  - stats: array of { label: string, value: string } (optional)
 *  - onClick: function (optional)
 */
export default function ShowcaseCard({
  thumbnail = '/mnt/data/82c65e3e-7d3b-4509-8ace-9b5ba3f34441.png',
  category = 'Assessment',
  title = 'Space Technology Website',
  description = 'Exercise where you learn about the fundamental principles of designs by replicating the design as it is.',
  stats = [
    { label: 'Points', value: '2,524' },
    { label: 'My Exp Points', value: '2,524' }
  ],
  onClick
}) {
  return (
    <article className="showcaseCard" onClick={onClick}>
      

      <div className="showcaseCard__body">

        <div className="showcaseCard__media">
        <img src={thumbnail} alt={title} className="showcaseCard__img" />
      </div>
      
        <div className="showcaseCard__meta">
          <span className="showcaseCard__category">{category}</span>
          <div className="showcaseCard__badge" aria-hidden />
        </div>

        <h3 className="showcaseCard__title">{title}</h3>

        <p className="showcaseCard__desc">{description}</p>

        <div className="showcaseCard__stats">
          {stats.map((s, i) => (
            <div className="showcaseCard__stat" key={i}>
              <div className="showcaseCard__statValue">{s.value}</div>
              <div className="showcaseCard__statLabel">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
