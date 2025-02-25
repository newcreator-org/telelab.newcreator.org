import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const ModernEnvDev = () => {
    const data = useStaticQuery(graphql`
  query {
    markdownRemark(frontmatter: {slug: {eq: "modernEnvDev"}}) {
      html
      frontmatter {
        title
      }
    }
  }
  `)
    return (
        <>
            <Layout>
                <SEO title={data.markdownRemark.frontmatter.title} />
                <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} className="pageContents" />

            </Layout>
        </>
    )
}

export default ModernEnvDev
