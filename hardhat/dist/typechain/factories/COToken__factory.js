"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.COToken__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [],
        name: "AllowlistDisabled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address[]",
                name: "minters",
                type: "address[]",
            },
        ],
        name: "AllowlistedAddressesAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address[]",
                name: "minters",
                type: "address[]",
            },
        ],
        name: "AllowlistedAddressesRemoved",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address[]",
                name: "minters",
                type: "address[]",
            },
        ],
        name: "MintersAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address[]",
                name: "minters",
                type: "address[]",
            },
        ],
        name: "MintersRemoved",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [],
        name: "MintingDisabledForever",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bool",
                name: "status",
                type: "bool",
            },
        ],
        name: "PauseStatusChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [],
        name: "PausingDisabledForever",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [],
        name: "DOMAIN_SEPARATOR",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "_addresses",
                type: "address[]",
            },
        ],
        name: "addAllowlistedAddresses",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "_minters",
                type: "address[]",
            },
        ],
        name: "addMinters",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "allowlistDisabled",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "allowlistedAddresses",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "cap",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bool",
                name: "_status",
                type: "bool",
            },
        ],
        name: "changePauseStatus",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "disableAllowlist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "disableMintingForever",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "disablePausingForever",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "foreverUnpaused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256",
            },
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_account",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "minters",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "mintingDisabled",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "nonces",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "paused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
            },
            {
                internalType: "uint8",
                name: "v",
                type: "uint8",
            },
            {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
            },
        ],
        name: "permit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "_addresses",
                type: "address[]",
            },
        ],
        name: "removeAllowlistedAddresses",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "_minters",
                type: "address[]",
            },
        ],
        name: "removeMinters",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60c06040526b033b2e3c9fd0803ce80000006080527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960a0523480156200004557600080fd5b50604080518082018252600e81526d636f6f7264696e6170652e636f6d60901b602080830191825283518085019094526002845261434f60f01b908401528151919291620000969160039162000125565b508051620000ac90600490602084019062000125565b505050620000c9620000c3620000cf60201b60201c565b620000d3565b62000208565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200013390620001cb565b90600052602060002090601f016020900481019282620001575760008555620001a2565b82601f106200017257805160ff1916838001178555620001a2565b82800160010185558215620001a2579182015b82811115620001a257825182559160200191906001019062000185565b50620001b0929150620001b4565b5090565b5b80821115620001b05760008155600101620001b5565b600281046001821680620001e057607f821691505b602082108114156200020257634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a051611cf76200022e6000396000610de40152600061065a0152611cf76000f3fe608060405234801561001057600080fd5b506004361061018b5760003560e01c806306ca0bad1461019057806306fdde031461019a578063095ea7b3146101b8578063103ee2f5146101db57806318160ddd146101fe57806321afb5ee1461021057806323b872dd14610223578063313ce567146102365780633424b8ce14610245578063355274ea146102585780633644e51514610260578063395093511461026857806340c10f191461027b5780635c975abb1461028e5780635fc1964f1461029b57806370a08231146102ae578063715018a6146102c157806371e2a657146102c957806372be7ec3146102dc5780637a131ebe146102e45780637ecebe00146102f65780638da5cb5b1461031657806395d89b41146103365780639b1989501461033e578063a457c2d714610352578063a9059cbb14610365578063c4722a4d14610378578063cf8e629a1461038b578063d505accf14610393578063dd62ed3e146103a6578063f2fde38b146103b9578063f356c912146103cc578063f46eccc4146103df575b600080fd5b610198610402565b005b6101a26104a6565b6040516101af9190611a5e565b60405180910390f35b6101cb6101c636600461195b565b610538565b60405190151581526020016101af565b6101cb6101e9366004611863565b60076020526000908152604090205460ff1681565b6002545b6040519081526020016101af565b6008546101cb9062010000900460ff1681565b6101cb6102313660046118af565b610550565b604051601281526020016101af565b6101986102533660046119f2565b6105e1565b610202610658565b61020261067c565b6101cb61027636600461195b565b610751565b61019861028936600461195b565b610773565b6008546101cb9060ff1681565b6101986102a9366004611984565b610812565b6102026102bc366004611863565b610901565b610198610920565b6101986102d7366004611984565b610934565b610198610a17565b6008546101cb90610100900460ff1681565b610202610304366004611863565b60096020526000908152604090205481565b61031e610a87565b6040516001600160a01b0390911681526020016101af565b6101a2610a96565b6008546101cb906301000000900460ff1681565b6101cb61036036600461195b565b610aa5565b6101cb61037336600461195b565b610b2b565b610198610386366004611984565b610bba565b610198610c9e565b6101986103a13660046118ea565b610d0e565b6102026103b436600461187d565b610f39565b6101986103c7366004611863565b610f64565b6101986103da366004611984565b610fdd565b6101cb6103ed366004611863565b60066020526000908152604090205460ff1681565b61040a6110c1565b60085462010000900460ff161561046a5760405162461bcd60e51b815260206004820152602b6024820152600080516020611c8283398151915260448201526a696e7420616e796d6f726560a81b60648201526084015b60405180910390fd5b6008805462ff00001916620100001790556040517fd498043d7ad0aae95bcd163cc21a9f809917f820b6eb2114164f7eb62af7627a90600090a1565b6060600380546104b590611c15565b80601f01602080910402602001604051908101604052809291908181526020018280546104e190611c15565b801561052e5780601f106105035761010080835404028352916020019161052e565b820191906000526020600020905b81548152906001019060200180831161051157829003601f168201915b5050505050905090565b600033610546818585611120565b5060019392505050565b60085460009060ff16158061058957506008546301000000900460ff1615801561058957503360009081526007602052604090205460ff165b6105a55760405162461bcd60e51b815260040161046190611ae6565b6001600160a01b0383163014156105ce5760405162461bcd60e51b815260040161046190611ab1565b6105d9848484611244565b949350505050565b6105e96110c1565b600854610100900460ff16156106115760405162461bcd60e51b815260040161046190611b29565b6008805460ff19168215159081179091556040519081527fef37df9624f797913e7585c7f7b5d004ba6704be3c64b0561c157728ccc869859060200160405180910390a150565b7f000000000000000000000000000000000000000000000000000000000000000090565b604080518082018252600e81526d636f6f7264696e6170652e636f6d60901b6020918201528151808301835260018152603160f81b9082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527f29f08892e9d9d00942c1a4e8d6437f3fb8ccd5d61f75bf952e083399f724a975818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c0909101909252815191012090565b6000336105468185856107648383610f39565b61076e9190611bfd565b611120565b600854339062010000900460ff161561079e5760405162461bcd60e51b815260040161046190611b74565b6001600160a01b03811660009081526006602052604090205460ff166108035760405162461bcd60e51b815260206004820152601a6024820152791058d8d95cdcd0dbdb9d1c9bdb0e8810d85b9b9bdd081b5a5b9d60321b6044820152606401610461565b61080d838361125d565b505050565b61081a6110c1565b60085462010000900460ff16156108435760405162461bcd60e51b815260040161046190611b74565b60005b818110156108c35760006006600085858581811061087457634e487b7160e01b600052603260045260246000fd5b90506020020160208101906108899190611863565b6001600160a01b031681526020810191909152604001600020805460ff1916911515919091179055806108bb81611c50565b915050610846565b507fa4bd966469c62332cc5041d465060dbc3e847c7b125422e59ddb3e61a2005ae782826040516108f5929190611a12565b60405180910390a15050565b6001600160a01b0381166000908152602081905260409020545b919050565b6109286110c1565b61093260006112cd565b565b61093c6110c1565b60085462010000900460ff16156109655760405162461bcd60e51b815260040161046190611b74565b60005b818110156109e55760016006600085858581811061099657634e487b7160e01b600052603260045260246000fd5b90506020020160208101906109ab9190611863565b6001600160a01b031681526020810191909152604001600020805460ff1916911515919091179055806109dd81611c50565b915050610968565b507f6050e1d24499bf62f6297dc608356dc088c4e4b4fd753a8606207fdf078578e382826040516108f5929190611a12565b610a1f6110c1565b600854610100900460ff1615610a475760405162461bcd60e51b815260040161046190611b29565b6008805460ff1961ff0019909116610100171690556040517f3f497821ce68d0936d5908ecb1360ef3c825e415f122cd465b3bab23d6a5bf7490600090a1565b6005546001600160a01b031690565b6060600480546104b590611c15565b60003381610ab38286610f39565b905083811015610b135760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610461565b610b208286868403611120565b506001949350505050565b60085460009060ff161580610b6457506008546301000000900460ff16158015610b6457503360009081526007602052604090205460ff165b610b805760405162461bcd60e51b815260040161046190611ae6565b6001600160a01b038316301415610ba95760405162461bcd60e51b815260040161046190611ab1565b610bb3838361131f565b9392505050565b610bc26110c1565b6008546301000000900460ff1615610bec5760405162461bcd60e51b815260040161046190611bb4565b60005b81811015610c6c57600160076000858585818110610c1d57634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610c329190611863565b6001600160a01b031681526020810191909152604001600020805460ff191691151591909117905580610c6481611c50565b915050610bef565b507ff875362c4f1cfd50ea9685a61df0a1c19304428e6c289bf17208b0baa8b575d982826040516108f5929190611a12565b610ca66110c1565b6008546301000000900460ff1615610cd05760405162461bcd60e51b815260040161046190611bb4565b6008805463ff000000191663010000001790556040517f2d35c8d348a345fd7b3b03b7cfcf7ad0b60c2d46742d5ca536342e4185becb0790600090a1565b83421115610d5a5760405162461bcd60e51b8152602060048201526019602482015278434f546f6b656e3a206578706972656420646561646c696e6560381b6044820152606401610461565b6001600160a01b038716610dbe5760405162461bcd60e51b815260206004820152602560248201527f434f546f6b656e3a206f776e65722063616e2774206265205a45524f2061646460448201526403932b9b9960dd1b6064820152608401610461565b6000610dc861067c565b6001600160a01b038916600090815260096020526040812080547f0000000000000000000000000000000000000000000000000000000000000000928c928c928c92909190610e1683611c50565b909155506040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810187905260e00160405160208183030381529060405280519060200120604051602001610e9d929190606080825260029082015261190160f01b60808201526020810192909252604082015260a00190565b6040516020818303038152906040528051906020012090506000610ec38286868661132d565b9050886001600160a01b0316816001600160a01b031614610f235760405162461bcd60e51b815260206004820152601a602482015279434f546f6b656e3a20696e76616c6964207369676e617475726560301b6044820152606401610461565b610f2e898989611120565b505050505050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610f6c6110c1565b6001600160a01b038116610fd15760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610461565b610fda816112cd565b50565b610fe56110c1565b6008546301000000900460ff161561100f5760405162461bcd60e51b815260040161046190611bb4565b60005b8181101561108f5760006007600085858581811061104057634e487b7160e01b600052603260045260246000fd5b90506020020160208101906110559190611863565b6001600160a01b031681526020810191909152604001600020805460ff19169115159190911790558061108781611c50565b915050611012565b507f8e57ccca240b595c47024ae5107fe735c445b00720b01a618479f91709ee980382826040516108f5929190611a12565b336110ca610a87565b6001600160a01b0316146109325760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610461565b6001600160a01b0383166111825760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610461565b6001600160a01b0382166111e35760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610461565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b600033611252858285611355565b610b208585856113cf565b611265610658565b8161126f60025490565b6112799190611bfd565b11156112bf5760405162461bcd60e51b815260206004820152601560248201527410d3d51bdad95b8e8818d85c08195e18d959591959605a1b6044820152606401610461565b6112c98282611561565b5050565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000336105468185856113cf565b600080600061133e8787878761160f565b9150915061134b816116c9565b5095945050505050565b60006113618484610f39565b905060001981146113c957818110156113bc5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610461565b6113c98484848403611120565b50505050565b6001600160a01b0383166114335760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610461565b6001600160a01b0382166114955760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610461565b6001600160a01b0383166000908152602081905260409020548181101561150d5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610461565b6001600160a01b0384811660008181526020818152604080832087870390559387168083529184902080548701905592518581529092600080516020611ca2833981519152910160405180910390a36113c9565b6001600160a01b0382166115b75760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610461565b80600260008282546115c99190611bfd565b90915550506001600160a01b03821660008181526020818152604080832080548601905551848152600080516020611ca2833981519152910160405180910390a36112c9565b6000806fa2a8918ca85bafe22016d0b997e4df60600160ff1b0383111561163c57506000905060036116c0565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611690573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166116b9576000600192509250506116c0565b9150600090505b94509492505050565b60008160048111156116eb57634e487b7160e01b600052602160045260246000fd5b14156116f657610fda565b600181600481111561171857634e487b7160e01b600052602160045260246000fd5b14156117615760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b6044820152606401610461565b600281600481111561178357634e487b7160e01b600052602160045260246000fd5b14156117d15760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610461565b60038160048111156117f357634e487b7160e01b600052602160045260246000fd5b1415610fda5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610461565b80356001600160a01b038116811461091b57600080fd5b600060208284031215611874578081fd5b610bb38261184c565b6000806040838503121561188f578081fd5b6118988361184c565b91506118a66020840161184c565b90509250929050565b6000806000606084860312156118c3578081fd5b6118cc8461184c565b92506118da6020850161184c565b9150604084013590509250925092565b600080600080600080600060e0888a031215611904578283fd5b61190d8861184c565b965061191b6020890161184c565b95506040880135945060608801359350608088013560ff8116811461193e578384fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561196d578182fd5b6119768361184c565b946020939093013593505050565b60008060208385031215611996578182fd5b82356001600160401b03808211156119ac578384fd5b818501915085601f8301126119bf578384fd5b8135818111156119cd578485fd5b86602080830285010111156119e0578485fd5b60209290920196919550909350505050565b600060208284031215611a03578081fd5b81358015158114610bb3578182fd5b60208082528181018390526000908460408401835b86811015611a53576001600160a01b03611a408461184c565b1682529183019190830190600101611a27565b509695505050505050565b6000602080835283518082850152825b81811015611a8a57858101830151858201604001528201611a6e565b81811115611a9b5783604083870101525b50601f01601f1916929092016040019392505050565b6020808252818101527f434f546f6b656e3a2043616e6e6f74207472616e7366657220746f2073656c66604082015260600190565b60208082526023908201527f416363657373436f6e74726f6c3a20557365722063616e6e6f74207472616e736040820152623332b960e91b606082015260800190565b6020808252602b908201527f416363657373436f6e74726f6c3a20436f6e747261637420697320756e70617560408201526a39b2b2103337b932bb32b960a91b606082015260800190565b6020808252603290820152600080516020611c82833981519152604082015271696e7420746f6b656e7320616e796d6f726560701b606082015260800190565b60208082526029908201527f416363657373436f6e74726f6c3a20416c6c6f776c69737420616c726561647960408201526808191a5cd8589b195960ba1b606082015260800190565b60008219821115611c1057611c10611c6b565b500190565b600281046001821680611c2957607f821691505b60208210811415611c4a57634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611c6457611c64611c6b565b5060010190565b634e487b7160e01b600052601160045260246000fdfe416363657373436f6e74726f6c3a20436f6e74726163742063616e6e6f74206dddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220532579c4939828302f25d6ab6b6eb3a57622380622e2dfc505c4e584533d05e164736f6c63430008020033";
class COToken__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.COToken__factory = COToken__factory;
COToken__factory.bytecode = _bytecode;
COToken__factory.abi = _abi;
