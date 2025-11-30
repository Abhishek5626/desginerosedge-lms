import React from 'react'
import './Hero.css'
import heroImg from "../../assets/avatarImg.jpg";

export default function Hero() {
  const dateStr = '4 January, 2025'
  const userName = 'Abhishek'

  return (
    <section className="hero" role="banner" aria-label="Welcome banner">
      <div className="hero__inner">
        <div className="hero__avatarWrap">
          <img src={heroImg} alt={`${userName} avatar`} className="hero__avatar" />
        </div>

        <div className="hero__meta">
          <div className="hero__date">{dateStr}</div>
          <h1 className="hero__title">Welcome back, <span className="hero__name">{userName}</span></h1>
        </div>
      </div>
    </section>
  )
}
