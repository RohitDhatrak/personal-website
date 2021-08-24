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

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
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
            linkedin
            github
            instagram
          }
        }
      }
      twitter: file(absolutePath: { regex: "/twitter.png/" }) {
        childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedin: file(absolutePath: { regex: "/linkedin.png/" }) {
        childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      github: file(absolutePath: { regex: "/github.png/" }) {
        childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      instagram: file(absolutePath: { regex: "/instagram.png/" }) {
        childImageSharp {
          fixed(width: 25, height: 25) {
            ...GatsbyImageSharpFixed
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
        Hi, I'm <strong>Rohit</strong>. {author?.summary || null}
        {` `}
        <div className={bio.socials}>
          <a
            href={`https://twitter.com/${social.twitter}`}
            target="_blank"
            rel="noopener noreferrer"
            className={bio.links}
          >
            <Image fixed={data.twitter.childImageSharp.fixed} alt="twitter" />
          </a>
          <a
            href={`https://linkedin.com/in/${social.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className={bio.links}
          >
            <Image
              fixed={data.linkedin.childImageSharp.fixed}
              alt="linked in"
            />
          </a>
          <a
            href={`https://github.com/${social.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className={bio.links}
          >
            <Image fixed={data.github.childImageSharp.fixed} alt="github" />
          </a>
          <a
            href={`https://instagram.com/${social.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className={bio.links}
          >
            <Image
              fixed={data.instagram.childImageSharp.fixed}
              alt="instagram"
            />
          </a>
        </div>
      </p>
    </div>
  )
}

export default Bio
