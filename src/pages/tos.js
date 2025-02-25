import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const Tos = () => {
    const data = useStaticQuery(graphql`
  query {
    markdownRemark(frontmatter: {slug: {eq: "tos"}}) {
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



export default Tos
