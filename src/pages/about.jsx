import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <div id ="map" className="about-container">
        <Helmet title={`About | ${config.siteTitle}`}>
          <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.42.0/mapbox-gl.css' rel='stylesheet' />
        </Helmet>
        <About />
      </div>
    );
  }
}

export default AboutPage;
