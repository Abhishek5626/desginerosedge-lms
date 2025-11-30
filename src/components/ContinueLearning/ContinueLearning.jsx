import React from 'react'
import './ContinueLearning.css'
import avatarImg from "../../assets/avatarImg.jpg";
import ThunderIcon from "../../assets/icons/ThunderIcon.svg";

export default function ContinueLearning() {
  return (
    <section className="continue">
      {/* Header */}
      <div className="continue__header">
        <img src={ThunderIcon} alt="ThunderIcon" className="ThunderIcon" />
        <span className="continue__title">Continue Learning</span>
      </div>

      <div className="continue__content">
        {/* Left: Image */}
        <div className="continue__thumbWrap">
          <img src={avatarImg} alt="Course preview" className="continue__thumb" />
        </div>

        {/* Right: Text */}
        <div className="continue__body">
          <div className="continue__label">COURSE</div>

          <h2 className="continue__heading">
            You don’t have any active courses
          </h2>

          <p className="continue__desc">
            Select a course and start improving your skills.
          </p>

          <button className="continue__cta">
            Browse Courses
          </button>
        </div>
      </div>
    </section>
  )
}
