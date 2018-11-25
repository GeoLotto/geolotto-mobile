import React, { Component } from "react";
import { View } from "react-native";
import CouponList from "../components/CouponList";
import CouponState from "../utils/CouponState";

export default class PendingCouponsView extends Component {
  render() {
    return (
      <View>
        <CouponList
          entries={[
            {
              id: 18,
              value: 12.0,
              timestamp: 1543114183688,
              latitude: 52.233544,
              longtitude: 20.908859,
              state: CouponState.Pending
            },
            {
              id: 17,
              value: 4.0,
              timestamp: 1543111083128,
              latitude: 52.263544,
              longtitude: 20.901859,
              state: CouponState.Pending
            }
          ]}
        />
      </View>
    );
  }
}
