import React, { Component } from "react";
import { View, Text, SafeAreaView } from "react-native";
import Ethers from "../utils/Ethers";

export default class PreparingView extends Component {
  componentDidMount() {
    this._prepareAccount();
  }
  async _prepareAccount() {
    await Ethers.getWallet();
    this.props.navigation.navigate("App");
  }
  render() {
    return (
      <View>
        <Text>GeoLotto</Text>
      </View>
    );
  }
}
