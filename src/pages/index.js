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
          {node.image.resolutions.src && (
            <Img
              style={{ margin: 0 }}
              resolutions={node.image.resolutions}
            />
          )}
        </div>
        <div style={{ flex: 1 }}>{node.routeName.routeName}</div>
      </div>
    </Link>
  </div>
)

class IndexPage extends React.Component {
  render() {
    const usRouteEdges = this.props.data.us.edges
    const deRouteEdges = this.props.data.german.edges
    return (
      <div style={{ marginBottom: rhythm(2) }}>
        <h2>Gatsby's integration with the Contentful Image API</h2>
        <Link to="/image-api/">See examples</Link>
        <br />
        <br />
        <br />
        <h2>Localization</h2>
        <p>
          The <code>gatsby-source-contentful</code> plugin offers full support
          for Contentful's localization features. Our sample space includes
          routes localized into both English and German.
        </p>
        <p>
          An entry and asset node are created for each locale following fallback
          rules for missing localization. In addition, each node has an
          additional field added, <code>node_locale</code> so you can select for
          nodes from a single locale
        </p>
        <h3>en-US</h3>
        {usRouteEdges.map(({ node }, i) => (
          <Route node={node} key={node.id} />
        ))}
        <br />
        <br />
        <h3>de</h3>
        {deRouteEdges.map(({ node }, i) => (
          <Route node={node} key={node.id} />
        ))}
      </div>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
    us: allContentfulRoute(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          routeName
          image {
            resolutions(width: 75) {
              ...GatsbyContentfulResolutions
            }
          }
        }
      }
    }
    german: allContentfulRoute(filter: { node_locale: { eq: "de" } }) {
      edges {
        node {
          id
          routeName
          image {
            resolutions(width: 75) {
              ...GatsbyContentfulResolutions
            }
          }
        }
      }
    }
  }
`
