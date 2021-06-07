import React from "react";
import ReactMapboxGl, { GeoJSONLayer, Marker } from "react-mapbox-gl";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import * as MapboxGL from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./map-layout.css";
import logo from "../../helpers/marker.png";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1Ijoiam9rZXItbm9vYiIsImEiOiJja3BqZnk4aHEwOGxkMnBvYXB5ejdtdnY3In0.4KOPV_IJtPBCEpWbFmNDeQ",
});

const linePaint = (MapboxGL.LinePaint = {
  "line-color": "red",
  "line-width": 5,
});

class MapContainer extends React.Component {
  getGeoJsonData = () => {
    const geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: this.props.map.coordinatesData,
          },
        },
      ],
    };
    return geojson;
  };

  render() {
    return (
      <Map
        style={"mapbox://styles/mapbox/streets-v11"}
        center={this.props.map.centerCoordinates}
        container="map"
        zoom={[15]}
        containerStyle={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <GeoJSONLayer data={this.getGeoJsonData()} linePaint={linePaint} />
        {this.props.map.markerCoordinates.map((coordinate) => {
          return (
            <Marker coordinates={coordinate} anchor="bottom">
              <img src={logo} />
            </Marker>
          );
        })}
      </Map>
    );
  }
}
const structuredSelector = createStructuredSelector({
  map: (state) => state.map,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(structuredSelector, mapDispatchToProps)(MapContainer);
