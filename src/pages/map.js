import React, { Component } from "react";
import Map from "../components/Map/Map";

class MapPage extends Component {
  render() {
    return (
      <div id ="map" className="map-container">
          <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.42.0/mapbox-gl.css' rel='stylesheet' />
        <Map />
      </div>
    );
  }
}

export default MapPage;