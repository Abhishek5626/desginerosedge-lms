import React from 'react'
import './Pills.css'

/**
 * Pills
 * Props:
 *  - items: array of { id: string|number, label: string }
 *  - value: id of selected item (optional, for controlled usage)
 *  - defaultValue: id of initially selected item (uncontrolled)
 *  - onChange: function(newId) -> called when selection changes
 *  - className: optional extra class
 */
export default function Pills({ items = [], value, defaultValue, onChange, className = '' }) {
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && items[0].id))

  // selected is either controlled (value) or internal state
  const selected = value !== undefined ? value : internal

  function handleClick(id) {
    if (value === undefined) setInternal(id) // uncontrolled mode: update internal state
    onChange && onChange(id)
  }

  return (
    <div className={`pills ${className}`} role="tablist" aria-label="Pills">
      {items.map(item => {
        const isActive = item.id === selected
        return (
          <button
            key={item.id}
            role="tab"
            aria-selected={isActive}
            className={`pill ${isActive ? 'pill--active' : ''}`}
            onClick={() => handleClick(item.id)}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}
