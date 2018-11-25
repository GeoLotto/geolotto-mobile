import React, { Component } from "react";
import { ScrollView } from "react-native";
import DebugInfo from "../components/DebugInfo";

export default class SettingsView extends Component {
  render() {
    return (
      <ScrollView>
        <DebugInfo />
      </ScrollView>
    );
  }
}
