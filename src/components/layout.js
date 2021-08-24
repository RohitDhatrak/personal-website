import React from "react"
import { Link } from "gatsby"
import layout from "./layout.module.css"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h3 className="main-heading">
        <Link to="/">{title}</Link>
      </h3>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer className={layout.substack}>
        <iframe
          title="Subscribe to get notified about new posts"
          src="https://rohitdhatrak.substack.com/embed"
          width="480"
          height="320"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </footer>
    </div>
  )
}

export default Layout
