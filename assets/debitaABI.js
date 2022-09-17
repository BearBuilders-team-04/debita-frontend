const json =  [
    {
      inputs: [],
      name: "idDoesNotExist",
      type: "error"
    },
    {
      inputs: [],
      name: "notEnoughCollateral",
      type: "error"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "when",
          type: "uint256"
        }
      ],
      name: "lendingDeleted",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "newID",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_wantedAmount",
          type: "uint256"
        }
      ],
      name: "lendingOptionCreated",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "when",
          type: "uint256"
        }
      ],
      name: "lendingOptionDeleted",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "when",
          type: "uint256"
        }
      ],
      name: "payment",
      type: "event"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "lendingOfferID",
          type: "uint256"
        }
      ],
      name: "acceptLendingOption",
      outputs: [],
      stateMutability: "payable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "lendingOfferID",
          type: "uint256"
        }
      ],
      name: "cancelLendingOption",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "lendingOfferID",
          type: "uint256"
        }
      ],
      name: "claimCollateral",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_interest",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "_timelap",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "_paymentsCount",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "_wantedCollateral",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "amountToBorrow",
          type: "uint256"
        },
        {
          internalType: "address",
          name: "borrowToken",
          type: "address"
        }
      ],
      name: "createLendingOption",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      name: "lendingByID",
      outputs: [
        {
          internalType: "uint256",
          name: "deadLine",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "deadlineNextPayment",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "timelap",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "paymentsCount",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "paymentsLeft",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "paymentPerTime",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "collateral",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "debt",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "borrowedAmount",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "interest",
          type: "uint256"
        },
        {
          internalType: "address",
          name: "borrowedToken",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      name: "lendingOffer",
      outputs: [
        {
          internalType: "uint256",
          name: "interest_O",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "timelap_O",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "paymentCount_O",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "wantedCollateral",
          type: "uint256"
        },
        {
          internalType: "uint256",
          name: "amountForBorrow",
          type: "uint256"
        },
        {
          internalType: "address",
          name: "borrowedToken",
          type: "address"
        },
        {
          internalType: "address",
          name: "owner",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "lendingOfferID",
          type: "uint256"
        }
      ],
      name: "payLending",
      outputs: [],
      stateMutability: "payable",
      type: "function"
    }
  ]

  export default json;