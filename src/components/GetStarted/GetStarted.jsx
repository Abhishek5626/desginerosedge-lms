import React from 'react'
import './GetStarted.css'
import ThunderIcon from "../../assets/icons/ThunderIcon.svg";

function StepRow({ index, label, completed = false }) {
  return (
    <div className={`gs__step ${completed ? 'is-completed' : ''}`} role="button" tabIndex="0" aria-pressed={completed}>
      <div className="gs__stepIndex" aria-hidden>{index}</div>
      <div className="gs__stepLabel">{label}</div>
    </div>
  )
}

export default function GetStarted({ steps = [], completedCount = 1 }) {
  const total = steps.length || 5
  const progress = Math.max(0, Math.min(1, completedCount / total))

  return (
    <aside className="gs" aria-labelledby="gs-heading">
      <div className="gs__header">
       <img src={ThunderIcon} alt="ThunderIcon" className="ThunderIcon" />
        <h3 id="gs-heading" className="gs__title">Get Started</h3>
      </div>

      <div className="gs__body">
        <h4 className="gs__heading">Let’s get you all set up</h4>

        <div className="gs__progress" aria-hidden>
          <div className="gs__progressBar">
            <div className="gs__progressFill" style={{ width: `${Math.round(progress * 100)}%` }} />
          </div>
        </div>

        <div className="gs__meta">{completedCount}/{total} steps completed</div>

        <div className="gs__steps">
          {(steps.length ? steps : [
            'Customize Home',
            'Complete Profile',
            'Start a Course',
            'Customize Home',
            'Customize Home'
          ]).map((s, i) => (
            <StepRow key={i} index={i + 1} label={s} completed={i < completedCount} />
          ))}
        </div>
      </div>
    </aside>
  )
}
