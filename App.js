import React, { Component } from "react";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
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
    Tabs: {
      screen: createBottomTabNavigator(
        {
          CouponHistory: CouponHistoryView,
          CouponMap: CouponMapView,
          LastWinnings: LastWinningsView,
          PendingCoupons: PendingCouponsView
        },
        { initialRouteName: "CouponMap" }
      ),
      navigationOptions: () => ({
        title: "GeoLotto"
      })
    },
    SendCoupon: SendCouponView,
    Coupon: CouponView
  },
  {
    initialRouteName: "Tabs"
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
