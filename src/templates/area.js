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
    const { title, routes, icon } = area
    const iconImg = icon.resolutions
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
              height: iconImg.height,
              width: iconImg.width,
              marginRight: rhythm(1 / 2),
            }}
            resolutions={iconImg}
          />
        </div>
        
        <div>
          <h3>{title}</h3>
          <span>Routes</span>
          <ul>
            {routes &&
              routes.map((r, i) => (
                <li key={i}>
                  <Link to={`/routes/${r.id}`}>
                    {r.routeName}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
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
      icon {
        resolutions(width: 75) {
          base64
          src
          srcSet
          height
          width
        }
      }
      routes {
        id
        routeName
      }
    }
  }
`
