import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"

import { rhythm } from "../utils/typography"

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

class AreaTemplate extends React.Component {
  render() {
    const area = this.props.data.contentfulArea
    const { title, description, parent, media, routes } = area
    return (
      <div>
        <div>
          
        </div>
        
        <Img resolutions={media[0].resolutions} />
        <div>
          <h3>{title}</h3>
          <br/>
          <span>Description</span>
          <div
            dangerouslySetInnerHTML={{
              __html: description.childMarkdownRemark.html,
            }}
          />
        </div>
        
        {routes.map((route) =>
          <Route node={route} key={route.id}/>
        )}
      </div>
    )
  }
}

AreaTemplate.propTypes = propTypes

export default AreaTemplate

export const pageQuery = graphql`
  query areaQuery($id: String!) {
    contentfulArea(id: { eq: $id }) {
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
          base64
          aspectRatio
          width
          height
          src
          srcSet
        }
      }
      routes {
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
`
