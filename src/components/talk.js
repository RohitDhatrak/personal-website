import React from "react"
import card from "./talk.module.css"

export function Talk({ talk, isHome }) {
  return (
    <div className={card.container}>
      {!isHome && <h2>{talk.title}</h2>}
      {isHome && <h3>{talk.title}</h3>}
      <p className={card.time}>{talk.time}</p>
      <p className={card.description}>{talk.description}</p>
      <iframe
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${talk.id}`}
        title={talk.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  )
}
