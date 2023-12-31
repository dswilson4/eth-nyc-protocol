/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface ShareSampleInterface extends utils.Interface {
  functions: {
    "balanceOf(address)": FunctionFragment;
    "buyShares(uint256)": FunctionFragment;
    "decreaseSubscriptionPool(uint256,uint256)": FunctionFragment;
    "getBuyPrice(uint256)": FunctionFragment;
    "getCurrentPrice()": FunctionFragment;
    "getMinimumSubPool()": FunctionFragment;
    "getPrice(uint256,uint256)": FunctionFragment;
    "getSellPrice(uint256)": FunctionFragment;
    "getSubscriptionPoolRemaining(address)": FunctionFragment;
    "getSupply()": FunctionFragment;
    "increaseSubscriptionPool(uint256,uint256)": FunctionFragment;
    "sellShares(uint256)": FunctionFragment;
    "withdrawAccumulatedFees()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "balanceOf"
      | "buyShares"
      | "decreaseSubscriptionPool"
      | "getBuyPrice"
      | "getCurrentPrice"
      | "getMinimumSubPool"
      | "getPrice"
      | "getSellPrice"
      | "getSubscriptionPoolRemaining"
      | "getSupply"
      | "increaseSubscriptionPool"
      | "sellShares"
      | "withdrawAccumulatedFees"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "buyShares",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseSubscriptionPool",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBuyPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMinimumSubPool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPrice",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSellPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSubscriptionPoolRemaining",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getSupply", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "increaseSubscriptionPool",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sellShares",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAccumulatedFees",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyShares", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseSubscriptionPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBuyPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMinimumSubPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSellPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSubscriptionPoolRemaining",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getSupply", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "increaseSubscriptionPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sellShares", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAccumulatedFees",
    data: BytesLike
  ): Result;

  events: {
    "FeeCollected(uint256,uint256,uint256,uint256)": EventFragment;
    "Trade(address,address,bool,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FeeCollected"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Trade"): EventFragment;
}

export interface FeeCollectedEventObject {
  tokenId: BigNumber;
  feeCollected: BigNumber;
  subscriptionPoolRemaining: BigNumber;
  liquidationStartedAt: BigNumber;
}
export type FeeCollectedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber],
  FeeCollectedEventObject
>;

export type FeeCollectedEventFilter = TypedEventFilter<FeeCollectedEvent>;

export interface TradeEventObject {
  trader: string;
  subject: string;
  isBuy: boolean;
  shareAmount: BigNumber;
  ethAmount: BigNumber;
  supply: BigNumber;
}
export type TradeEvent = TypedEvent<
  [string, string, boolean, BigNumber, BigNumber, BigNumber],
  TradeEventObject
>;

export type TradeEventFilter = TypedEventFilter<TradeEvent>;

export interface ShareSample extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ShareSampleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    balanceOf(addr: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    buyShares(
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    decreaseSubscriptionPool(
      tokenId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getBuyPrice(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getCurrentPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMinimumSubPool(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPrice(
      _supply: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSellPrice(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSubscriptionPoolRemaining(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    increaseSubscriptionPool(
      tokenId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    sellShares(
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    withdrawAccumulatedFees(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  balanceOf(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

  buyShares(
    amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  decreaseSubscriptionPool(
    tokenId: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getBuyPrice(
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCurrentPrice(overrides?: CallOverrides): Promise<BigNumber>;

  getMinimumSubPool(overrides?: CallOverrides): Promise<BigNumber>;

  getPrice(
    _supply: BigNumberish,
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSellPrice(
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSubscriptionPoolRemaining(
    addr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSupply(overrides?: CallOverrides): Promise<BigNumber>;

  increaseSubscriptionPool(
    tokenId: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  sellShares(
    amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  withdrawAccumulatedFees(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    balanceOf(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    buyShares(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    decreaseSubscriptionPool(
      tokenId: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getBuyPrice(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentPrice(overrides?: CallOverrides): Promise<BigNumber>;

    getMinimumSubPool(overrides?: CallOverrides): Promise<BigNumber>;

    getPrice(
      _supply: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSellPrice(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSubscriptionPoolRemaining(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSupply(overrides?: CallOverrides): Promise<BigNumber>;

    increaseSubscriptionPool(
      tokenId: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    sellShares(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    withdrawAccumulatedFees(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "FeeCollected(uint256,uint256,uint256,uint256)"(
      tokenId?: null,
      feeCollected?: null,
      subscriptionPoolRemaining?: null,
      liquidationStartedAt?: null
    ): FeeCollectedEventFilter;
    FeeCollected(
      tokenId?: null,
      feeCollected?: null,
      subscriptionPoolRemaining?: null,
      liquidationStartedAt?: null
    ): FeeCollectedEventFilter;

    "Trade(address,address,bool,uint256,uint256,uint256)"(
      trader?: null,
      subject?: null,
      isBuy?: null,
      shareAmount?: null,
      ethAmount?: null,
      supply?: null
    ): TradeEventFilter;
    Trade(
      trader?: null,
      subject?: null,
      isBuy?: null,
      shareAmount?: null,
      ethAmount?: null,
      supply?: null
    ): TradeEventFilter;
  };

  estimateGas: {
    balanceOf(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    buyShares(
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    decreaseSubscriptionPool(
      tokenId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getBuyPrice(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentPrice(overrides?: CallOverrides): Promise<BigNumber>;

    getMinimumSubPool(overrides?: CallOverrides): Promise<BigNumber>;

    getPrice(
      _supply: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSellPrice(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSubscriptionPoolRemaining(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSupply(overrides?: CallOverrides): Promise<BigNumber>;

    increaseSubscriptionPool(
      tokenId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    sellShares(
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    withdrawAccumulatedFees(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buyShares(
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    decreaseSubscriptionPool(
      tokenId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getBuyPrice(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrentPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMinimumSubPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPrice(
      _supply: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSellPrice(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSubscriptionPoolRemaining(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    increaseSubscriptionPool(
      tokenId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    sellShares(
      amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    withdrawAccumulatedFees(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
