import Storage from "./Storage";

import { ethers } from "ethers";

export default class Ethers {
  static getContractAddress() {
    return "0x64997fedf656bb202cc985b75c4549996433098d";
  }
  static getContractAbi() {
    return [
      {
        constant: false,
        inputs: [
          {
            name: "_longitude",
            type: "uint256"
          },
          {
            name: "_latitude",
            type: "uint256"
          }
        ],
        name: "addNewCoupon",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          {
            name: "_couponId",
            type: "uint256"
          }
        ],
        name: "didWon",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [],
        name: "endLottery",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        constant: false,
        inputs: [
          {
            name: "_couponId",
            type: "uint256"
          }
        ],
        name: "requestReward",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            name: "_owner",
            type: "address"
          },
          {
            name: "_winningRadius",
            type: "uint256"
          },
          {
            name: "_endTime",
            type: "uint256"
          },
          {
            name: "_maxLatitude",
            type: "uint256"
          },
          {
            name: "_minLatitude",
            type: "uint256"
          },
          {
            name: "_maxLongitude",
            type: "uint256"
          },
          {
            name: "_minLongitude",
            type: "uint256"
          }
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            name: "couponsNumber",
            type: "uint256"
          }
        ],
        name: "CouponsGetting",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            name: "emiter",
            type: "address"
          },
          {
            indexed: false,
            name: "value",
            type: "uint256"
          },
          {
            indexed: false,
            name: "longitude",
            type: "uint256"
          },
          {
            indexed: false,
            name: "latitude",
            type: "uint256"
          },
          {
            indexed: false,
            name: "joined",
            type: "uint256"
          },
          {
            indexed: false,
            name: "couponId",
            type: "uint256"
          }
        ],
        name: "NewCoupon",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            name: "couponId",
            type: "uint256"
          },
          {
            indexed: false,
            name: "winner",
            type: "address"
          },
          {
            indexed: false,
            name: "reward",
            type: "uint256"
          }
        ],
        name: "AwaitingWin",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            name: "couponId",
            type: "uint256"
          },
          {
            indexed: false,
            name: "winner",
            type: "address"
          },
          {
            indexed: false,
            name: "reward",
            type: "uint256"
          }
        ],
        name: "Claimed",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            name: "couponId",
            type: "uint256"
          },
          {
            indexed: false,
            name: "looser",
            type: "address"
          }
        ],
        name: "Lost",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            name: "when",
            type: "uint256"
          }
        ],
        name: "LotteryFinished",
        type: "event"
      },
      {
        constant: true,
        inputs: [
          {
            name: "",
            type: "uint256"
          }
        ],
        name: "coupons",
        outputs: [
          {
            name: "longitude",
            type: "uint256"
          },
          {
            name: "latitude",
            type: "uint256"
          },
          {
            name: "emiter",
            type: "address"
          },
          {
            name: "value",
            type: "uint256"
          },
          {
            name: "timestamp",
            type: "uint256"
          },
          {
            name: "state",
            type: "uint8"
          },
          {
            name: "reward",
            type: "uint256"
          }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      {
        constant: true,
        inputs: [],
        name: "getCouponsNumbers",
        outputs: [
          {
            name: "",
            type: "uint256"
          }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
      }
    ];
  }
  static async getContract() {
    return new ethers.Contract(
      this.getContractAddress(),
      JSON.stringify(this.getContractAbi()),
      await this.getWallet()
    );
  }
  static getProvider() {
    return new ethers.providers.InfuraProvider("ropsten");
  }
  static async getWallet() {
    try {
      const key = await Storage.getPrivateKey();
      return new ethers.Wallet(key, this.getProvider());
    } catch (err) {
      alert(
        "Nie udalo sie przywrocic walleta (nowa instalacja?). Tworzymy nowy."
      );
      const wallet = ethers.Wallet.createRandom().connect(this.getProvider());
      try {
        await Storage.setPrivateKey(wallet.privateKey);
      } catch (err) {
        alert(err);
      }
      return wallet;
    }
  }
  static async newCoupon(long, lat, value) {
    const wallet = this.getWallet();
    const contract = await this.getContract();
    try {
      await contract.addNewCoupon(parseInt(long * 1000), parseInt(lat * 1000), {
        value: ethers.utils.parseEther(value)
      });
    } catch (err) {
      alert(err);
    }
  }
}
