import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20, ERC20Interface } from "../ERC20";
export declare class ERC20__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(name_: string, symbol_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC20>;
    getDeployTransaction(name_: string, symbol_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC20;
    connect(signer: Signer): ERC20__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162000ad438038062000ad48339810160408190526200003491620001c1565b81516200004990600390602085019062000068565b5080516200005f90600490602084019062000068565b5050506200027b565b828054620000769062000228565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b600082601f8301126200011f578081fd5b81516001600160401b03808211156200013c576200013c62000265565b604051601f8301601f19908116603f0116810190828211818310171562000167576200016762000265565b8160405283815260209250868385880101111562000183578485fd5b8491505b83821015620001a6578582018301518183018401529082019062000187565b83821115620001b757848385830101525b9695505050505050565b60008060408385031215620001d4578182fd5b82516001600160401b0380821115620001eb578384fd5b620001f9868387016200010e565b935060208501519150808211156200020f578283fd5b506200021e858286016200010e565b9150509250929050565b6002810460018216806200023d57607f821691505b602082108114156200025f57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b610849806200028b6000396000f3fe608060405234801561001057600080fd5b50600436106100995760003560e01c806306fdde031461009e578063095ea7b3146100bc57806318160ddd146100df57806323b872dd146100f1578063313ce56714610104578063395093511461011357806370a082311461012657806395d89b4114610139578063a457c2d714610141578063a9059cbb14610154578063dd62ed3e14610167575b600080fd5b6100a661017a565b6040516100b39190610761565b60405180910390f35b6100cf6100ca366004610738565b61020c565b60405190151581526020016100b3565b6002545b6040519081526020016100b3565b6100cf6100ff3660046106fd565b610224565b604051601281526020016100b3565b6100cf610121366004610738565b610248565b6100e36101343660046106aa565b61026a565b6100a6610289565b6100cf61014f366004610738565b610298565b6100cf610162366004610738565b610318565b6100e36101753660046106cb565b610326565b606060038054610189906107d8565b80601f01602080910402602001604051908101604052809291908181526020018280546101b5906107d8565b80156102025780601f106101d757610100808354040283529160200191610202565b820191906000526020600020905b8154815290600101906020018083116101e557829003601f168201915b5050505050905090565b60003361021a818585610351565b5060019392505050565b600033610232858285610475565b61023d8585856104ef565b506001949350505050565b60003361021a81858561025b8383610326565b61026591906107b4565b610351565b6001600160a01b0381166000908152602081905260409020545b919050565b606060048054610189906107d8565b600033816102a68286610326565b90508381101561030b5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b61023d8286868403610351565b60003361021a8185856104ef565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166103b35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610302565b6001600160a01b0382166104145760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610302565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006104818484610326565b905060001981146104e957818110156104dc5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610302565b6104e98484848403610351565b50505050565b6001600160a01b0383166105535760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610302565b6001600160a01b0382166105b55760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610302565b6001600160a01b0383166000908152602081905260409020548181101561062d5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610302565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a36104e9565b80356001600160a01b038116811461028457600080fd5b6000602082840312156106bb578081fd5b6106c482610693565b9392505050565b600080604083850312156106dd578081fd5b6106e683610693565b91506106f460208401610693565b90509250929050565b600080600060608486031215610711578081fd5b61071a84610693565b925061072860208501610693565b9150604084013590509250925092565b6000806040838503121561074a578182fd5b61075383610693565b946020939093013593505050565b6000602080835283518082850152825b8181101561078d57858101830151858201604001528201610771565b8181111561079e5783604083870101525b50601f01601f1916929092016040019392505050565b600082198211156107d357634e487b7160e01b81526011600452602481fd5b500190565b6002810460018216806107ec57607f821691505b6020821081141561080d57634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220a055db1f88f9ec7b9c54d7dc6d64d36b69bda6f8a5b4968d7777208ca821e3d564736f6c63430008020033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20;
}
