import React, { Component } from "react";
import { ScrollView, Text } from "react-native";
import CouponListEntry from "./CouponListEntry";

export default class CouponList extends Component {
  render() {
    return (
      <ScrollView>
        {this.props.entries.map((entry, key) => (
          <CouponListEntry {...entry} key={key} />
        ))}
        <Text> </Text>
      </ScrollView>
    );
  }
}
