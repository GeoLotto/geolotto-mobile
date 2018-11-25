import React, { Component } from "react";
import { View } from "react-native";
import CouponList from "../components/CouponList";

export default class PendingCouponsView extends Component {
  render() {
    return (
      <View>
        <CouponList entries={[{}, {}]} />
      </View>
    );
  }
}
