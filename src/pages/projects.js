import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { projectsData } from "../data"
import { Project } from "../components/project"

export default function projects() {
  return (
    <Layout location={"/projects"} title={"Hello"}>
      <h1>All Projects</h1>
      <SEO title="Projects | Rohit Dhatrak" pathname={"/projects"} />
      {projectsData.map(project => (
        <Project key={project.name} project={project} />
      ))}
    </Layout>
  )
}
