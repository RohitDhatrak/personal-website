/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpeg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio">
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (
        <p className="bio-desc">
          Hi, I'm <strong>{author.name}</strong>. {author?.summary || null}
          {` `}
        </p>
      )}
      <p>
        <a href="https://twitter.com/rohit_dhatrak_">
          <img>src = "../../content/assets/twitter.svg"</img>
        </a>
        &nbsp;
        <a href="https://www.linkedin.com/in/rohitdhatrak/">
          <img>src = "../../content/assets/linkedin.svg"</img>
        </a>
        &nbsp;
        <a href="https://www.instagram.com/rohit_dhatrak_/">
          <img>src = "../../content/assets/insta.svg"</img>
        </a>
        &nbsp;
      </p>
    </div>
  )
}

export default Bio
