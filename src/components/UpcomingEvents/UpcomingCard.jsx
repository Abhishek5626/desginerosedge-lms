// src/components/Recommended/RecommendedCard.jsx
import React from 'react'
import './UpcomingCard.css'

// common icons (bundler will give a URL)
import TagIcon from '../../assets/icons/TagIcon.svg'
import TimeIcon from '../../assets/icons/TimeIcon.svg'
import StarIcon from '../../assets/icons/StarIcon.svg'
import ModulesIcon from '../../assets/icons/ModulesIcon.svg'

export default function UpcomingCard({
  thumbnail,
  title,
  desc,
  // tags can be strings: ['UX']  OR objects: [{ label: '3h', icon: TimeIcon }]
  tags = []
}) {
  return (
    <article className="recCard" tabIndex="0" aria-label={title}>
      

      <div className="recCard__body">
        <div className="recCard__media">
        {thumbnail ? <img src={thumbnail} alt={`${title} thumbnail`} /> : null}
      </div>
        <div className="recCard__row">
          <h4 className="recCard__title">{title}</h4>
          <div className="recCard__badge" aria-hidden>●</div>
        </div>

        <p className="recCard__desc">{desc}</p>

        <div className="recCard__pills" aria-hidden={tags.length === 0}>
          {tags.map((t, i) => {
            // normalize: string -> object with default TagIcon
            const tagObj = typeof t === 'string' ? { label: t, icon: TagIcon } : t
            const IconSrc = tagObj.icon || TagIcon

            return (
              <span key={i} className="recCard__pill" title={tagObj.label}>
                <img src={IconSrc} alt="" aria-hidden="true" className="recCard__pillIcon" />
                <span className="recCard__pillText">{tagObj.label}</span>
              </span>
            )
          })}
        </div>
      </div>
    </article>
  )
}
