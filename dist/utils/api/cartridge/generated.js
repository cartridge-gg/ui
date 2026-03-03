import { useQuery, useMutation } from 'react-query';
import { useFetchData } from './fetcher';
/** Properties by which Account connections can be ordered. */
export var AccountOrderField;
(function (AccountOrderField) {
    AccountOrderField["CreatedAt"] = "CREATED_AT";
})(AccountOrderField || (AccountOrderField = {}));
/** AccountTeamRole is enum for the field role */
export var AccountTeamRole;
(function (AccountTeamRole) {
    AccountTeamRole["Owner"] = "owner";
})(AccountTeamRole || (AccountTeamRole = {}));
/** ActivityFeeSource is enum for the field fee_source */
export var ActivityFeeSource;
(function (ActivityFeeSource) {
    ActivityFeeSource["Account"] = "ACCOUNT";
    ActivityFeeSource["Credits"] = "CREDITS";
    ActivityFeeSource["Paymaster"] = "PAYMASTER";
})(ActivityFeeSource || (ActivityFeeSource = {}));
/** ActivityFeeUnit is enum for the field fee_unit */
export var ActivityFeeUnit;
(function (ActivityFeeUnit) {
    ActivityFeeUnit["Fri"] = "FRI";
    ActivityFeeUnit["Wei"] = "WEI";
})(ActivityFeeUnit || (ActivityFeeUnit = {}));
/** Properties by which Activity connections can be ordered. */
export var ActivityOrderField;
(function (ActivityOrderField) {
    ActivityOrderField["CreatedAt"] = "CREATED_AT";
})(ActivityOrderField || (ActivityOrderField = {}));
/** ActivityStatus is enum for the field status */
export var ActivityStatus;
(function (ActivityStatus) {
    ActivityStatus["Completed"] = "COMPLETED";
    ActivityStatus["Failed"] = "FAILED";
    ActivityStatus["Pending"] = "PENDING";
    ActivityStatus["PendingBacklog"] = "PENDING_BACKLOG";
    ActivityStatus["TimedOut"] = "TIMED_OUT";
})(ActivityStatus || (ActivityStatus = {}));
/** ActivityType is enum for the field type */
export var ActivityType;
(function (ActivityType) {
    ActivityType["SessionCreated"] = "SESSION_CREATED";
    ActivityType["Transaction"] = "TRANSACTION";
})(ActivityType || (ActivityType = {}));
export var AdminBudgetReason;
(function (AdminBudgetReason) {
    AdminBudgetReason["Advance"] = "ADVANCE";
    AdminBudgetReason["Correction"] = "CORRECTION";
    AdminBudgetReason["Promotion"] = "PROMOTION";
    AdminBudgetReason["Refund"] = "REFUND";
    AdminBudgetReason["Settlement"] = "SETTLEMENT";
})(AdminBudgetReason || (AdminBudgetReason = {}));
/** AttestationIssuerType is enum for the field issuer_type */
export var AttestationIssuerType;
(function (AttestationIssuerType) {
    AttestationIssuerType["Oauth"] = "OAUTH";
    AttestationIssuerType["Provider"] = "PROVIDER";
    AttestationIssuerType["SelfSignature"] = "SELF_SIGNATURE";
})(AttestationIssuerType || (AttestationIssuerType = {}));
/** Properties by which Attestation connections can be ordered. */
export var AttestationOrderField;
(function (AttestationOrderField) {
    AttestationOrderField["CreatedAt"] = "CREATED_AT";
    AttestationOrderField["VerifiedAt"] = "VERIFIED_AT";
})(AttestationOrderField || (AttestationOrderField = {}));
/** AttestationType is enum for the field type */
export var AttestationType;
(function (AttestationType) {
    AttestationType["AgeOver_18"] = "AGE_OVER_18";
    AttestationType["Document"] = "DOCUMENT";
    AttestationType["Location"] = "LOCATION";
    AttestationType["OauthIdentity"] = "OAUTH_IDENTITY";
})(AttestationType || (AttestationType = {}));
/** AttestationVisibility is enum for the field visibility */
export var AttestationVisibility;
(function (AttestationVisibility) {
    AttestationVisibility["Private"] = "PRIVATE";
    AttestationVisibility["Public"] = "PUBLIC";
})(AttestationVisibility || (AttestationVisibility = {}));
export var CoinbaseNetwork;
(function (CoinbaseNetwork) {
    CoinbaseNetwork["Arbitrum"] = "ARBITRUM";
    CoinbaseNetwork["Base"] = "BASE";
    CoinbaseNetwork["Ethereum"] = "ETHEREUM";
    CoinbaseNetwork["Optimism"] = "OPTIMISM";
    CoinbaseNetwork["Polygon"] = "POLYGON";
    CoinbaseNetwork["Solana"] = "SOLANA";
})(CoinbaseNetwork || (CoinbaseNetwork = {}));
export var CoinbaseOnrampStatus;
(function (CoinbaseOnrampStatus) {
    CoinbaseOnrampStatus["Completed"] = "COMPLETED";
    CoinbaseOnrampStatus["Failed"] = "FAILED";
    CoinbaseOnrampStatus["PendingAuth"] = "PENDING_AUTH";
    CoinbaseOnrampStatus["PendingPayment"] = "PENDING_PAYMENT";
    CoinbaseOnrampStatus["Processing"] = "PROCESSING";
})(CoinbaseOnrampStatus || (CoinbaseOnrampStatus = {}));
export var CoinbaseTransactionStatus;
(function (CoinbaseTransactionStatus) {
    CoinbaseTransactionStatus["Failed"] = "FAILED";
    CoinbaseTransactionStatus["InProgress"] = "IN_PROGRESS";
    CoinbaseTransactionStatus["Success"] = "SUCCESS";
})(CoinbaseTransactionStatus || (CoinbaseTransactionStatus = {}));
/** Properties by which Controller connections can be ordered. */
export var ControllerOrderField;
(function (ControllerOrderField) {
    ControllerOrderField["CreatedAt"] = "CREATED_AT";
})(ControllerOrderField || (ControllerOrderField = {}));
/** Properties by which CreditsHistory connections can be ordered. */
export var CreditsHistoryOrderField;
(function (CreditsHistoryOrderField) {
    CreditsHistoryOrderField["CreatedAt"] = "CREATED_AT";
})(CreditsHistoryOrderField || (CreditsHistoryOrderField = {}));
/** CreditsHistoryTransactionType is enum for the field transaction_type */
export var CreditsHistoryTransactionType;
(function (CreditsHistoryTransactionType) {
    CreditsHistoryTransactionType["Credit"] = "credit";
    CreditsHistoryTransactionType["Debit"] = "debit";
})(CreditsHistoryTransactionType || (CreditsHistoryTransactionType = {}));
export var CryptoPaymentStatus;
(function (CryptoPaymentStatus) {
    CryptoPaymentStatus["Confirmed"] = "CONFIRMED";
    CryptoPaymentStatus["Expired"] = "EXPIRED";
    CryptoPaymentStatus["Failed"] = "FAILED";
    CryptoPaymentStatus["Pending"] = "PENDING";
})(CryptoPaymentStatus || (CryptoPaymentStatus = {}));
/** DeploymentLogLogType is enum for the field log_type */
export var DeploymentLogLogType;
(function (DeploymentLogLogType) {
    DeploymentLogLogType["Created"] = "created";
    DeploymentLogLogType["Deleted"] = "deleted";
    DeploymentLogLogType["ScaledDown"] = "scaled_down";
    DeploymentLogLogType["ScaledUp"] = "scaled_up";
})(DeploymentLogLogType || (DeploymentLogLogType = {}));
/** Properties by which Deployment connections can be ordered. */
export var DeploymentOrderField;
(function (DeploymentOrderField) {
    DeploymentOrderField["CreatedAt"] = "CREATED_AT";
})(DeploymentOrderField || (DeploymentOrderField = {}));
export var DeploymentService;
(function (DeploymentService) {
    DeploymentService["Katana"] = "katana";
    DeploymentService["Torii"] = "torii";
})(DeploymentService || (DeploymentService = {}));
/** DeploymentStatus is enum for the field status */
export var DeploymentStatus;
(function (DeploymentStatus) {
    DeploymentStatus["Active"] = "active";
    DeploymentStatus["Deleted"] = "deleted";
    DeploymentStatus["Disabled"] = "disabled";
    DeploymentStatus["Error"] = "error";
})(DeploymentStatus || (DeploymentStatus = {}));
/** DeploymentTier is enum for the field tier */
export var DeploymentTier;
(function (DeploymentTier) {
    DeploymentTier["Basic"] = "basic";
    DeploymentTier["Common"] = "common";
    DeploymentTier["Epic"] = "epic";
    DeploymentTier["Insane"] = "insane";
    DeploymentTier["Legendary"] = "legendary";
    DeploymentTier["Pro"] = "pro";
})(DeploymentTier || (DeploymentTier = {}));
/** Properties by which DocumentVersion connections can be ordered. */
export var DocumentVersionOrderField;
(function (DocumentVersionOrderField) {
    DocumentVersionOrderField["CreatedAt"] = "CREATED_AT";
})(DocumentVersionOrderField || (DocumentVersionOrderField = {}));
export var FeeUnit;
(function (FeeUnit) {
    FeeUnit["Credit"] = "CREDIT";
    FeeUnit["Strk"] = "STRK";
})(FeeUnit || (FeeUnit = {}));
/** Properties by which Invoice connections can be ordered. */
export var InvoiceOrderField;
(function (InvoiceOrderField) {
    InvoiceOrderField["CreatedAt"] = "CREATED_AT";
})(InvoiceOrderField || (InvoiceOrderField = {}));
export var LayerswapDestinationNetwork;
(function (LayerswapDestinationNetwork) {
    LayerswapDestinationNetwork["StarknetMainnet"] = "STARKNET_MAINNET";
    LayerswapDestinationNetwork["StarknetSepolia"] = "STARKNET_SEPOLIA";
})(LayerswapDestinationNetwork || (LayerswapDestinationNetwork = {}));
export var LayerswapSourceNetwork;
(function (LayerswapSourceNetwork) {
    LayerswapSourceNetwork["ArbitrumMainnet"] = "ARBITRUM_MAINNET";
    LayerswapSourceNetwork["ArbitrumSepolia"] = "ARBITRUM_SEPOLIA";
    LayerswapSourceNetwork["BaseMainnet"] = "BASE_MAINNET";
    LayerswapSourceNetwork["BaseSepolia"] = "BASE_SEPOLIA";
    LayerswapSourceNetwork["EthereumMainnet"] = "ETHEREUM_MAINNET";
    LayerswapSourceNetwork["EthereumSepolia"] = "ETHEREUM_SEPOLIA";
    LayerswapSourceNetwork["OptimismMainnet"] = "OPTIMISM_MAINNET";
    LayerswapSourceNetwork["OptimismSepolia"] = "OPTIMISM_SEPOLIA";
    LayerswapSourceNetwork["SolanaDevnet"] = "SOLANA_DEVNET";
    LayerswapSourceNetwork["SolanaMainnet"] = "SOLANA_MAINNET";
})(LayerswapSourceNetwork || (LayerswapSourceNetwork = {}));
export var LayerswapStatus;
(function (LayerswapStatus) {
    LayerswapStatus["Confirmed"] = "CONFIRMED";
    LayerswapStatus["Expired"] = "EXPIRED";
    LayerswapStatus["Failed"] = "FAILED";
    LayerswapStatus["Pending"] = "PENDING";
    LayerswapStatus["PendingLsTransfer"] = "PENDING_LS_TRANSFER";
    LayerswapStatus["PendingUserTransfer"] = "PENDING_USER_TRANSFER";
})(LayerswapStatus || (LayerswapStatus = {}));
/** Properties by which Lock connections can be ordered. */
export var LockOrderField;
(function (LockOrderField) {
    LockOrderField["CreatedAt"] = "CREATED_AT";
})(LockOrderField || (LockOrderField = {}));
/** Properties by which MerkleClaim connections can be ordered. */
export var MerkleClaimOrderField;
(function (MerkleClaimOrderField) {
    MerkleClaimOrderField["CreatedAt"] = "CREATED_AT";
})(MerkleClaimOrderField || (MerkleClaimOrderField = {}));
/** MerkleDropNetwork is enum for the field network */
export var MerkleDropNetwork;
(function (MerkleDropNetwork) {
    MerkleDropNetwork["Arbitrum"] = "ARBITRUM";
    MerkleDropNetwork["Base"] = "BASE";
    MerkleDropNetwork["Ethereum"] = "ETHEREUM";
    MerkleDropNetwork["Optimism"] = "OPTIMISM";
    MerkleDropNetwork["Polygon"] = "POLYGON";
    MerkleDropNetwork["Starknet"] = "STARKNET";
})(MerkleDropNetwork || (MerkleDropNetwork = {}));
/** Properties by which MerkleDrop connections can be ordered. */
export var MerkleDropOrderField;
(function (MerkleDropOrderField) {
    MerkleDropOrderField["CreatedAt"] = "CREATED_AT";
})(MerkleDropOrderField || (MerkleDropOrderField = {}));
export var Network;
(function (Network) {
    Network["Solana"] = "SOLANA";
    Network["Starknet"] = "STARKNET";
})(Network || (Network = {}));
/** Properties by which OAuthConnection connections can be ordered. */
export var OAuthConnectionOrderField;
(function (OAuthConnectionOrderField) {
    OAuthConnectionOrderField["CreatedAt"] = "CREATED_AT";
})(OAuthConnectionOrderField || (OAuthConnectionOrderField = {}));
/** OAuthConnectionProvider is enum for the field provider */
export var OAuthConnectionProvider;
(function (OAuthConnectionProvider) {
    OAuthConnectionProvider["Instagram"] = "INSTAGRAM";
    OAuthConnectionProvider["Tiktok"] = "TIKTOK";
    OAuthConnectionProvider["Twitter"] = "TWITTER";
})(OAuthConnectionProvider || (OAuthConnectionProvider = {}));
export var OAuthProvider;
(function (OAuthProvider) {
    OAuthProvider["Instagram"] = "INSTAGRAM";
    OAuthProvider["Tiktok"] = "TIKTOK";
    OAuthProvider["Twitter"] = "TWITTER";
})(OAuthProvider || (OAuthProvider = {}));
export var Order;
(function (Order) {
    Order["Asc"] = "asc";
    Order["Desc"] = "desc";
})(Order || (Order = {}));
/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
export var OrderDirection;
(function (OrderDirection) {
    /** Specifies an ascending order for a given `orderBy` argument. */
    OrderDirection["Asc"] = "ASC";
    /** Specifies a descending order for a given `orderBy` argument. */
    OrderDirection["Desc"] = "DESC";
})(OrderDirection || (OrderDirection = {}));
/** PaymasterBudgetFeeUnit is enum for the field budget_fee_unit */
export var PaymasterBudgetFeeUnit;
(function (PaymasterBudgetFeeUnit) {
    PaymasterBudgetFeeUnit["Credit"] = "CREDIT";
    PaymasterBudgetFeeUnit["Strk"] = "STRK";
})(PaymasterBudgetFeeUnit || (PaymasterBudgetFeeUnit = {}));
/** Properties by which Paymaster connections can be ordered. */
export var PaymasterOrderField;
(function (PaymasterOrderField) {
    PaymasterOrderField["CreatedAt"] = "CREATED_AT";
})(PaymasterOrderField || (PaymasterOrderField = {}));
/** Properties by which PaymasterOutbox connections can be ordered. */
export var PaymasterOutboxOrderField;
(function (PaymasterOutboxOrderField) {
    PaymasterOutboxOrderField["CreatedAt"] = "CREATED_AT";
})(PaymasterOutboxOrderField || (PaymasterOutboxOrderField = {}));
/** PaymasterOutboxStatus is enum for the field status */
export var PaymasterOutboxStatus;
(function (PaymasterOutboxStatus) {
    PaymasterOutboxStatus["New"] = "NEW";
    PaymasterOutboxStatus["Processing"] = "PROCESSING";
})(PaymasterOutboxStatus || (PaymasterOutboxStatus = {}));
/** PaymasterOutboxTransactionStatus is enum for the field transaction_status */
export var PaymasterOutboxTransactionStatus;
(function (PaymasterOutboxTransactionStatus) {
    PaymasterOutboxTransactionStatus["Reverted"] = "REVERTED";
    PaymasterOutboxTransactionStatus["Success"] = "SUCCESS";
})(PaymasterOutboxTransactionStatus || (PaymasterOutboxTransactionStatus = {}));
/** Properties by which PaymasterPolicy connections can be ordered. */
export var PaymasterPolicyOrderField;
(function (PaymasterPolicyOrderField) {
    PaymasterPolicyOrderField["CreatedAt"] = "CREATED_AT";
})(PaymasterPolicyOrderField || (PaymasterPolicyOrderField = {}));
export var PaymasterTransactionFilter;
(function (PaymasterTransactionFilter) {
    PaymasterTransactionFilter["All"] = "ALL";
    PaymasterTransactionFilter["Reverted"] = "REVERTED";
    PaymasterTransactionFilter["Success"] = "SUCCESS";
})(PaymasterTransactionFilter || (PaymasterTransactionFilter = {}));
export var PaymasterTransactionOrder;
(function (PaymasterTransactionOrder) {
    PaymasterTransactionOrder["ExecutedAtAsc"] = "EXECUTED_AT_ASC";
    PaymasterTransactionOrder["ExecutedAtDesc"] = "EXECUTED_AT_DESC";
    PaymasterTransactionOrder["FeesAsc"] = "FEES_ASC";
    PaymasterTransactionOrder["FeesDesc"] = "FEES_DESC";
})(PaymasterTransactionOrder || (PaymasterTransactionOrder = {}));
export var PurchaseType;
(function (PurchaseType) {
    PurchaseType["Credits"] = "CREDITS";
    /** @deprecated Starterpack purchases are now handled client-side */
    PurchaseType["Starterpack"] = "STARTERPACK";
})(PurchaseType || (PurchaseType = {}));
/** RPCLogNetwork is enum for the field network */
export var RpcLogNetwork;
(function (RpcLogNetwork) {
    RpcLogNetwork["Mainnet"] = "mainnet";
    RpcLogNetwork["Sepolia"] = "sepolia";
})(RpcLogNetwork || (RpcLogNetwork = {}));
export var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
})(Role || (Role = {}));
/** Properties by which Service connections can be ordered. */
export var ServiceOrderField;
(function (ServiceOrderField) {
    ServiceOrderField["CreatedAt"] = "CREATED_AT";
})(ServiceOrderField || (ServiceOrderField = {}));
/** Properties by which Session connections can be ordered. */
export var SessionOrderField;
(function (SessionOrderField) {
    SessionOrderField["CreatedAt"] = "CREATED_AT";
})(SessionOrderField || (SessionOrderField = {}));
/** Properties by which Signer connections can be ordered. */
export var SignerOrderField;
(function (SignerOrderField) {
    SignerOrderField["CreatedAt"] = "CREATED_AT";
})(SignerOrderField || (SignerOrderField = {}));
/** SignerType is enum for the field type */
export var SignerType;
(function (SignerType) {
    SignerType["Eip191"] = "eip191";
    SignerType["Password"] = "password";
    SignerType["Secp256k1"] = "secp256k1";
    SignerType["Secp256r1"] = "secp256r1";
    SignerType["Siws"] = "siws";
    SignerType["Starknet"] = "starknet";
    SignerType["StarknetAccount"] = "starknet_account";
    SignerType["Webauthn"] = "webauthn";
})(SignerType || (SignerType = {}));
/** StarterpackAcquisitionType is enum for the field acquisition_type */
export var StarterpackAcquisitionType;
(function (StarterpackAcquisitionType) {
    StarterpackAcquisitionType["Claimed"] = "CLAIMED";
    StarterpackAcquisitionType["Paid"] = "PAID";
})(StarterpackAcquisitionType || (StarterpackAcquisitionType = {}));
/** Properties by which StarterpackContract connections can be ordered. */
export var StarterpackContractOrderField;
(function (StarterpackContractOrderField) {
    StarterpackContractOrderField["CreatedAt"] = "CREATED_AT";
})(StarterpackContractOrderField || (StarterpackContractOrderField = {}));
/** Properties by which StarterpackMint connections can be ordered. */
export var StarterpackMintOrderField;
(function (StarterpackMintOrderField) {
    StarterpackMintOrderField["CreatedAt"] = "CREATED_AT";
})(StarterpackMintOrderField || (StarterpackMintOrderField = {}));
/** Properties by which Starterpack connections can be ordered. */
export var StarterpackOrderField;
(function (StarterpackOrderField) {
    StarterpackOrderField["CreatedAt"] = "CREATED_AT";
})(StarterpackOrderField || (StarterpackOrderField = {}));
export var StripePaymentStatus;
(function (StripePaymentStatus) {
    StripePaymentStatus["Failed"] = "FAILED";
    StripePaymentStatus["Pending"] = "PENDING";
    StripePaymentStatus["Succeeded"] = "SUCCEEDED";
})(StripePaymentStatus || (StripePaymentStatus = {}));
/** Properties by which TeamCreditsHistory connections can be ordered. */
export var TeamCreditsHistoryOrderField;
(function (TeamCreditsHistoryOrderField) {
    TeamCreditsHistoryOrderField["CreatedAt"] = "CREATED_AT";
})(TeamCreditsHistoryOrderField || (TeamCreditsHistoryOrderField = {}));
/** TeamCreditsHistoryTransactionType is enum for the field transaction_type */
export var TeamCreditsHistoryTransactionType;
(function (TeamCreditsHistoryTransactionType) {
    TeamCreditsHistoryTransactionType["Credit"] = "credit";
    TeamCreditsHistoryTransactionType["Debit"] = "debit";
})(TeamCreditsHistoryTransactionType || (TeamCreditsHistoryTransactionType = {}));
/** TeamIncubatorStage is enum for the field incubator_stage */
export var TeamIncubatorStage;
(function (TeamIncubatorStage) {
    TeamIncubatorStage["Cartridge"] = "cartridge";
    TeamIncubatorStage["Kohai"] = "kohai";
    TeamIncubatorStage["Senpai"] = "senpai";
    TeamIncubatorStage["Sensei"] = "sensei";
})(TeamIncubatorStage || (TeamIncubatorStage = {}));
export var TokenPair;
(function (TokenPair) {
    TokenPair["EthUsdc"] = "ETH_USDC";
    TokenPair["LordsUsdc"] = "LORDS_USDC";
    TokenPair["StrkUsdc"] = "STRK_USDC";
})(TokenPair || (TokenPair = {}));
export const CryptoPaymentFieldsFragmentDoc = `
    fragment CryptoPaymentFields on CryptoPayment {
  id
  tokenAmount
  status
  network
  tokenAddress
  depositAddress
  expiresAt
}
    `;
export const CoinbaseOnrampOrderFieldsFragmentDoc = `
    fragment CoinbaseOnrampOrderFields on CoinbaseOnrampOrder {
  orderId
  paymentLink
  paymentLinkType
  paymentTotal
  paymentCurrency
  purchaseAmount
  purchaseCurrency
  destinationAddress
  destinationNetwork
  fees {
    type
    amount
    currency
  }
}
    `;
export const LayerswapPaymentFieldsFragmentDoc = `
    fragment LayerswapPaymentFields on LayerswapPayment {
  cryptoPaymentId
  swapId
  status
  sourceNetwork
  sourceTokenAmount
  sourceTokenAddress
  sourceDepositAddress
  expiresAt
}
    `;
export const CoinbaseOnrampOrderResponseFieldsFragmentDoc = `
    fragment CoinbaseOnrampOrderResponseFields on CoinbaseOnrampOrderResponse {
  coinbaseOrder {
    ...CoinbaseOnrampOrderFields
  }
  layerswapPayment {
    ...LayerswapPaymentFields
  }
}
    ${CoinbaseOnrampOrderFieldsFragmentDoc}
${LayerswapPaymentFieldsFragmentDoc}`;
export const AccountDocument = `
    query Account($username: String!) {
  account(username: $username) {
    username
    credentials {
      webauthn {
        id
        publicKey
      }
    }
    controllers {
      edges {
        node {
          address
          constructorCalldata
          signers {
            type
          }
        }
      }
    }
  }
}
    `;
export const useAccountQuery = (variables, options) => useQuery(['Account', variables], useFetchData(AccountDocument).bind(null, variables), options);
export const CreditDocument = `
    query Credit($username: String!) {
  account(username: $username) {
    credits {
      amount
      decimals
    }
  }
}
    `;
export const useCreditQuery = (variables, options) => useQuery(['Credit', variables], useFetchData(CreditDocument).bind(null, variables), options);
export const AccountNameDocument = `
    query AccountName($address: String!) {
  accounts(where: {hasControllersWith: {address: $address}}, first: 1) {
    edges {
      node {
        username
      }
    }
  }
}
    `;
export const useAccountNameQuery = (variables, options) => useQuery(['AccountName', variables], useFetchData(AccountNameDocument).bind(null, variables), options);
export const AccountNamesDocument = `
    query AccountNames($addresses: [String!]!) {
  accounts(where: {hasControllersWith: {addressIn: $addresses}}) {
    edges {
      node {
        username
        controllers {
          edges {
            node {
              address
            }
          }
        }
      }
    }
  }
}
    `;
export const useAccountNamesQuery = (variables, options) => useQuery(['AccountNames', variables], useFetchData(AccountNamesDocument).bind(null, variables), options);
export const AddressByUsernameDocument = `
    query AddressByUsername($username: String!) {
  account(username: $username) {
    controllers(first: 1) {
      edges {
        node {
          address
        }
      }
    }
  }
}
    `;
export const useAddressByUsernameQuery = (variables, options) => useQuery(['AddressByUsername', variables], useFetchData(AddressByUsernameDocument).bind(null, variables), options);
export const AccountSearchDocument = `
    query AccountSearch($query: String!, $limit: Int = 5) {
  searchAccounts(query: $query, limit: $limit) {
    username
    credits {
      amount
      decimals
    }
    updatedAt
  }
}
    `;
export const useAccountSearchQuery = (variables, options) => useQuery(['AccountSearch', variables], useFetchData(AccountSearchDocument).bind(null, variables), options);
export const AchievementsDocument = `
    query Achievements($projects: [Project!]!) {
  achievements(projects: $projects) {
    items {
      meta {
        project
        model
        namespace
        count
      }
      achievements {
        id
        hidden
        page
        points
        start
        end
        achievementGroup
        icon
        title
        description
        taskId
        taskTotal
        taskDescription
        data
      }
    }
  }
}
    `;
export const useAchievementsQuery = (variables, options) => useQuery(['Achievements', variables], useFetchData(AchievementsDocument).bind(null, variables), options);
export const ProgressionsDocument = `
    query Progressions($projects: [Project!]!) {
  playerAchievements(projects: $projects) {
    items {
      meta {
        project
        model
        namespace
        count
      }
      achievements {
        playerId
        achievementId
        points
        taskId
        taskTotal
        total
        completionTime
      }
    }
  }
}
    `;
export const useProgressionsQuery = (variables, options) => useQuery(['Progressions', variables], useFetchData(ProgressionsDocument).bind(null, variables), options);
export const ActivitiesDocument = `
    query Activities($projects: [ActivityProject!]!) {
  activities(projects: $projects) {
    items {
      meta {
        project
        address
        limit
        count
      }
      activities {
        contractAddress
        entrypoint
        executedAt
        callerAddress
        transactionHash
      }
    }
  }
}
    `;
export const useActivitiesQuery = (variables, options) => useQuery(['Activities', variables], useFetchData(ActivitiesDocument).bind(null, variables), options);
export const BalancesDocument = `
    query Balances($projects: [String!], $accountAddress: String!, $first: Int, $last: Int, $before: Cursor, $after: Cursor, $offset: Int, $limit: Int) {
  balances(
    projects: $projects
    accountAddress: $accountAddress
    first: $first
    last: $last
    before: $before
    after: $after
    offset: $offset
    limit: $limit
  ) {
    totalCount
    edges {
      node {
        raw
        amount
        value
        meta {
          project
          decimals
          contractAddress
          name
          symbol
          price
          periodPrice
        }
      }
    }
  }
}
    `;
export const useBalancesQuery = (variables, options) => useQuery(['Balances', variables], useFetchData(BalancesDocument).bind(null, variables), options);
export const BalanceDocument = `
    query Balance($projects: [String!]!, $tokenAddress: String!, $accountAddress: String!) {
  balance(
    projects: $projects
    tokenAddress: $tokenAddress
    accountAddress: $accountAddress
  ) {
    raw
    amount
    value
    meta {
      project
      decimals
      contractAddress
      name
      symbol
      price
      periodPrice
    }
  }
}
    `;
export const useBalanceQuery = (variables, options) => useQuery(['Balance', variables], useFetchData(BalanceDocument).bind(null, variables), options);
export const CollectiblesDocument = `
    query Collectibles($projects: [String!], $accountAddress: String!, $first: Int, $last: Int, $before: Cursor, $after: Cursor, $offset: Int, $limit: Int) {
  collectibles(
    projects: $projects
    accountAddress: $accountAddress
    first: $first
    last: $last
    before: $before
    after: $after
    offset: $offset
    limit: $limit
  ) {
    edges {
      node {
        assets {
          attributes
          description
          imageUrl
          name
          tokenId
          amount
          metadata
        }
        meta {
          project
          assetCount
          contractAddress
          imagePath
          name
        }
      }
    }
  }
}
    `;
export const useCollectiblesQuery = (variables, options) => useQuery(['Collectibles', variables], useFetchData(CollectiblesDocument).bind(null, variables), options);
export const CollectibleDocument = `
    query Collectible($projects: [String!]!, $contractAddress: String!, $accountAddress: String!) {
  collectible(
    projects: $projects
    contractAddress: $contractAddress
    accountAddress: $accountAddress
  ) {
    assets {
      attributes
      description
      imageUrl
      name
      tokenId
      amount
      metadata
    }
    meta {
      assetCount
      contractAddress
      imagePath
      name
    }
  }
}
    `;
export const useCollectibleQuery = (variables, options) => useQuery(['Collectible', variables], useFetchData(CollectibleDocument).bind(null, variables), options);
export const CollectionsDocument = `
    query Collections($projects: [String!], $accountAddress: String!, $first: Int, $last: Int, $before: Cursor, $after: Cursor, $offset: Int, $limit: Int) {
  collections(
    projects: $projects
    accountAddress: $accountAddress
    first: $first
    last: $last
    before: $before
    after: $after
    offset: $offset
    limit: $limit
  ) {
    edges {
      node {
        assets {
          attributes
          description
          imageUrl
          name
          tokenId
          metadata
        }
        meta {
          project
          assetCount
          contractAddress
          imagePath
          name
        }
      }
    }
  }
}
    `;
export const useCollectionsQuery = (variables, options) => useQuery(['Collections', variables], useFetchData(CollectionsDocument).bind(null, variables), options);
export const CollectionDocument = `
    query Collection($projects: [String!]!, $contractAddress: String!, $accountAddress: String!) {
  collection(
    projects: $projects
    contractAddress: $contractAddress
    accountAddress: $accountAddress
  ) {
    assets {
      attributes
      description
      imageUrl
      name
      tokenId
      metadata
    }
    meta {
      assetCount
      contractAddress
      imagePath
      name
    }
  }
}
    `;
export const useCollectionQuery = (variables, options) => useQuery(['Collection', variables], useFetchData(CollectionDocument).bind(null, variables), options);
export const ControllerDocument = `
    query Controller($username: String!, $chainId: String!) {
  controller(username: $username, chainId: $chainId) {
    id
    accountID
    address
    network
    constructorCalldata
    createdAt
    updatedAt
    signers {
      createdAt
      isRevoked
      isOriginal
      metadata {
        ... on WebauthnCredentials {
          __typename
          webauthn {
            id
            publicKey
            AAGUID
          }
        }
        ... on StarknetCredentials {
          __typename
          starknet {
            publicKey
          }
        }
        ... on Eip191Credentials {
          __typename
          eip191 {
            provider
            ethAddress
          }
        }
        ... on SIWSCredentials {
          __typename
          siws {
            publicKey
          }
        }
        ... on PasswordCredentials {
          __typename
          password {
            publicKey
            encryptedPrivateKey
          }
        }
      }
    }
  }
}
    `;
export const useControllerQuery = (variables, options) => useQuery(['Controller', variables], useFetchData(ControllerDocument).bind(null, variables), options);
export const BeginRegistrationDocument = `
    mutation BeginRegistration($username: String!) {
  beginRegistration(username: $username)
}
    `;
export const useBeginRegistrationMutation = (options) => useMutation(['BeginRegistration'], useFetchData(BeginRegistrationDocument), options);
export const FinalizeRegistrationDocument = `
    mutation FinalizeRegistration($credentials: String!, $network: String!) {
  finalizeRegistration(credentials: $credentials, network: $network) {
    username
    controllers {
      edges {
        node {
          address
          constructorCalldata
          signers {
            type
          }
        }
      }
    }
    credentials {
      webauthn {
        id
        publicKey
      }
    }
  }
}
    `;
export const useFinalizeRegistrationMutation = (options) => useMutation(['FinalizeRegistration'], useFetchData(FinalizeRegistrationDocument), options);
export const BeginLoginDocument = `
    mutation BeginLogin($username: String!) {
  beginLogin(username: $username)
}
    `;
export const useBeginLoginMutation = (options) => useMutation(['BeginLogin'], useFetchData(BeginLoginDocument), options);
export const FinalizeLoginDocument = `
    mutation FinalizeLogin($credentials: String!) {
  finalizeLogin(credentials: $credentials)
}
    `;
export const useFinalizeLoginMutation = (options) => useMutation(['FinalizeLogin'], useFetchData(FinalizeLoginDocument), options);
export const MeDocument = `
    query Me {
  me {
    id
    email
    phoneNumber
    phoneNumberVerifiedAt
  }
}
    `;
export const useMeQuery = (variables, options) => useQuery(variables === undefined ? ['Me'] : ['Me', variables], useFetchData(MeDocument).bind(null, variables), options);
export const MerkleDropByKeyDocument = `
    query MerkleDropByKey($key: String!) {
  merkleDropByKey(key: $key) {
    key
    salt
    network
    contract
    entrypoint
    merkleRoot
    description
    matchStarterpackItem
  }
}
    `;
export const useMerkleDropByKeyQuery = (variables, options) => useQuery(['MerkleDropByKey', variables], useFetchData(MerkleDropByKeyDocument).bind(null, variables), options);
export const MerkleClaimsForAddressDocument = `
    query MerkleClaimsForAddress($keys: [String!]!, $address: String!) {
  merkleClaimsForAddress(keys: $keys, address: $address) {
    index
    data
    merkleProof
    merkleDrop {
      key
      salt
      network
      contract
      entrypoint
      merkleRoot
      description
      matchStarterpackItem
    }
  }
}
    `;
export const useMerkleClaimsForAddressQuery = (variables, options) => useQuery(['MerkleClaimsForAddress', variables], useFetchData(MerkleClaimsForAddressDocument).bind(null, variables), options);
export const MetricsDocument = `
    query Metrics($projects: [MetricsProject!]!) {
  metrics(projects: $projects) {
    items {
      meta {
        project
        error
        count
      }
      metrics {
        transactionDate
        transactionCount
        callerCount
      }
    }
  }
}
    `;
export const useMetricsQuery = (variables, options) => useQuery(['Metrics', variables], useFetchData(MetricsDocument).bind(null, variables), options);
export const OwnershipsDocument = `
    query Ownerships($projects: [OwnershipProject!]!) {
  ownerships(projects: $projects) {
    items {
      ownerships {
        accountAddress
        contractAddress
        tokenId
        balance
      }
      meta {
        project
        tokenIds
        contractAddresses
        limit
        error
        count
      }
    }
  }
}
    `;
export const useOwnershipsQuery = (variables, options) => useQuery(['Ownerships', variables], useFetchData(OwnershipsDocument).bind(null, variables), options);
export const CryptoPaymentDocument = `
    query CryptoPayment($id: ID!) {
  cryptoPayment(id: $id) {
    ...CryptoPaymentFields
  }
}
    ${CryptoPaymentFieldsFragmentDoc}`;
export const useCryptoPaymentQuery = (variables, options) => useQuery(['CryptoPayment', variables], useFetchData(CryptoPaymentDocument).bind(null, variables), options);
export const StripePaymentDocument = `
    query StripePayment($id: ID!) {
  stripePayment(id: $id) {
    id
    paymentStatus
  }
}
    `;
export const useStripePaymentQuery = (variables, options) => useQuery(['StripePayment', variables], useFetchData(StripePaymentDocument).bind(null, variables), options);
export const LayerswapSourcesDocument = `
    query LayerswapSources($token: String!, $isMainnet: Boolean) {
  layerswapSources(token: $token, isMainnet: $isMainnet) {
    name
    displayName
    logo
    chainId
    type
    tokens {
      symbol
      displayAsset
      decimals
      priceInUsd
      status
    }
    depositMethods
  }
}
    `;
export const useLayerswapSourcesQuery = (variables, options) => useQuery(['LayerswapSources', variables], useFetchData(LayerswapSourcesDocument).bind(null, variables), options);
export const CreateCryptoPaymentDocument = `
    mutation CreateCryptoPayment($input: CreateCryptoPaymentInput!) {
  createCryptoPayment(input: $input) {
    ...CryptoPaymentFields
  }
}
    ${CryptoPaymentFieldsFragmentDoc}`;
export const useCreateCryptoPaymentMutation = (options) => useMutation(['CreateCryptoPayment'], useFetchData(CreateCryptoPaymentDocument), options);
export const CreateStripePaymentIntentDocument = `
    mutation CreateStripePaymentIntent($input: CreateStripePaymentIntentInput!) {
  createStripePaymentIntent(input: $input) {
    id
    clientSecret
    pricing {
      baseCostInCents
      processingFeeInCents
      totalInCents
    }
  }
}
    `;
export const useCreateStripePaymentIntentMutation = (options) => useMutation(['CreateStripePaymentIntent'], useFetchData(CreateStripePaymentIntentDocument), options);
export const CreateLayerswapPaymentDocument = `
    mutation CreateLayerswapPayment($input: CreateLayerswapPaymentInput!) {
  createLayerswapPayment(input: $input) {
    ...LayerswapPaymentFields
  }
}
    ${LayerswapPaymentFieldsFragmentDoc}`;
export const useCreateLayerswapPaymentMutation = (options) => useMutation(['CreateLayerswapPayment'], useFetchData(CreateLayerswapPaymentDocument), options);
export const CreateLayerswapDepositDocument = `
    mutation CreateLayerswapDeposit($input: CreateLayerswapDepositInput!) {
  createLayerswapDeposit(input: $input) {
    ...LayerswapPaymentFields
  }
}
    ${LayerswapPaymentFieldsFragmentDoc}`;
export const useCreateLayerswapDepositMutation = (options) => useMutation(['CreateLayerswapDeposit'], useFetchData(CreateLayerswapDepositDocument), options);
export const LayerswapQuoteDocument = `
    query LayerswapQuote($input: CreateLayerswapDepositInput!) {
  layerswapQuote(input: $input) {
    requestedAmount
    receivedAmount
    totalFees
    averageCompletionTime
  }
}
    `;
export const useLayerswapQuoteQuery = (variables, options) => useQuery(['LayerswapQuote', variables], useFetchData(LayerswapQuoteDocument).bind(null, variables), options);
export const LayerswapStatusDocument = `
    query LayerswapStatus($swapId: ID!, $isMainnet: Boolean) {
  layerswapStatus(swapId: $swapId, isMainnet: $isMainnet)
}
    `;
export const useLayerswapStatusQuery = (variables, options) => useQuery(['LayerswapStatus', variables], useFetchData(LayerswapStatusDocument).bind(null, variables), options);
export const CoinbaseOnrampTransactionsDocument = `
    query CoinbaseOnrampTransactions($input: CoinbaseTransactionsInput!) {
  coinbaseOnrampTransactions(input: $input) {
    transactions {
      transactionId
      walletAddress
      type
      txHash
      status
      purchaseCurrency
      purchaseNetwork
      purchaseAmount {
        amount
        currency
      }
      paymentTotal {
        amount
        currency
      }
      coinbaseFee {
        amount
        currency
      }
      networkFee {
        amount
        currency
      }
    }
    nextPageKey
    totalCount
  }
}
    `;
export const useCoinbaseOnrampTransactionsQuery = (variables, options) => useQuery(['CoinbaseOnrampTransactions', variables], useFetchData(CoinbaseOnrampTransactionsDocument).bind(null, variables), options);
export const CreateCoinbaseOnRampOrderDocument = `
    mutation CreateCoinbaseOnRampOrder($input: CreateCoinbaseOnrampOrderInput!) {
  createCoinbaseOnrampOrder(input: $input) {
    ...CoinbaseOnrampOrderResponseFields
  }
}
    ${CoinbaseOnrampOrderResponseFieldsFragmentDoc}`;
export const useCreateCoinbaseOnRampOrderMutation = (options) => useMutation(['CreateCoinbaseOnRampOrder'], useFetchData(CreateCoinbaseOnRampOrderDocument), options);
export const CreateCoinbaseLayerswapOrderDocument = `
    mutation CreateCoinbaseLayerswapOrder($input: CreateCoinbaseLayerswapOrderInput!) {
  createCoinbaseLayerswapOrder(input: $input) {
    ...CoinbaseOnrampOrderResponseFields
  }
}
    ${CoinbaseOnrampOrderResponseFieldsFragmentDoc}`;
export const useCreateCoinbaseLayerswapOrderMutation = (options) => useMutation(['CreateCoinbaseLayerswapOrder'], useFetchData(CreateCoinbaseLayerswapOrderDocument), options);
export const CoinbaseOnRampOrderDocument = `
    query CoinbaseOnRampOrder($orderId: String!) {
  coinbaseOnrampOrder(orderId: $orderId) {
    txHash
    status
  }
}
    `;
export const useCoinbaseOnRampOrderQuery = (variables, options) => useQuery(['CoinbaseOnRampOrder', variables], useFetchData(CoinbaseOnRampOrderDocument).bind(null, variables), options);
export const CoinbaseOnRampQuoteDocument = `
    query CoinbaseOnRampQuote($input: CoinbaseOnrampQuoteInput!) {
  coinbaseOnrampQuote(input: $input) {
    quoteId
    paymentTotal {
      amount
      currency
    }
    purchaseAmount {
      amount
      currency
    }
    layerswapFees {
      amount
      currency
    }
    coinbaseFee {
      amount
      currency
    }
    networkFee {
      amount
      currency
    }
  }
}
    `;
export const useCoinbaseOnRampQuoteQuery = (variables, options) => useQuery(['CoinbaseOnRampQuote', variables], useFetchData(CoinbaseOnRampQuoteDocument).bind(null, variables), options);
export const PlaythroughsDocument = `
    query Playthroughs($projects: [PlaythroughProject!]!) {
  playthroughs(projects: $projects) {
    items {
      playthroughs {
        entrypoints
        sessionStart
        sessionEnd
        actionCount
        callerAddress
      }
      meta {
        project
        limit
        error
        count
      }
    }
  }
}
    `;
export const usePlaythroughsQuery = (variables, options) => useQuery(['Playthroughs', variables], useFetchData(PlaythroughsDocument).bind(null, variables), options);
export const PriceDocument = `
    query Price($pairs: [TokenPair!]!) {
  price(pairs: $pairs) {
    amount
    base
    decimals
    quote
  }
}
    `;
export const usePriceQuery = (variables, options) => useQuery(['Price', variables], useFetchData(PriceDocument).bind(null, variables), options);
export const PriceByAddressesDocument = `
    query PriceByAddresses($addresses: [String!]!) {
  priceByAddresses(addresses: $addresses) {
    amount
    base
    decimals
    quote
  }
}
    `;
export const usePriceByAddressesQuery = (variables, options) => useQuery(['PriceByAddresses', variables], useFetchData(PriceByAddressesDocument).bind(null, variables), options);
export const PricePeriodByAddressesDocument = `
    query PricePeriodByAddresses($addresses: [String!]!, $start: Int!, $end: Int!) {
  pricePeriodByAddresses(addresses: $addresses, start: $start, end: $end) {
    amount
    base
    decimals
    quote
  }
}
    `;
export const usePricePeriodByAddressesQuery = (variables, options) => useQuery(['PricePeriodByAddresses', variables], useFetchData(PricePeriodByAddressesDocument).bind(null, variables), options);
export const SessionsDocument = `
    query Sessions($where: SessionWhereInput!) {
  sessions(where: $where) {
    edges {
      node {
        id
        appID
        chainID
        isRevoked
        expiresAt
        createdAt
        updatedAt
        metadata {
          os
          browser
        }
      }
    }
  }
}
    `;
export const useSessionsQuery = (variables, options) => useQuery(['Sessions', variables], useFetchData(SessionsDocument).bind(null, variables), options);
export const SignerDocument = `
    query Signer($username: String!) {
  account(username: $username) {
    username
    controllers {
      edges {
        node {
          signers {
            id
            type
            createdAt
            updatedAt
            controller {
              id
              accountID
            }
          }
        }
      }
    }
  }
}
    `;
export const useSignerQuery = (variables, options) => useQuery(['Signer', variables], useFetchData(SignerDocument).bind(null, variables), options);
export const ClaimFreeStarterpackDocument = `
    mutation ClaimFreeStarterpack($input: StarterpackInput!) {
  claimFreeStarterpack(input: $input)
}
    `;
export const useClaimFreeStarterpackMutation = (options) => useMutation(['ClaimFreeStarterpack'], useFetchData(ClaimFreeStarterpackDocument), options);
export const StarterPackDocument = `
    query StarterPack($input: StarterpackInput!) {
  starterpack(input: $input) {
    starterpack {
      name
      description
      active
      issuance
      maxIssuance
      acquisitionType
      starterpackContract {
        edges {
          node {
            name
            description
            iconURL
            contractAddress
            supplyEntryPoint
            supplyCalldata
          }
        }
      }
      merkleDrops {
        edges {
          node {
            key
            salt
            network
            contract
            entrypoint
            merkleRoot
            description
          }
        }
      }
    }
    price {
      amount
      decimals
    }
    bonusCredits {
      amount
      decimals
    }
    mintAllowance {
      count
      limit
    }
  }
}
    `;
export const useStarterPackQuery = (variables, options) => useQuery(['StarterPack', variables], useFetchData(StarterPackDocument).bind(null, variables), options);
export const TeamsDocument = `
    query Teams {
  me {
    teams(where: {deleted: false}) {
      totalCount
      edges {
        node {
          id
          name
          credits
          deployments(where: {deprecated: false}) {
            totalCount
            edges {
              node {
                project
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const useTeamsQuery = (variables, options) => useQuery(variables === undefined ? ['Teams'] : ['Teams', variables], useFetchData(TeamsDocument).bind(null, variables), options);
export const TraceabilitiesDocument = `
    query Traceabilities($projects: [TraceabilityProject!]!) {
  traceabilities(projects: $projects) {
    items {
      transfers {
        amount
        contractAddress
        decimals
        eventId
        executedAt
        fromAddress
        toAddress
        metadata
        name
        symbol
        tokenId
        transactionHash
      }
      meta {
        project
        tokenId
        contractAddress
        date
        limit
        error
        count
      }
    }
  }
}
    `;
export const useTraceabilitiesQuery = (variables, options) => useQuery(['Traceabilities', variables], useFetchData(TraceabilitiesDocument).bind(null, variables), options);
export const TransfersDocument = `
    query Transfers($projects: [TransferProject!]!) {
  transfers(projects: $projects) {
    items {
      meta {
        project
        address
        date
        limit
        count
      }
      transfers {
        amount
        decimals
        metadata
        name
        symbol
        contractAddress
        executedAt
        fromAddress
        toAddress
        tokenId
        eventId
        transactionHash
      }
    }
  }
}
    `;
export const useTransfersQuery = (variables, options) => useQuery(['Transfers', variables], useFetchData(TransfersDocument).bind(null, variables), options);
export const SendEmailVerificationDocument = `
    mutation SendEmailVerification($input: SendEmailVerificationInput!) {
  sendEmailVerification(input: $input) {
    success
    message
  }
}
    `;
export const useSendEmailVerificationMutation = (options) => useMutation(['SendEmailVerification'], useFetchData(SendEmailVerificationDocument), options);
export const SendPhoneVerificationDocument = `
    mutation SendPhoneVerification($input: SendPhoneVerificationInput!) {
  sendPhoneVerification(input: $input) {
    success
    message
  }
}
    `;
export const useSendPhoneVerificationMutation = (options) => useMutation(['SendPhoneVerification'], useFetchData(SendPhoneVerificationDocument), options);
export const VerifyEmailDocument = `
    mutation VerifyEmail($input: VerifyEmailInput!) {
  verifyEmail(input: $input) {
    success
    message
    verifiedValue
  }
}
    `;
export const useVerifyEmailMutation = (options) => useMutation(['VerifyEmail'], useFetchData(VerifyEmailDocument), options);
export const VerifyPhoneDocument = `
    mutation VerifyPhone($input: VerifyPhoneInput!) {
  verifyPhone(input: $input) {
    success
    message
    verifiedValue
  }
}
    `;
export const useVerifyPhoneMutation = (options) => useMutation(['VerifyPhone'], useFetchData(VerifyPhoneDocument), options);
export const TxsHistoryDocument = `
    query TxsHistory($username: String!) {
  account(username: $username) {
    activities(where: {type: TRANSACTION}) {
      edges {
        node {
          id
          paymasterID
          type
          status
          network
          transactionHash
          feeSource
          updatedAt
        }
      }
    }
  }
}
    `;
export const useTxsHistoryQuery = (variables, options) => useQuery(['TxsHistory', variables], useFetchData(TxsHistoryDocument).bind(null, variables), options);
//# sourceMappingURL=generated.js.map