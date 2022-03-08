import React from "react"
import footer from "./footer.module.css"

export const Footer = () => {
  return (
    <footer className={footer.container}>
      <div className={footer.revueEmbed}>
        <div className={footer.revueEmbedTitle}>
          Subscribe to my newsletter to stay updated about new posts.
        </div>
        <form
          action="https://www.getrevue.co/profile/rohitdhatrak/add_subscriber"
          method="post"
          id="revue-form"
          className={footer.revueForm}
          name="revue-form"
          target="_blank"
          rel="noreferrer"
        >
          <div className={footer.revueFormGroup}>
            <label className={footer.revueFormLabel} for="member_email">
              Email address
            </label>
            <div className={footer.revueFormContainer}>
              <input
                className={footer.revueFormField}
                placeholder="Your email address"
                type="email"
                name="member[email]"
                id="member_email"
              />
              <input
                type="submit"
                value="Subscribe"
                name="member[subscribe]"
                id="member_submit"
                className={footer.revueFormSubmit}
              />
            </div>
          </div>
        </form>
      </div>
    </footer>
  )
}
