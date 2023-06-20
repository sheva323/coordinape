"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApeUpgradeableBeacon__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_apeVault",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_minDelay",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "id",
                type: "bytes32",
            },
        ],
        name: "CallCancelled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "id",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "address",
                name: "target",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "CallExecuted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "id",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "address",
                name: "target",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "predecessor",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "delay",
                type: "uint256",
            },
        ],
        name: "CallScheduled",
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
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "Upgraded",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_id",
                type: "bytes32",
            },
        ],
        name: "cancel",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_min",
                type: "uint256",
            },
        ],
        name: "changeMinDelay",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_target",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
            {
                internalType: "bytes32",
                name: "_predecessor",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "_salt",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "_delay",
                type: "uint256",
            },
        ],
        name: "execute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "implementation",
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
        inputs: [
            {
                internalType: "bytes32",
                name: "_id",
                type: "bytes32",
            },
        ],
        name: "isDoneCall",
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
                internalType: "bytes32",
                name: "_id",
                type: "bytes32",
            },
        ],
        name: "isPendingCall",
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
                internalType: "bytes32",
                name: "_id",
                type: "bytes32",
            },
        ],
        name: "isReadyCall",
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
        name: "minDelay",
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
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_target",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
            {
                internalType: "bytes32",
                name: "_predecessor",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "_salt",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "_delay",
                type: "uint256",
            },
        ],
        name: "schedule",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        name: "timestamps",
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
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newImplementation",
                type: "address",
            },
        ],
        name: "upgradeTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50604051610cc8380380610cc883398101604081905261002f91610159565b808261003a3361004f565b6100438161009f565b50600355506101919050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6100b28161014a60201b6106291760201c565b6101285760405162461bcd60e51b815260206004820152603360248201527f5570677261646561626c65426561636f6e3a20696d706c656d656e746174696f60448201527f6e206973206e6f74206120636f6e747261637400000000000000000000000000606482015260840160405180910390fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b03163b151590565b6000806040838503121561016b578182fd5b82516001600160a01b0381168114610181578283fd5b6020939093015192949293505050565b610b28806101a06000396000f3fe608060405234801561001057600080fd5b50600436106100ba5760003560e01c80631333cdda146100bf5780632a9eda11146100e75780632c5eaf21146100fa5780633659cfe61461010f5780634c84c5a1146101225780635c60da1b14610135578063715018a61461015a5780638da5cb5b146101625780639749b3681461016a578063abeb69971461017d578063b587295814610190578063c4d252f5146101be578063c63c4e9b146101d1578063f2fde38b146101da575b600080fd5b6100d26100cd3660046109ce565b6101ed565b60405190151581526020015b60405180910390f35b6100d26100f53660046109ce565b610221565b61010d61010836600461093a565b610236565b005b61010d61011d366004610919565b610369565b6100d26101303660046109ce565b610394565b6001546001600160a01b03165b6040516001600160a01b0390911681526020016100de565b61010d6103a9565b6101426103bd565b61010d6101783660046109ce565b6103cc565b61010d61018b36600461093a565b6103f0565b6101b061019e3660046109ce565b60026020526000908152604090205481565b6040519081526020016100de565b61010d6101cc3660046109ce565b610508565b6101b060035481565b61010d6101e8366004610919565b6105b3565b600081815260026020526040812054421080159061021957506000828152600260205260409020546001105b90505b919050565b60009081526002602052604090205460011490565b61023e610638565b600061024d8787878787610697565b600081815260026020526040902054909150156102b15760405162461bcd60e51b815260206004820181905260248201527f54696d654c6f636b3a2043616c6c20616c7265616479207363686564756c656460448201526064015b60405180910390fd5b6003548210156103025760405162461bcd60e51b815260206004820152601c60248201527b54696d654c6f636b3a20496e73756666696369656e742064656c617960201b60448201526064016102a8565b61030c8242610ace565b60008281526002602052604090819020919091555181907f66dcc96f6c92c7919714879a908fc29b273e363ba3d409c0c6db86984ee3c48090610358908a908a908a908a908990610a4e565b60405180910390a250505050505050565b3330146103885760405162461bcd60e51b81526004016102a890610a87565b610391816106d3565b50565b60009081526002602052604090205460011090565b6103b1610638565b6103bb600061071b565b565b6000546001600160a01b031690565b3330146103eb5760405162461bcd60e51b81526004016102a890610a87565b600355565b6103f8610638565b60006104078787878787610697565b9050610412816101ed565b6104745760405162461bcd60e51b815260206004820152602d60248201527f54696d654c6f636b3a204e6f7420726561647920666f7220657865637574696f60448201526c1b881bdc88195e1958dd5d1959609a1b60648201526084016102a8565b831580610485575061048584610221565b6104e15760405162461bcd60e51b815260206004820152602760248201527f54696d654c6f636b3a205072656465636573736f722063616c6c206e6f7420656044820152661e1958dd5d195960ca1b60648201526084016102a8565b6000818152600260205260409020600190556104ff8188888861076b565b50505050505050565b610510610638565b61051981610394565b6105655760405162461bcd60e51b815260206004820152601d60248201527f54696d654c6f636b3a2043616c6c206973206e6f742070656e64696e6700000060448201526064016102a8565b60008181526002602052604080822091909155517fab2af3494bc00bd4aa34e08bd246e5c402d3ee4856c19f5461ce47a6d57423e1906105a89083815260200190565b60405180910390a150565b6105bb610638565b6001600160a01b0381166106205760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016102a8565b6103918161071b565b6001600160a01b03163b151590565b336106416103bd565b6001600160a01b0316146103bb5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102a8565b600085858585856040516020016106b2959493929190610a4e565b60405160208183030381529060405280519060200120905095945050505050565b6106db610638565b6106e48161086f565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000836001600160a01b03168383604051610787929190610a10565b6000604051808303816000865af19150503d80600081146107c4576040519150601f19603f3d011682016040523d82523d6000602084013e6107c9565b606091505b505090508061082c5760405162461bcd60e51b815260206004820152602960248201527f54696d656c6f636b3a20756e6465726c79696e67207472616e73616374696f6e604482015268081c995d995c9d195960ba1b60648201526084016102a8565b847fc08872e260006100fd2e00a3ba4c617fdb250f802f99384d55c10097dc1d048785858560405161086093929190610a20565b60405180910390a25050505050565b61087881610629565b6108e05760405162461bcd60e51b815260206004820152603360248201527f5570677261646561626c65426561636f6e3a20696d706c656d656e746174696f6044820152721b881a5cc81b9bdd08184818dbdb9d1c9858dd606a1b60648201526084016102a8565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b80356001600160a01b038116811461021c57600080fd5b60006020828403121561092a578081fd5b61093382610902565b9392505050565b60008060008060008060a08789031215610952578182fd5b61095b87610902565b955060208701356001600160401b0380821115610976578384fd5b818901915089601f830112610989578384fd5b813581811115610997578485fd5b8a60208285010111156109a8578485fd5b979a60209290920199509697604081013597506060810135965060800135945092505050565b6000602082840312156109df578081fd5b5035919050565b60008284528282602086013780602084860101526020601f19601f85011685010190509392505050565b6000828483379101908152919050565b6001600160a01b0384168152604060208201819052600090610a4590830184866109e6565b95945050505050565b6001600160a01b0386168152608060208201819052600090610a7390830186886109e6565b604083019490945250606001529392505050565b60208082526027908201527f54696d654c6f636b3a2043616c6c6572206973206e6f7420636f6e74726163746040820152661034ba39b2b63360c91b606082015260800190565b60008219821115610aed57634e487b7160e01b81526011600452602481fd5b50019056fea264697066735822122022ebf9be10b50963e761cfa76b13e7940d2f3d2e8bc148a916af945a7e528c3b64736f6c63430008020033";
class ApeUpgradeableBeacon__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_apeVault, _minDelay, overrides) {
        return super.deploy(_apeVault, _minDelay, overrides || {});
    }
    getDeployTransaction(_apeVault, _minDelay, overrides) {
        return super.getDeployTransaction(_apeVault, _minDelay, overrides || {});
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
exports.ApeUpgradeableBeacon__factory = ApeUpgradeableBeacon__factory;
ApeUpgradeableBeacon__factory.bytecode = _bytecode;
ApeUpgradeableBeacon__factory.abi = _abi;
