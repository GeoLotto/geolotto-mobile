import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-elements";

import MapView from "react-native-maps";

export default class CouponListEntry extends Component {
  render() {
    return (
      <Card title="#1234">
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          style={{ width: "100%", height: 200 }}
        />
        <Text>{new Date().toLocaleString("pl")}</Text>
        <Text>12.34 zł</Text>
        <Text>
          {this.props.state ? this.props.state : "Oczekuje na losowanie"}
        </Text>
      </Card>
    );
  }
}
