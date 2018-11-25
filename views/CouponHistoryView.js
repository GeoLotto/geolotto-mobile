import React, { Component } from "react";
import { View, Text } from "react-native";

import CouponList from "../components/CouponList";
import CouponState from "../utils/CouponState";

export default class CouponHistoryView extends Component {
  render() {
    return (
      <View>
        <CouponList
          entries={[
            {
              id: 11,
              value: 200.12,
              timestamp: 1543104183688,
              latitude: 54.233544,
              longtitude: 24.908859,
              state: CouponState.Lost
            },
            {
              id: 3,
              value: 40.0,
              timestamp: 1543091083128,
              latitude: 52.263544,
              longtitude: 20.901859,
              state: CouponState.Claimed
            }
          ]}
        />
      </View>
    );
  }
}
