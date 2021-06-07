import React from "react";
import ReactMapboxGl, {
  GeoJSONLayer,
  Layer,
  Feature,
  Marker,
} from "react-mapbox-gl";
import * as MapboxGL from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./map-layout.css";
import logo from "../../helpers/marker.png";

let coordinatesData = [
  [-4.1628252, 50.3695931],
  [-4.1627732, 50.3696286],
  [-4.1627088, 50.3696529],
  [-4.1626333, 50.3696605],
];

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1Ijoiam9rZXItbm9vYiIsImEiOiJja3BqZnk4aHEwOGxkMnBvYXB5ejdtdnY3In0.4KOPV_IJtPBCEpWbFmNDeQ",
});

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: coordinatesData,
      },
    },
  ],
};
const linePaint = (MapboxGL.LinePaint = {
  "line-color": "red",
  "line-width": 5,
});

class MapContainer extends React.Component {
  render() {
    let markerCoordinates = [
      [-4.1628252, 50.3695931],
      [-4.3626333, 50.3696605],
    ];

    return (
      <Map
        style="mapbox://styles/mapbox/streets-v11"
        center={[-4.1628252, 50.3695931]}
        container="map"
        zoom={[15]}
        containerStyle={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <GeoJSONLayer data={geojson} linePaint={linePaint} />
        {markerCoordinates.map((coordinate) => {
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

export default MapContainer;
