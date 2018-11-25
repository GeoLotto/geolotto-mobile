import React, { Component } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { Card, Input, Button } from "react-native-elements";

import Ethers from "../utils/Ethers";
import { ethers } from "ethers";

export default class SendCouponView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: null
    };
  }
  async componentWillMount() {
    const wallet = await Ethers.getWallet();
    const balance = await wallet.getBalance();
    this.setState({ wallet, balance });
  }
  render() {
    const { wallet, balance } = this.state;

    if (!wallet)
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    return (
      <View>
        <Card title="Adres Ethereum">
          <Text>{wallet.address}</Text>
        </Card>
        <Card title="Ilość ETH w portfelu">
          <Text>{ethers.utils.formatEther(balance)}</Text>
        </Card>
        <Card title="Wartość zakładu">
          <Input keyboardType={"decimal-pad"} />
        </Card>
        <Button
          style={{
            width: "93%",
            marginTop: 20,
            marginLeft: "auto",
            marginRight: "auto"
          }}
          title="Kup zakład"
        />
      </View>
    );
  }
}
