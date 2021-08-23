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
          <div className="bio-links">
            <a
              href={`https://twitter.com/${social.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image fixed={data.twitter.childImageSharp.fixed} alt="twitter" />
            </a>
            &nbsp;&nbsp;
            <a
              href={`https://linkedin.com/in/${social.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                fixed={data.linkedin.childImageSharp.fixed}
                alt="linked in"
              />
            </a>
            &nbsp;&nbsp;
            <a
              href={`https://github.com/${social.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image fixed={data.github.childImageSharp.fixed} alt="github" />
            </a>
            &nbsp;&nbsp;
            <a
              href={`https://instagram.com/${social.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                fixed={data.instagram.childImageSharp.fixed}
                alt="instagram"
              />
            </a>
            &nbsp;&nbsp;
          </div>
        </p>
      )}
    </div>
  )
}

export default Bio
