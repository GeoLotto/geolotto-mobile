import React, { Component } from "react";
import { View } from "react-native";

export default class PendingCouponsView extends Component {
  render() {
    return (
      <View>
        <Text onPress={() => this.props.navigation.push("Coupon")}>
          Pending Coupon 1
        </Text>
      </View>
    );
  }
}
