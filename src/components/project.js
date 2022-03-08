import React from "react"
import card from "./project.module.css"

export function Project({ project, isHome }) {
  return (
    <div className={card.container}>
      {!isHome && <h2>{project.name}</h2>}
      {isHome && <h3>{project.name}</h3>}
      {!isHome && (
        <img src={`https://www.rohitdhatrak.com/${project.image}`} alt="" />
      )}
      <p>{project.description}</p>
      <p>
        <span>Tech Stack:</span> {project.techStack}
      </p>
      <div className={card.buttonContainer}>
        <a href={project.link} target="_blank">
          <button className={`${card.button} ${card.primary}`}>
            Live Preview
          </button>
        </a>
        <a href={project.code} target="_blank">
          <button className={`${card.button} ${card.secondary}`}>Code</button>
        </a>
      </div>
    </div>
  )
}
