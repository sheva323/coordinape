"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaultBeacon__factory = void 0;
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
                indexed: false,
                internalType: "address",
                name: "newImplementation",
                type: "address",
            },
        ],
        name: "NewImplementationPushed",
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
        inputs: [],
        name: "deploymentCount",
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
                name: "",
                type: "address",
            },
        ],
        name: "deploymentPref",
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
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "deployments",
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
                internalType: "address",
                name: "_user",
                type: "address",
            },
        ],
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
        inputs: [
            {
                internalType: "address",
                name: "_newImplementation",
                type: "address",
            },
        ],
        name: "pushNewImplementation",
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
                internalType: "uint256",
                name: "_value",
                type: "uint256",
            },
        ],
        name: "setDeploymentPrefs",
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
];
const _bytecode = "0x608060405234801561001057600080fd5b50604051610e72380380610e7283398101604081905261002f9161016c565b806100393361010d565b80600281905550506100548261015d60201b61083b1760201c565b6100ba5760405162461bcd60e51b815260206004820152602d60248201527f5661756c74426561636f6e3a20696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b606482015260840160405180910390fd5b81600360006004600081546100ce906101a4565b919050819055815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b0316021790555050506101cb565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03163b151590565b6000806040838503121561017e578182fd5b82516001600160a01b0381168114610194578283fd5b6020939093015192949293505050565b60006000198214156101c457634e487b7160e01b81526011600452602481fd5b5060010190565b610c98806101da6000396000f3fe608060405234801561001057600080fd5b50600436106100f15760003560e01c806306609bbe146100f65780631333cdda1461013557806329e84949146101585780632a9eda111461016d5780632c5eaf21146101805780634c36f10d146101935780634c84c5a1146101aa57806352cbf879146101bd5780635c60da1b146101dd5780636b880718146101e5578063715018a6146101f85780638da5cb5b146102005780639749b36814610208578063abeb69971461021b578063b58729581461022e578063c4d252f51461024e578063c63c4e9b14610261578063ebd58dd91461026a578063f2fde38b1461027d575b600080fd5b61011f610104366004610b05565b6003602052600090815260409020546001600160a01b031681565b60405161012c9190610b57565b60405180910390f35b610148610143366004610b05565b610290565b604051901515815260200161012c565b61016b610166366004610b05565b6102c5565b005b61014861017b366004610b05565b6102e6565b61016b61018e366004610a71565b6102fc565b61019c60045481565b60405190815260200161012c565b6101486101b8366004610b05565b61042f565b61019c6101cb366004610a50565b60056020526000908152604090205481565b61011f610445565b61011f6101f3366004610a50565b610455565b61016b6104b4565b61011f6104c8565b61016b610216366004610b05565b6104d7565b61016b610229366004610a71565b6104fb565b61019c61023c366004610b05565b60016020526000908152604090205481565b61016b61025c366004610b05565b610613565b61019c60025481565b61016b610278366004610a50565b6106be565b61016b61028b366004610a50565b6107c2565b60008181526001602052604081205442108015906102bd5750600082815260016020819052604090912054115b90505b919050565b6004548111156102d457600080fd5b33600090815260056020526040902055565b6000908152600160208190526040909120541490565b61030461084a565b600061031387878787876108a9565b600081815260016020526040902054909150156103775760405162461bcd60e51b815260206004820181905260248201527f54696d654c6f636b3a2043616c6c20616c7265616479207363686564756c656460448201526064015b60405180910390fd5b6002548210156103c85760405162461bcd60e51b815260206004820152601c60248201527b54696d654c6f636b3a20496e73756666696369656e742064656c617960201b604482015260640161036e565b6103d28242610c19565b60008281526001602052604090819020919091555181907f66dcc96f6c92c7919714879a908fc29b273e363ba3d409c0c6db86984ee3c4809061041e908a908a908a908a908990610b99565b60405180910390a250505050505050565b6000908152600160208190526040909120541190565b600061045033610455565b905090565b6001600160a01b038116600090815260056020526040812054806104955750506004546000908152600360205260409020546001600160a01b03166102c0565b6000908152600360205260409020546001600160a01b031690506102c0565b6104bc61084a565b6104c660006108e5565b565b6000546001600160a01b031690565b3330146104f65760405162461bcd60e51b815260040161036e90610bd2565b600255565b61050361084a565b600061051287878787876108a9565b905061051d81610290565b61057f5760405162461bcd60e51b815260206004820152602d60248201527f54696d654c6f636b3a204e6f7420726561647920666f7220657865637574696f60448201526c1b881bdc88195e1958dd5d1959609a1b606482015260840161036e565b8315806105905750610590846102e6565b6105ec5760405162461bcd60e51b815260206004820152602760248201527f54696d654c6f636b3a205072656465636573736f722063616c6c206e6f7420656044820152661e1958dd5d195960ca1b606482015260840161036e565b60008181526001602081905260409091205561060a81888888610935565b50505050505050565b61061b61084a565b6106248161042f565b6106705760405162461bcd60e51b815260206004820152601d60248201527f54696d654c6f636b3a2043616c6c206973206e6f742070656e64696e67000000604482015260640161036e565b60008181526001602052604080822091909155517fab2af3494bc00bd4aa34e08bd246e5c402d3ee4856c19f5461ce47a6d57423e1906106b39083815260200190565b60405180910390a150565b3330146106dd5760405162461bcd60e51b815260040161036e90610bd2565b6106e68161083b565b6107475760405162461bcd60e51b815260206004820152602c60248201527f5661756c74426561636f6e3a20696d706c656d656e7461696f6e206973206e6f60448201526b1d08184818dbdb9d1c9858dd60a21b606482015260840161036e565b806003600060046000815461075b90610c31565b919050819055815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055507fb13a47acbb5ae77f889f61f30fbb33ae5d7df6ec9ef6bc0c39d38f97e66bd733816040516106b39190610b57565b6107ca61084a565b6001600160a01b03811661082f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161036e565b610838816108e5565b50565b6001600160a01b03163b151590565b336108536104c8565b6001600160a01b0316146104c65760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161036e565b600085858585856040516020016108c4959493929190610b99565b60405160208183030381529060405280519060200120905095945050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000836001600160a01b03168383604051610951929190610b47565b6000604051808303816000865af19150503d806000811461098e576040519150601f19603f3d011682016040523d82523d6000602084013e610993565b606091505b50509050806109f65760405162461bcd60e51b815260206004820152602960248201527f54696d656c6f636b3a20756e6465726c79696e67207472616e73616374696f6e604482015268081c995d995c9d195960ba1b606482015260840161036e565b847fc08872e260006100fd2e00a3ba4c617fdb250f802f99384d55c10097dc1d0487858585604051610a2a93929190610b6b565b60405180910390a25050505050565b80356001600160a01b03811681146102c057600080fd5b600060208284031215610a61578081fd5b610a6a82610a39565b9392505050565b60008060008060008060a08789031215610a89578182fd5b610a9287610a39565b955060208701356001600160401b0380821115610aad578384fd5b818901915089601f830112610ac0578384fd5b813581811115610ace578485fd5b8a6020828501011115610adf578485fd5b979a60209290920199509697604081013597506060810135965060800135945092505050565b600060208284031215610b16578081fd5b5035919050565b60008284528282602086013780602084860101526020601f19601f85011685010190509392505050565b6000828483379101908152919050565b6001600160a01b0391909116815260200190565b6001600160a01b0384168152604060208201819052600090610b909083018486610b1d565b95945050505050565b6001600160a01b0386168152608060208201819052600090610bbe9083018688610b1d565b604083019490945250606001529392505050565b60208082526027908201527f54696d654c6f636b3a2043616c6c6572206973206e6f7420636f6e74726163746040820152661034ba39b2b63360c91b606082015260800190565b60008219821115610c2c57610c2c610c4c565b500190565b6000600019821415610c4557610c45610c4c565b5060010190565b634e487b7160e01b600052601160045260246000fdfea26469706673582212203d43605906a7f4a4bc62539586a3c88fd571cf656faeb4cea08ee6f1a3b16d2064736f6c63430008020033";
class VaultBeacon__factory extends ethers_1.ContractFactory {
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
exports.VaultBeacon__factory = VaultBeacon__factory;
VaultBeacon__factory.bytecode = _bytecode;
VaultBeacon__factory.abi = _abi;
