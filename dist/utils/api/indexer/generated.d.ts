import { UseQueryOptions, UseInfiniteQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Cursor: any;
};
export type Erc20__Token = {
    __typename?: 'ERC20__Token';
    amount: Scalars['String'];
    contractAddress: Scalars['String'];
    decimals: Scalars['String'];
    name: Scalars['String'];
    symbol: Scalars['String'];
};
export type Erc721__Token = {
    __typename?: 'ERC721__Token';
    contractAddress: Scalars['String'];
    imagePath: Scalars['String'];
    metadata: Scalars['String'];
    metadataAttributes: Scalars['String'];
    metadataDescription: Scalars['String'];
    metadataName: Scalars['String'];
    name: Scalars['String'];
    symbol: Scalars['String'];
    tokenId: Scalars['String'];
};
export type Erc__Token = Erc20__Token | Erc721__Token;
export type Event = {
    __typename?: 'Event';
    edges: Array<EventEdge>;
    pageInfo: PageInfo;
    totalCount: Scalars['Int'];
};
export type EventEdge = {
    __typename?: 'EventEdge';
    node: EventNode;
};
export type EventNode = {
    __typename?: 'EventNode';
    createdAt: Scalars['String'];
    data: Array<Scalars['String']>;
    executedAt: Scalars['String'];
    id: Scalars['String'];
    keys: Array<Scalars['String']>;
    transactionHash: Scalars['String'];
};
export type PageInfo = {
    __typename?: 'PageInfo';
    hasNextPage: Scalars['Boolean'];
};
export type Query = {
    __typename?: 'Query';
    events?: Maybe<Array<Event>>;
    tokenBalances: Token__BalanceConnection;
    tokenTransfers?: Maybe<Token__TransferConnection>;
};
export type QueryEventsArgs = {
    keys: Array<Scalars['String']>;
    limit: Scalars['Int'];
    offset: Scalars['Int'];
};
export type QueryTokenBalancesArgs = {
    accountAddress: Scalars['String'];
    after?: InputMaybe<Scalars['Cursor']>;
    before?: InputMaybe<Scalars['Cursor']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
};
export type QueryTokenTransfersArgs = {
    accountAddress: Scalars['String'];
    after?: InputMaybe<Scalars['Cursor']>;
    before?: InputMaybe<Scalars['Cursor']>;
    first?: InputMaybe<Scalars['Int']>;
    last?: InputMaybe<Scalars['Int']>;
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
};
export type Token__Balance = {
    __typename?: 'Token__Balance';
    tokenMetadata: Erc__Token;
};
export type Token__BalanceConnection = {
    __typename?: 'Token__BalanceConnection';
    edges: Array<Token__BalanceEdge>;
    pageInfo: World__PageInfo;
    totalCount: Scalars['Int'];
};
export type Token__BalanceEdge = {
    __typename?: 'Token__BalanceEdge';
    cursor: Scalars['Cursor'];
    node: Token__Balance;
};
export type Token__Transfer = {
    __typename?: 'Token__Transfer';
    executedAt: Scalars['String'];
    from: Scalars['String'];
    to: Scalars['String'];
    tokenMetadata: Erc__Token;
    transactionHash: Scalars['String'];
};
export type Token__TransferConnection = {
    __typename?: 'Token__TransferConnection';
    edges: Array<Token__TransferEdge>;
    pageInfo: World__PageInfo;
    totalCount: Scalars['Int'];
};
export type Token__TransferEdge = {
    __typename?: 'Token__TransferEdge';
    cursor: Scalars['Cursor'];
    node: Token__Transfer;
};
export type World__PageInfo = {
    __typename?: 'World__PageInfo';
    endCursor?: Maybe<Scalars['Cursor']>;
    hasNextPage: Scalars['Boolean'];
    hasPreviousPage: Scalars['Boolean'];
    startCursor?: Maybe<Scalars['Cursor']>;
};
export type EventsQueryVariables = Exact<{
    keys: Array<Scalars['String']> | Scalars['String'];
    limit: Scalars['Int'];
    offset: Scalars['Int'];
}>;
export type EventsQuery = {
    __typename?: 'Query';
    events?: Array<{
        __typename?: 'Event';
        totalCount: number;
        pageInfo: {
            __typename?: 'PageInfo';
            hasNextPage: boolean;
        };
        edges: Array<{
            __typename?: 'EventEdge';
            node: {
                __typename?: 'EventNode';
                id: string;
                keys: Array<string>;
                data: Array<string>;
                transactionHash: string;
                executedAt: string;
            };
        }>;
    }> | null;
};
export type Erc721BalancesQueryVariables = Exact<{
    address: Scalars['String'];
    limit: Scalars['Int'];
    offset: Scalars['Int'];
}>;
export type Erc721BalancesQuery = {
    __typename?: 'Query';
    tokenBalances: {
        __typename?: 'Token__BalanceConnection';
        edges: Array<{
            __typename?: 'Token__BalanceEdge';
            node: {
                __typename?: 'Token__Balance';
                tokenMetadata: {
                    __typename: 'ERC20__Token';
                } | {
                    __typename: 'ERC721__Token';
                    contractAddress: string;
                    imagePath: string;
                    metadata: string;
                    metadataAttributes: string;
                    metadataDescription: string;
                    metadataName: string;
                    name: string;
                    tokenId: string;
                };
            };
        }>;
    };
};
export type TokenTransfersQueryVariables = Exact<{
    address: Scalars['String'];
    first: Scalars['Int'];
}>;
export type TokenTransfersQuery = {
    __typename?: 'Query';
    tokenTransfers?: {
        __typename?: 'Token__TransferConnection';
        edges: Array<{
            __typename?: 'Token__TransferEdge';
            node: {
                __typename?: 'Token__Transfer';
                from: string;
                to: string;
                transactionHash: string;
                executedAt: string;
                tokenMetadata: {
                    __typename: 'ERC20__Token';
                    amount: string;
                    contractAddress: string;
                    decimals: string;
                    name: string;
                    symbol: string;
                } | {
                    __typename: 'ERC721__Token';
                    contractAddress: string;
                    imagePath: string;
                    metadataAttributes: string;
                    metadataDescription: string;
                    metadataName: string;
                    name: string;
                    symbol: string;
                    tokenId: string;
                };
            };
        }>;
        pageInfo: {
            __typename?: 'World__PageInfo';
            hasNextPage: boolean;
            endCursor?: any | null;
        };
    } | null;
};
export declare const EventsDocument = "\n    query Events($keys: [String!]!, $limit: Int!, $offset: Int!) {\n  events(keys: $keys, limit: $limit, offset: $offset) {\n    totalCount\n    pageInfo {\n      hasNextPage\n    }\n    edges {\n      node {\n        id\n        keys\n        data\n        transactionHash\n        executedAt\n      }\n    }\n  }\n}\n    ";
export declare const useEventsQuery: <TData = EventsQuery, TError = unknown>(variables: EventsQueryVariables, options?: UseQueryOptions<EventsQuery, TError, TData>) => import("react-query").UseQueryResult<TData, TError>;
export declare const useInfiniteEventsQuery: <TData = EventsQuery, TError = unknown>(variables: EventsQueryVariables, options?: UseInfiniteQueryOptions<EventsQuery, TError, TData>) => import("react-query").UseInfiniteQueryResult<TData, TError>;
export declare const Erc721BalancesDocument = "\n    query ERC721Balances($address: String!, $limit: Int!, $offset: Int!) {\n  tokenBalances(accountAddress: $address, limit: $limit, offset: $offset) {\n    edges {\n      node {\n        tokenMetadata {\n          __typename\n          ... on ERC721__Token {\n            contractAddress\n            imagePath\n            metadata\n            metadataAttributes\n            metadataDescription\n            metadataName\n            name\n            tokenId\n          }\n        }\n      }\n    }\n  }\n}\n    ";
export declare const useErc721BalancesQuery: <TData = Erc721BalancesQuery, TError = unknown>(variables: Erc721BalancesQueryVariables, options?: UseQueryOptions<Erc721BalancesQuery, TError, TData>) => import("react-query").UseQueryResult<TData, TError>;
export declare const useInfiniteErc721BalancesQuery: <TData = Erc721BalancesQuery, TError = unknown>(variables: Erc721BalancesQueryVariables, options?: UseInfiniteQueryOptions<Erc721BalancesQuery, TError, TData>) => import("react-query").UseInfiniteQueryResult<TData, TError>;
export declare const TokenTransfersDocument = "\n    query TokenTransfers($address: String!, $first: Int!) {\n  tokenTransfers(accountAddress: $address, first: $first) {\n    edges {\n      node {\n        from\n        to\n        tokenMetadata {\n          __typename\n          ... on ERC20__Token {\n            amount\n            contractAddress\n            decimals\n            name\n            symbol\n          }\n          ... on ERC721__Token {\n            contractAddress\n            imagePath\n            metadataAttributes\n            metadataDescription\n            metadataName\n            name\n            symbol\n            tokenId\n          }\n        }\n        transactionHash\n        executedAt\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n    ";
export declare const useTokenTransfersQuery: <TData = TokenTransfersQuery, TError = unknown>(variables: TokenTransfersQueryVariables, options?: UseQueryOptions<TokenTransfersQuery, TError, TData>) => import("react-query").UseQueryResult<TData, TError>;
export declare const useInfiniteTokenTransfersQuery: <TData = TokenTransfersQuery, TError = unknown>(variables: TokenTransfersQueryVariables, options?: UseInfiniteQueryOptions<TokenTransfersQuery, TError, TData>) => import("react-query").UseInfiniteQueryResult<TData, TError>;
