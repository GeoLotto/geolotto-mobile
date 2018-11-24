import React, { Component } from "react";
import { View, Text } from "react-native";

import Ethers from "../utils/Ethers";

export default class DebugInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: null
    };
  }
  async componentWillMount() {
    const wallet = await Ethers.getWallet();
    this.setState({ wallet });
  }
  render() {
    const { wallet } = this.state;

    if (!wallet)
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );

    return (
      <View>
        <Text>Address:</Text>
        <Text>{wallet.address}</Text>
        <Text>Private key:</Text>
        <Text>{wallet.privateKey}</Text>
        <Text>Provider:</Text>
        <Text>{JSON.stringify(wallet.provider)}</Text>
      </View>
    );
  }
}
