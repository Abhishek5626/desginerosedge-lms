import React from 'react'
import './WipBanner.css'

export default function WipBanner() {
  return (
    <div className="wipBanner" role="status">
      <p className="wipBanner__text">
        This is currently a work in progress project.
      </p>
    </div>
  )
}
