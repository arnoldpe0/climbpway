import React, { Component } from "react";
import "./About.css";
import ReactMapGL from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYXJub2xkcGUwIiwiYSI6ImNqY3A1aGprdjJkZzAydm1yZ3pkbm1haTkifQ.et31REUJlsMFZPvegp447g';

class About extends Component {
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };
  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN} onViewportChange={(viewport) => this.setState({viewport})}
      />
    );
  }
}

export default About;
