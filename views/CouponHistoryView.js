import React, { Component } from "react";
import { View, Text } from "react-native";

import CouponList from "../components/CouponList";

export default class CouponHistoryView extends Component {
  render() {
    return (
      <View>
        <CouponList entries={[{}, {}]} />
      </View>
    );
  }
}
