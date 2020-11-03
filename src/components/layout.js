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
          name="contact-form"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input name="email" placeholder="name@name.com" type="email" />
          <button>Send</button>
        </form>
      </footer>
    </div>
  )
}

export default Layout
