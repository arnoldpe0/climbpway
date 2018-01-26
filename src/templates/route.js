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
      routeName: { routeName },
      routeDescription,
      rating,
      image,
      areas,
    } = route
    return (
      <div>
        <div
          style={{
            display: `flex`,
            alignItems: `center`,
          }}
        >
          <Img resolutions={image.resolutions} />
          <h4>{routeName}</h4>
        </div>
        <h1>{routeName}</h1>
        <div>
          <span>Rating: {rating}stars</span>
          <div
            dangerouslySetInnerHTML={{
              __html: routeDescription.childMarkdownRemark.html,
            }}
          />
          <div>
            <span>Other Routes: </span>
            <ul>
              {areas.map((area, i) => (
                <li key={i}>
                  <Link key={i} to={`/areas/${area.id}`}>
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
      routeName
      routeDescription {
        childMarkdownRemark {
          html
        }
      }
      rating
      image {
        resolutions(width: 50, height: 50) {
          base64
          src
          srcSet
          height
          width
        }
      }
      areas {
        id
        title
      }
    }
  }
`
