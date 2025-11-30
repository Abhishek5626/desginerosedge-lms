import React from 'react'
import Pills from '../../components/Pills/Pills'
import './Profile.css'

// local image you uploaded (avatar/banner)
const avatarPath = '/mnt/data/21315ecc-8561-4151-894d-b5b8cd5c732e.png'

function StatCard({ title, children, className = '' }) {
  return (
    <section className={`statCard card ${className}`}>
      {title && <div className="statCard__title">{title}</div>}
      <div className="statCard__content">{children}</div>
    </section>
  )
}

export default function Profile() {
  const pillItems = [
    { id: 'all', label: 'All' },
    { id: 'ux', label: 'UX' },
    { id: 'ai', label: 'AI Insights' },
    { id: 'career', label: 'Career' },
    { id: 'design', label: 'Design System' },
    { id: 'html', label: 'HTML' },
    { id: 'css', label: 'CSS' },
    { id: 'react', label: 'React' }
  ]

  return (
    <div className="profilePage">
      {/* Header: title + short subtitle + pills */}
      <header className="profilePage__header">
        <div>
          <h1 className="profilePage__title">Profile</h1>

        </div>

        <Pills items={pillItems} defaultValue="all" className="profilePage__pills" />
      </header>

      {/* Full-width banner with centered avatar and basic info */}
      <div className="profilePage__banner card">
        <div className="profileBanner__inner">
          <div className="profileBanner__avatarWrap">
            <img className="profileBanner__avatar" src={avatarPath} alt="avatar" />
          </div>

          <div className="profileBanner__info">
            <div className="profileBanner__name">Kuki</div>
            <div className="profileBanner__email">abhishekkashid5626@gmail.com</div>
            <div className="profileBanner__role">A UX Designer at KPMG</div>
          </div>
        </div>
      </div>

      {/* Grid of cards: left large, right stacked */}
      <div className="profilePage__grid">
        <div className="profilePage__left">
          <StatCard title="72% Reduction in Design Mistakes">
            <p>
              Gen Alpha AI calculated that you are now improving and receiving less correction
              feedback.
            </p>

            {/* example small image inside */}
            <div className="miniThumb">
              <img src={avatarPath} alt="thumb" />
            </div>

          </StatCard>
        </div>

        <aside className="profilePage__right">
          <StatCard title="87%">
            <p>Increase in comments resolving and committing the right design decision.</p>
             <div className="miniThumb">
              <img src={avatarPath} alt="thumb" />
            </div>
          </StatCard>

          <StatCard title="20 Days to be on Leaderboard">
            <p>If you continue with the same efforts you will reach the top 3 runner up.</p>
             <div className="miniThumb">
              <img src={avatarPath} alt="thumb" />
            </div>

          </StatCard>
        </aside>
      </div>

    
      </div>
    
  )
}
