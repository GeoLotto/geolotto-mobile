import React, { Component } from "react";
import { Text, Button } from "react-native";
import { Icon } from "react-native-elements";
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
import SettingsView from "./views/SettingsView";
import PreparingView from "./views/PreparingView";

const AppStack = createStackNavigator(
  {
    Tabs: {
      screen: createBottomTabNavigator(
        {
          CouponMap: {
            screen: CouponMapView,
            navigationOptions: () => ({
              title: "Mapa",
              tabBarIcon: opts => (
                <Icon name="map" type="font-awesome" color={opts.tintColor} />
              )
            })
          },
          PendingCoupons: {
            screen: PendingCouponsView,
            navigationOptions: () => ({
              title: "Moje kupony",
              tabBarIcon: opts => (
                <Icon
                  name="ticket"
                  type="font-awesome"
                  color={opts.tintColor}
                />
              )
            })
          },
          CouponHistory: {
            screen: CouponHistoryView,
            navigationOptions: () => ({
              title: "Historia",
              tabBarIcon: opts => (
                <Icon
                  name="history"
                  type="font-awesome"
                  color={opts.tintColor}
                />
              )
            })
          },
          LastWinnings: {
            screen: LastWinningsView,
            navigationOptions: () => ({
              title: "Ostatnie wygrane",
              tabBarIcon: opts => (
                <Icon name="money" type="font-awesome" color={opts.tintColor} />
              )
            })
          },
          Settings: {
            screen: SettingsView,
            navigationOptions: () => ({
              title: "Ustawienia",
              tabBarIcon: opts => (
                <Icon name="cog" type="font-awesome" color={opts.tintColor} />
              )
            })
          }
        },
        { initialRouteName: "CouponMap" }
      ),
      navigationOptions: ({ navigation }) => {
        return {
          title: "GeoLotto",
          headerRight:
            navigation.state.routes[navigation.state.index].routeName ===
            "CouponMap" ? (
              <Button
                title="Nowy kupon"
                onPress={() => navigation.push("SendCoupon")}
              />
            ) : null
        };
      }
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
