import React, { Component } from "react";
import { View } from "react-native";
import MapView from "react-native-maps";

import DebugInfo from "../components/DebugInfo";

export default class CouponMapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: {
        latitude: 0,
        longitude: 0
      }
    };
  }
  componentWillMount() {
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        this.setState({ coords: position.coords });
      },
      error => {
        alert(JSON.stringify(error));
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    );
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }
  render() {
    return (
      <View>
        <MapView
          initialRegion={{
            latitude: this.state.coords.latitude,
            longitude: this.state.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          }}
          region={{
            latitude: this.state.coords.latitude,
            longitude: this.state.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          }}
          showsUserLocation={true}
          scrollEnabled={false}
          rotateEnabled={false}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    );
  }
}
