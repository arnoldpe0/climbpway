import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"

import { rhythm } from "../utils/typography"

const propTypes = {
  children: PropTypes.func.isRequired,
}

class DefaultLayout extends React.Component {
  render() {
    return (
      <div
        style={{
          margin: `0 auto`,
          marginTop: rhythm(1.5),
          marginBottom: rhythm(1.5),
          maxWidth: 650,
          paddingLeft: rhythm(3 / 4),
          paddingRight: rhythm(3 / 4),
        }}
      >
      <h1>Climb Pway</h1>  
      <br />
      <Link to="/">Home</Link>
      <br/>
      <Link to="/map/">Map</Link>
        {this.props.children()}
      </div>
    )
  }
}

DefaultLayout.propTypes = propTypes

export default DefaultLayout
