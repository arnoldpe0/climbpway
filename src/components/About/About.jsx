import React, { Component } from "react";
import "./About.css";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiYXJub2xkcGUwIiwiYSI6ImNqY3A1aGprdjJkZzAydm1yZ3pkbm1haTkifQ.et31REUJlsMFZPvegp447g"
});

class About extends Component {
  render() {
    return (
      <Map
      center={[-71.1820,43.1020]}
      zoom={[15]}
      style="mapbox://styles/arnoldpe0/cjcp5p9cc3wof2rpos2ynja10"
      containerStyle={{
        height: "100vh",
        width: "100vw"
      }}>
        
    </Map>
    );
  }
}

export default About;
