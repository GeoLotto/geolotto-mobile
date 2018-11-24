import { AsyncStorage } from "react-native";

export default class Storage {
  static async getPrivateKey() {
    return this._get("PRIVATEKEY");
  }
  static async setPrivateKey(privateKey) {
    return this._set("PRIVATEKEY", privateKey);
  }
  static async _get(what) {
    try {
      const value = await AsyncStorage.getItem("@Storage:" + what);
      return value;
    } catch (error) {
      throw error;
    }
  }
  static async _set(what, value) {
    try {
      if (value === null) {
        await this._destroy(what);
      } else {
        await AsyncStorage.setItem("@Storage:" + what, value);
      }
    } catch (error) {
      throw error;
    }
  }
  static async _destroy(what) {
    try {
      await AsyncStorage.removeItem("@Storage:" + what);
    } catch (error) {
      throw error;
    }
  }
}
