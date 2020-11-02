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
            linkedin
            github
            instagram
          }
        }
      }
      twitter: file(relativePath: { eq: "twitter.svg" }) {
        childImageSharp {
          fixed(width: 35, height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
        childImageSharp {
          fixed(width: 35, height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      github: file(relativePath: { eq: "github.svg" }) {
        childImageSharp {
          fixed(width: 35, height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      instagram: file(relativePath: { eq: "instagram.svg" }) {
        childImageSharp {
          fixed(width: 35, height: 35) {
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
        </p>
      )}
      <div>
        <a href={`https://twitter.com/${social.twitter}`} target="_blank">
          <Image fixed={data.twitter.childImageSharp.fixed} alt="twitter" />
        </a>
        <a href={`https://linkedin.com/${social.linkedin}`} target="_blank">
          <Image fixed={data.linkedin.childImageSharp.fixed} alt="linked in" />
        </a>
        <a href={`https://github.com/${social.github}`} target="_blank">
          <Image fixed={data.github.childImageSharp.fixed} alt="github" />
        </a>
        <a href={`https://instagram.com/${social.instagram}`} target="_blank">
          <Image fixed={data.instagram.childImageSharp.fixed} alt="instagram" />
        </a>
      </div>
    </div>
  )
}

export default Bio
