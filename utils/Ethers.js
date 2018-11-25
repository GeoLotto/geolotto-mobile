import Storage from "./Storage";

import { ethers } from "ethers";

export default class Ethers {
  static getProvider() {
    return new ethers.providers.InfuraProvider("ropsten");
  }
  static async getWallet() {
    try {
      const key = await Storage.getPrivateKey();
      return new ethers.Wallet(key, this.getProvider());
    } catch (err) {
      alert("Nie mozna bylo przywrocic walleta. Tworzymy nowy.");
      const wallet = ethers.Wallet.createRandom().connect(this.getProvider());
      try {
        await Storage.setPrivateKey(wallet.privateKey);
      } catch (err) {
        alert(err);
      }
      return wallet;
    }
  }
}
