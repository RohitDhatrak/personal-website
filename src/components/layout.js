import React from "react"
import { Link } from "gatsby"

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
      <footer>
        <a href="https://twitter.com/rohit_dhatrak_">Twitter</a>&nbsp;
        <a href="https://www.linkedin.com/in/rohitdhatrak/">LinkedIn</a>&nbsp;
        <a href="https://www.instagram.com/rohit_dhatrak_/">Instagram</a>&nbsp;
      </footer>
    </div>
  )
}

export default Layout
