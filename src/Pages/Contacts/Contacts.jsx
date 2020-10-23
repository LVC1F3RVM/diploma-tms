import React, { Component } from "react";
import Form from "../../components/Form";
import ContactsDetail from "../Contacts/components/ContactsDetail";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Grid } from "@material-ui/core";

const root = {
  dislpay: "flex-wrap",
  flexGrow: 1,
};

const map = {
  position: "relative",
  clear: "both",
  marginLeft: "8%",
};

class Contacts extends Component {
  state = {
    selectedPlace: "Minsk",
  };
  render() {
    return (
      <div style={root}>
        <Grid container direction="row" spacing={3}>
          <Grid item xs={10} md={4}>
            <h3>Contacts</h3>
            <ContactsDetail />
            <Form count={"email"} />
          </Grid>
          <Grid item xs={10} md={7} style={map}>
            <Map google={this.props.google} zoom={8}>
              <Marker
                title={"The marker`s title will appear as a tooltip."}
                name={"SOMA"}
                position={{ lat: 122.778519, lng: -122.40564 }}
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
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDvlGfatxoz0NdSRD9jycojcKJb4YfhuQs",
})(Contacts);
