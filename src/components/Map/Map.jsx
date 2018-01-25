import React, { Component } from "react";
import "./Map.css";
import ReactMapGL from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYXJub2xkcGUwIiwiYSI6ImNqY3A1aGprdjJkZzAydm1yZ3pkbm1haTkifQ.et31REUJlsMFZPvegp447g';
const MAPBOX_STYLE = 'mapbox://styles/arnoldpe0/cjcp5p9cc3wof2rpos2ynja10';

export default class Map extends Component {
  state = {
    viewport: {
      width: 1000,
      height: 1000,
      latitude: 43.1029,
      longitude: -71.1794,
      zoom: 16
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _onViewportChange = viewport => this.setState({
    viewport: {...this.state.viewport, ...viewport}
  });

  _resize = () => this._onViewportChange({
    width: this.props.width || window.innerWidth,
    height: this.props.height || window.innerHeight
  });

  _goToViewport = ({longitude, latitude}) => {
    this._onViewportChange({
      longitude,
      latitude,
      zoom: 11,
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: 3000
    });
  };


  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN} mapStyle={MAPBOX_STYLE} onViewportChange={(viewport) => this.setState({viewport})}
      />
    );
  }
}
