import React, { Component } from "react";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import CouponHistoryView from "./views/CouponHistoryView";
import CouponMapView from "./views/CouponMapView";
import CouponView from "./views/CouponView";
import LastWinningsView from "./views/LastWinningsView";
import PendingCouponsView from "./views/PendingCouponsView";
import SendCouponView from "./views/SendCouponView";
import PreparingView from "./views/PreparingView";

const AppStack = createStackNavigator(
  {
    CouponHistory: CouponHistoryView,
    CouponMap: CouponMapView,
    Coupon: CouponView,
    LastWinnings: LastWinningsView,
    PendingCoupons: PendingCouponsView,
    SendCoupon: SendCouponView
  },
  {
    initialRouteName: "CouponMap"
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Preparing: PreparingView,
      App: AppStack
    },
    {
      initialRouteName: "Preparing"
    }
  )
);
