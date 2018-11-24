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
import AuthLoadingView from "./views/AuthLoadingView";
import AuthView from "./views/AuthView";
import AuthRegisterView from "./views/AuthRegisterView";

const AppStack = createStackNavigator({
  CouponHistory: CouponHistoryView,
  CouponMap: CouponMapView,
  Coupon: CouponView,
  LastWinnings: LastWinningsView,
  PendingCoupons: PendingCouponsView,
  SendCoupon: SendCouponView
});
const AuthStack = createStackNavigator({
  SignIn: AuthView,
  Register: AuthRegisterView
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingView,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
