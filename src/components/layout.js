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
        <form
          action="https://getform.io/f/f4bd07d5-2fb4-4fca-8972-d672097cb300"
          method="POST"
          className="form-parent"
        >
          <div className="form-title">
            Sign up to get notified about new posts
          </div>
          <div className="form-items">
              <input
                type="text"
                placeholder="First Name"
                name="name"
                className="form-input"
                required
              />
              <input
                type="email"
                placeholder="name@example.com"
                name="email"
                className="form-input"
                required
              />
            <br></br>
            <button type="submit" className="form-button">
              Send
            </button>
          </div>
        </form>
      </footer>
    </div>
  )
}

export default Layout
