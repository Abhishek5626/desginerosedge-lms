import React from 'react'
import RecommendedCard from '../../components/Recommended/RecommendedCard'
import Pills from '../../components/Pills/Pills'
import './CoursePage.css'

// thumbnails (local) — sample paths from your uploads
import avatarImg from "../../assets/avatarImg.jpg";
// import thumbB from '../../../mnt/data/298c071e-bfee-4a9b-a7dd-1e7930b0ebcd.png'

export default function CoursesPage() {
  // sample dataset with categories
  const allCards = [
    { id: 1, category: 'ux', thumbnail: avatarImg, title: 'UX Workflow', desc: 'Explore AI concepts...' , tags: ['UX','3h','3 Modules'] },
    { id: 2, category: 'ui', thumbnail: avatarImg, title: 'UI Toolkit', desc: 'Design systems...' , tags: ['UI','2h','2 Modules'] },
    { id: 3, category: 'ux', thumbnail: avatarImg, title: 'UX Research', desc: 'User research techniques...' , tags: ['UX','4h','5 Modules'] },
    { id: 4, category: 'front', thumbnail: avatarImg, title: 'React Basics', desc: 'Intro to React...' , tags: ['React','3h','4 Modules'] },
    { id: 5, category: 'ux', thumbnail: avatarImg, title: 'Accessibility', desc: 'Make accessible apps...' , tags: ['UX','2h','1 Module'] },
    { id: 6, category: 'ux', thumbnail: avatarImg, title: 'UX Workflow 2', desc: 'More UX...' , tags: ['UX','3h','3 Modules'] }
  ]

  // pills data (could be fetched or stored centrally)
  const pillItems = [
    { id: 'all', label: 'All' },
    { id: 'ux', label: 'UX Course' },
    { id: 'ui', label: 'UI Course' },
    { id: 'front', label: 'Front-end' }
  ]

  // local state: selected pill (uncontrolled mode of Pills could also be used)
  const [filter, setFilter] = React.useState('all')

  const visible = filter === 'all' ? allCards : allCards.filter(c => c.category === filter)

  return (
    <div className="coursesPage">
      {/* page title (each page should own its own title) */}
      <div className="coursesPage__header">
        <h1 className="coursesPage__title">Courses</h1>

        {/* pills component (reusable) */}
        <Pills items={pillItems} value={filter} onChange={setFilter} />
      </div>

      {/* grid of course cards */}
      <div className="coursesPage__grid">
        {visible.map(c => (
          <RecommendedCard
            key={c.id}
            thumbnail={c.thumbnail}
            title={c.title}
            desc={c.desc}
            tags={c.tags}
          />
        ))}
      </div>
    </div>
  )
}
