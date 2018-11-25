import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";

import Ethers from "../utils/Ethers";
import { ethers } from "ethers";
import { Card } from "react-native-elements";

export default class DebugInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: null
    };
  }
  async componentWillMount() {
    const wallet = await Ethers.getWallet();
    const balance = await wallet.getBalance();
    const network = await wallet.provider.getNetwork();
    this.setState({ wallet, balance, network });
  }
  render() {
    const { wallet, balance, network } = this.state;

    if (!wallet)
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    return (
      <View>
        <Card title="Ethereum address">
          <Text>{wallet.address}</Text>
        </Card>
        <Card title="Ethereum privateKey">
          <Text>{wallet.privateKey}</Text>
        </Card>
        <Card title="Ethereum balance">
          <Text>{ethers.utils.formatEther(balance)}</Text>
        </Card>
        <Card title="Ethereum node">
          <Text>{network.name}</Text>
        </Card>
      </View>
    );
  }
}
