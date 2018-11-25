import React, { Component } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { Card, Input, Button } from "react-native-elements";

import Ethers from "../utils/Ethers";
import { ethers } from "ethers";

export default class SendCouponView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wallet: null,
      value: "0",
      coords: null
    };
  }
  async componentWillMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({ coords: position.coords });
    });
    const wallet = await Ethers.getWallet();
    const balance = ethers.utils.formatEther(await wallet.getBalance());
    this.setState({
      wallet,
      balance
    });
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
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
          <Text>{balance}</Text>
        </Card>
        <Card title="Wartość zakładu">
          <Input
            value={this.state.value}
            onChangeText={value => this.setState({ value })}
            keyboardType={"decimal-pad"}
          />
        </Card>
        <Button
          style={{
            width: "93%",
            marginTop: 20,
            marginLeft: "auto",
            marginRight: "auto"
          }}
          title="Kup zakład"
          onPress={() =>
            Ethers.newCoupon(
              this.state.coords.longitude,
              this.state.coords.latitude,
              this.state.value
            )
          }
          disabled={
            parseFloat(this.state.value) > parseFloat(this.state.balance) ||
            parseFloat(this.state.value) === 0
          }
        />
      </View>
    );
  }
}
