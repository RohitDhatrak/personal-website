import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import home from "./home.module.css"
import { RightArrow } from "../svg"
import { projectsData, workData, talksData } from "../data"
import { Project } from "../components/project"
import { Work } from "../components/work"
import { Talk } from "../components/talk"

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes.slice(0, 3)
  const projects = projectsData.slice(0, 3)

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Rohit Dhatrak" pathname={location.pathname} />
      <Bio />

      <h2 className="home-subheading">Work Experience</h2>
      {workData.map(work => (
        <Work key={work.name} work={work} isHome={true} />
      ))}

      <h2 className="home-subheading">Recent Projects</h2>
      {projects.map(project => (
        <Project key={project.name} project={project} isHome={true} />
      ))}
      <Link to="/projects" className="link">
        <div className="link project-link">
          View all projects <RightArrow colour={"var(--color-primary)"} />
        </div>
      </Link>

      <h2 className="home-subheading">Recent Posts</h2>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <Link to={post.fields.slug} itemProp="url" className={home.link}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h3>
                      <span itemProp="headline">{title}</span>
                    </h3>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </Link>
            </li>
          )
        })}
      </ol>
      <Link to="/blog" className="link">
        <div className="link">
          Read all posts <RightArrow colour={"var(--color-primary)"} />
        </div>
      </Link>

      <h2 className="home-subheading">Talks</h2>
      {talksData.map(talk => (
        <Talk key={talk.name} talk={talk} isHome={true} />
      ))}
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
