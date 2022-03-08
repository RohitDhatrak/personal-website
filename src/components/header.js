import React from "react"
import { Link } from "gatsby"
import header from "./header.module.css"

export function Header() {
  return (
    <nav className={header.container}>
      <Link to="/">
        <button className={header.links}>home</button>
      </Link>
      <Link to="/projects">
        <button className={header.links}>projects</button>
      </Link>
      <Link to="/blog">
        <button className={header.links}>blog</button>
      </Link>
    </nav>
  )
}
