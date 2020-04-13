// Components
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Layout from "../components/Layout"
import Typography from "@material-ui/core/Typography"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import BookIcon from "@material-ui/icons/Book"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import Button from "@material-ui/core/Button"

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `共 ${totalCount} 篇文章被打上了 "${tag}" 标签：`

  return (
    <Layout location={location} noMeta="true" title={`标签页 - ${tag}`}>
      <div>
        <Typography variant="h5" component="h2">{tagHeader}</Typography>
        <List>
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { title } = node.frontmatter
            return (
              <ListItem button divider component="a" href={slug} key={slug}>
                <ListItemIcon>
                  <BookIcon />
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItem>
            )
          })}
        </List>
        <Button variant="outlined" color="primary" startIcon={<ArrowBackIosIcon />} href="/tags">所有标签</Button>
      </div>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired,
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___title], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
