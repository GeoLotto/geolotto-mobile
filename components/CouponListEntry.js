import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-elements";

import MapView from "react-native-maps";
import CouponState from "../utils/CouponState";

export default class CouponListEntry extends Component {
  render() {
    return (
      <Card
        title={"Kupon #" + this.props.id}
        containerStyle={{ backgroundColor: this.getCouponStateColor() }}
      >
        <MapView
          initialRegion={{
            latitude: this.props.latitude,
            longitude: this.props.longtitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          style={{ width: "100%", height: 200 }}
          scrollEnabled={false}
          rotateEnabled={false}
          zoomEnabled={false}
        >
          <MapView.Marker
            coordinate={{
              latitude: this.props.latitude,
              longitude: this.props.longtitude
            }}
          />
        </MapView>
        <Text> </Text>
        <Text>
          Data i godzina: {new Date(this.props.timestamp).toLocaleString("pl")}
        </Text>
        <Text>Zakład: {this.props.value.toFixed(2)} zł</Text>
        <Text>Status: {this.getCouponStateString()}</Text>
      </Card>
    );
  }

  getCouponStateString() {
    switch (this.props.state) {
      case CouponState.Pending:
        return "Oczekuje na losowanie";
      case CouponState.Lost:
        return "Przegrana";
      case CouponState.AwaitingClaim:
        return "Nagroda do odbioru";
      case CouponState.Claimed:
        return "Nagroda odebrana";
    }
    return "Coś poszło nie tak / nieznany stan";
  }

  getCouponStateColor() {
    switch (this.props.state) {
      case CouponState.Lost:
        return "#ffefef";
      case CouponState.AwaitingClaim:
        return "#ffffef";
      case CouponState.Claimed:
        return "#efffef";
    }
    return undefined;
  }
}
