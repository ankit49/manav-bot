import React from "react";
import Chat from "../bot-layout/bot";
import MapContainer from "../map-layout/map-layout";
import "./home-container.css";

class HomeContainer extends React.Component {
  render() {
    return (
      <div>
        <Chat />
        <MapContainer />
      </div>
    );
  }
}

export default HomeContainer;
