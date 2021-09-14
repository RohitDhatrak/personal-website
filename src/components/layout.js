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
      <footer className={layout.footer}>
        <div className={layout.revueEmbed}>
          <div className={layout.revueEmbedTitle}>
            If you found this informative you can subscribe here
          </div>
          <form
            action="https://www.getrevue.co/profile/rohitdhatrak/add_subscriber"
            method="post"
            id="revue-form"
            className={layout.revueForm}
            name="revue-form"
            target="_blank"
            rel="noreferrer"
          >
            <div className={layout.revueFormGroup}>
              <label className={layout.revueFormLabel} for="member_email">
                Email address <span className={layout.revueFormOption}>*</span>
              </label>
              <input
                className={layout.revueFormField}
                placeholder="Your email address"
                type="email"
                name="member[email]"
                id="member_email"
              />
            </div>
            <div className={layout.revueFormGroup}>
              <label className={layout.revueFormLabel} for="member_first_name">
                Name
              </label>
              <input
                className={layout.revueFormFieldName}
                placeholder="First"
                type="text"
                name="member[first_name]"
                id="member_first_name"
              />
              <input
                className={layout.revueFormFieldName}
                placeholder="Last"
                type="text"
                name="member[last_name]"
                id="member_last_name"
              />
            </div>
            <div className={layout.revueFormActions}>
              <input
                type="submit"
                value="Subscribe"
                name="member[subscribe]"
                id="member_submit"
                className={layout.revueFormSubmit}
              />
            </div>
          </form>
        </div>
      </footer>
    </div>
  )
}

export default Layout
