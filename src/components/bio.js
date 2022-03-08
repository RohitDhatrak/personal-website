/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import bio from "./bio.module.css"
import { Twitter, LinkedIn, Github, Instagram, Link } from "../svg"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 150, height: 150, quality: 95) {
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
            linkedin
            github
            instagram
            link
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
    <div className={bio.container}>
      <Image
        fixed={avatar}
        alt={author?.name || ``}
        className={bio.avatar}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p className={bio.description}>
        {author?.summary || null}
        <div className={bio.socials}>
          <a
            href={`https://twitter.com/${social.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
            className={bio.links}
          >
            <Twitter colour="var(--color-text-light)" className="scale-15" />
          </a>
          <a
            href={`https://linkedin.com/in/${social.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className={bio.links}
          >
            <LinkedIn colour="var(--color-text-light)" className="scale-12" />
          </a>
          <a
            href={`https://github.com/${social.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className={bio.links}
          >
            <Github colour="var(--color-text-light)" className="scale-13" />
          </a>
          <a
            href={`https://instagram.com/${social.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className={bio.links}
          >
            <Instagram colour="var(--color-text-light)" className="scale-12" />
          </a>
          <a
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={bio.links}
          >
            <Link colour="var(--color-text-light)" className="scale-14" />
          </a>
        </div>
      </p>
    </div>
  )
}

export default Bio
