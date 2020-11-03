import React, { Component } from "react";
import Form from "../../components/Form";
import ContactsDetail from "../Contacts/components/ContactsDetail";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Grid } from "@material-ui/core";

const form_container = {
  position: "relative",
  paddingLeft: "15px",
  paddingRight: "15px",
  float: "left",
  width: "350px",
  minHeight: "1px",
};

const map_container = {
  position: "relative",
  paddingLeft: "15px",
  paddingRight: "15px",
  float: "left",
  marginLeft: "8.33%",
  width: "650px",
  minHeight: "1px",
};

const map_styles = {
  position: "relative",
  overflow: "hidden",
  clear: "both",
  height: "490px",
};

export class Contacts extends Component {
  state = {
    selectedPlace: "Minsk",
  };
  render() {
    return (
      <Grid container>
        <Grid item style={form_container} xs={6} md={4}>
          <h3>Contacts</h3>
          <ContactsDetail />
          <Form count={"email"} />
        </Grid>
        <Grid item style={map_container} xs={8} md={7}>
          <Grid style={map_styles}>
            <Map
              google={this.props.google}
              zoom={8}
              initialCenter={{
                lat: 40.854885,
                lng: -88.081807,
              }}
            >
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
      </Grid>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDvlGfatxoz0NdSRD9jycojcKJb4YfhuQs",
})(Contacts);
