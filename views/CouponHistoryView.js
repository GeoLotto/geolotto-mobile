import React, { Component } from "react";
import { View, Text } from "react-native";

export default class CouponHistoryView extends Component {
  render() {
    return (
      <View>
        <Text onPress={() => this.props.navigation.push("Coupon")}>
          Historical Coupon 1
        </Text>
      </View>
    );
  }
}
