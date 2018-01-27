import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import { rhythm } from "../utils/typography"
import Img from "gatsby-image"

const propTypes = {
  data: PropTypes.object.isRequired,
}

const Route = ({ node }) => (
  <div>
    <Link
      style={{ color: `inherit`, textDecoration: `none` }}
      to={`/routes/${node.id}/`}
    >
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
          borderBottom: `1px solid lightgray`,
          paddingBottom: rhythm(1 / 2),
          marginBottom: rhythm(1 / 2),
        }}
      >
        <div style={{ marginRight: rhythm(1 / 2) }}>
          {node.media[0].resolutions.src && (
            <Img
              style={{ margin: 0 }}
              resolutions={node.media[0].resolutions}
            />
          )}
        </div>
        <div style={{ flex: 1 }}>{node.title}</div>
      </div>
    </Link>
  </div>
)

const Area = ({ node }) => (
  <div>
    <Link
      style={{ color: `inherit`, textDecoration: `none` }}
      to={`/areas/${node.id}/`}
    >
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
          borderBottom: `1px solid lightgray`,
          paddingBottom: rhythm(1 / 2),
          marginBottom: rhythm(1 / 2),
        }}
      >
        <div style={{ marginRight: rhythm(1 / 2) }}>
          {node.media[0].resolutions.src && (
            <Img
              style={{ margin: 0 }}
              resolutions={node.media[0].resolutions}
            />
          )}
        </div>
        <div style={{ flex: 1 }}>{node.title}</div>
      </div>
    </Link>
  </div>
)

class IndexPage extends React.Component {
  render() {
    const routeEdges = this.props.data.routes.edges
    const areaEdges = this.props.data.areas.edges
    return (
      <div style={{ marginBottom: rhythm(2) }}>
        
        <h3>Routes</h3>
        {routeEdges.map(({ node }, i) => (
          <Route node={node} key={node.id} />
        ))}

        <h3>Areas</h3>
        {areaEdges.map(({ node }, i) => (
          <Area node={node} key={node.id} />
        ))}
        
      </div>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
    routes: allContentfulRoute(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          title
          description {
            childMarkdownRemark {
              html
            }
          }
          
          area {
            id
          }
          grade
          rating
          tags
          faperson {
            id
          }
          fadate
          media {
            resolutions {
              ...GatsbyContentfulResolutions
            }
          }
        }
      }
    }
    areas: allContentfulArea(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          title
          description {
            childMarkdownRemark {
              html
            }
          }
          parent {
            id
          }
          media {
            resolutions {
              ...GatsbyContentfulResolutions
            }
          }
        }
      }
    }
  }
`
