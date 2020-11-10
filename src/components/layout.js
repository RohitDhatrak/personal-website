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
          className="form-parent"
          action="https://tinyletter.com/rohitdhatrak"
          method="POST"
          target="popupwindow"
          onsubmit="window.open('https://tinyletter.com/rohitdhatrak', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
        >
          <div className="form-title">
            Sign up to get notified about new posts
          </div>
          <div className="form-items">
            <label className="form-label">
              Enter your email address
              <input
                type="email"
                placeholder="name@example.com"
                name="email"
                className="form-input"
                required
              />
            </label>
            <input type="hidden" value="1" name="embed" />
            <input className="form-button" type="submit" value="Subscribe" />
          </div>
        </form>
      </footer>
    </div>
  )
}

export default Layout
