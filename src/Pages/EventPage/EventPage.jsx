import React from 'react'
import './EventPage.css'
import Pills from '../../components/Pills/Pills' // your pills component
import EventCard from './EventCard' // local card
import sampleThumb from '../../assets/avatarIMG.jpg' // replace with actual path

export default function EventPage() {
  const pills = [
    { id: 'live', label: 'Live' },
    { id: 'recorded', label: 'Recorded' },
    { id: 'coding', label: 'Coding' },
    { id: 'design', label: 'Design System' },
    { id: 'interaction', label: 'Interaction' },
    { id: 'framer', label: 'Framer' }
  ]

  // Example data - replace with API data later
  const events = new Array(9).fill(0).map((_, i) => ({
    id: i,
    thumbnail: sampleThumb,
    category: 'EVENT',
    title: `Workshop | Designing Human-Centered AI Outputs`,
    description:
      'Exercise where you learn about the fundamental principles of designs by replicating the design as it is.',
    date: 'Oct 22',
    time: '8:30 PM',
    going: 62 + i
  }))

  return (
    <div className="eventPage">
      <header className="eventPage__header">
        <div>
          <h1 className="eventPage__title">Event</h1>
        </div>

        <Pills items={pills} defaultValue="recorded" />
      </header>

      <section className="eventPage__grid" aria-live="polite">
        {events.map(e => (
          <EventCard
            key={e.id}
            thumbnail={e.thumbnail}
            category={e.category}
            title={e.title}
            description={e.description}
            date={e.date}
            time={e.time}
            going={e.going}
          />
        ))}
      </section>
    </div>
  )
}
