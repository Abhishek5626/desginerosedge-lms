import React from 'react'
import Pills from '../../components/Pills/Pills'
import ShowcaseCard from '../../components/ShowcaseCard/ShowcaseCard'
import './ShowcasePage.css'

// example local thumbnail (you uploaded this earlier)
const exampleThumb = '/mnt/data/82c65e3e-7d3b-4509-8ace-9b5ba3f34441.png'

export default function ShowcasePage() {
  const pills = [
    { id: 'app', label: 'Application' },
    { id: 'uielem', label: 'UI Element' },
    { id: 'websites', label: 'Websites' },
    { id: 'design', label: 'Design System' },
    { id: 'creativity', label: 'Creativity' },
    { id: 'interaction', label: 'Interaction' },
    { id: 'coding', label: 'Coding' },
    { id: 'framer', label: 'Framer' }
  ]

  // demo data - you'll replace with real API data later
  const cards = new Array(6).fill(0).map((_, i) => ({
    id: i,
    thumbnail: exampleThumb,
    category: 'Assessment',
    title: i % 2 === 0 ? 'Space Technology Website' : "Photographer's Portfolio Website",
    description:
      'Exercise where you learn about the fundamental principles of designs by replicating the design as it is.',
    stats: [
      { label: 'My Exp Points', value: '2,524' },
      { label: 'My Points', value: '2,524' }
    ]
  }))

  return (
    <div className="showcasePage">
      {/* header title + pills */}
      <header className="showcasePage__header">
        <div>
          <h1 className="showcasePage__title">Showcase</h1>
        </div>

        <Pills items={pills} defaultValue="websites" />
      </header>

      {/* cards grid */}
      <section className="showcasePage__grid">
        {cards.map(c => (
          <ShowcaseCard
            key={c.id}
            thumbnail={c.thumbnail}
            category={c.category}
            title={c.title}
            description={c.description}
            stats={c.stats}
          />
        ))}
      </section>
    </div>
  )
}
