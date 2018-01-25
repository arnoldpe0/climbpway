import React, { Component } from "react";
import Helmet from "react-helmet";
import Map from "../components/Map/Map";
import config from "../../data/SiteConfig";

class MapPage extends Component {
  render() {
    return (
      <div id ="map" className="map-container">
        <Helmet title={`Map | ${config.siteTitle}`}>
          <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.42.0/mapbox-gl.css' rel='stylesheet' />
        </Helmet>
        <Map />
      </div>
    );
  }
}

export default MapPage;
