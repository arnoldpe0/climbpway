import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"

import { rhythm } from "../utils/typography"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class RouteTemplate extends React.Component {
  render() {
    const route = this.props.data.contentfulRoute
    const {
      title,
      description,
      area,
      grade,
      rating,
      tags,
      faperson,
      fadate
      ,media
    } = route
    return (
      <div>
        <div
          style={{
            display: `flex`,
            alignItems: `center`,
          }}
        >
        
          <Img resolutions={media[0].resolutions} />
        </div>
        
        <div>
          <h3>{title}</h3>
          <span>Rating: {rating} Stars</span>
          <br/>
          <span>Description</span>
          <div
            dangerouslySetInnerHTML={{
              __html: description.childMarkdownRemark.html,
            }}
          />
          {/* <div>
            <span>Areas: </span>
            <ul>
              {areas.map((area, i) => (
                <li key={i}>
                  <Link key={i} to={`/areas/${area.id}`}>
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    )
  }
}

RouteTemplate.propTypes = propTypes

export default RouteTemplate

export const pageQuery = graphql`
  query routeQuery($id: String!) {
    contentfulRoute(id: { eq: $id }) {
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
