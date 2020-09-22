import React, { Component } from "react";
import Form from "../../components/Form";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const style = {
  position: "relative",
  width: "50%",
  height: "50%",
  paddingTop: "100px",
};

class Contacts extends Component {
  state = {
    selectedPlace: "Minsk",
  };
  render() {
    return (
      <div>
        Contacts
        <Form count={"email"} />
        <Map google={this.props.google} zoom={14} style={style}>
          <Marker
            title={"The marker`s title will appear as a tooltip."}
            name={"SOMA"}
            position={{ lat: 37.778519, lng: -122.40564 }}
          />

          <Marker
            onClick={this.onMarkerClick}
            name={"Current location"}
            draggable
          />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDvlGfatxoz0NdSRD9jycojcKJb4YfhuQs",
})(Contacts);
