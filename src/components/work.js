import React from "react"
import card from "./work.module.css"

export function Work({ work, isHome }) {
  return (
    <div className={card.container}>
      {!isHome && <h2>{work.company}</h2>}
      {isHome && <h3>{work.company}</h3>}
      <p className={card.role}>{work.role}</p>
      <p className={card.time}>{work.time}</p>
      <ul>
        {work.description.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  )
}
