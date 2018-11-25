import React, { Component } from "react";
import { View } from "react-native";
import MapView from "react-native-maps";

import DebugInfo from "../components/DebugInfo";

export default class CouponMapView extends Component {
  render() {
    return (
      <View>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          style={{ width: "100%", height: "100%" }}
        />
        <DebugInfo />
      </View>
    );
  }
}
