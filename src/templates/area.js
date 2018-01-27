import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"

import { rhythm } from "../utils/typography"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class AreaTemplate extends React.Component {
  render() {
    const area = this.props.data.contentfulArea
    const { title, description, parent, media } = area
    return (
      <div>
        <div
          style={{
            display: `flex`,
            alignItems: `center`,
            marginBottom: rhythm(1 / 2),
          }}
        >
          <Img
            style={{
              height: media[0].resolutions.height,
              width: media[0].resolutions.width,
              marginRight: rhythm(1 / 2),
            }}
            resolutions={media[0].resolutions}
          />
        </div>
        
        {/* <div>
          <h3>{title}</h3>
          <span>Routes</span>
          <ul>
            {routes &&
              routes.map((r, i) => (
                <li key={i}>
                  <Link to={`/routes/${r.id}`}>
                    {r.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div> */}
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
    }
  }
`
