import { useQuery, useInfiniteQuery } from 'react-query';
import { useFetchData } from './fetcher';
export const EventsDocument = `
    query Events($keys: [String!]!, $limit: Int!, $offset: Int!) {
  events(keys: $keys, limit: $limit, offset: $offset) {
    totalCount
    pageInfo {
      hasNextPage
    }
    edges {
      node {
        id
        keys
        data
        transactionHash
        executedAt
      }
    }
  }
}
    `;
export const useEventsQuery = (variables, options) => useQuery(['Events', variables], useFetchData(EventsDocument).bind(null, variables), options);
export const useInfiniteEventsQuery = (variables, options) => {
    const query = useFetchData(EventsDocument);
    return useInfiniteQuery(['Events.infinite', variables], (metaData) => query({ ...variables, ...(metaData.pageParam ?? {}) }), options);
};
export const Erc721BalancesDocument = `
    query ERC721Balances($address: String!, $limit: Int!, $offset: Int!) {
  tokenBalances(accountAddress: $address, limit: $limit, offset: $offset) {
    edges {
      node {
        tokenMetadata {
          __typename
          ... on ERC721__Token {
            contractAddress
            imagePath
            metadata
            metadataAttributes
            metadataDescription
            metadataName
            name
            tokenId
          }
        }
      }
    }
  }
}
    `;
export const useErc721BalancesQuery = (variables, options) => useQuery(['ERC721Balances', variables], useFetchData(Erc721BalancesDocument).bind(null, variables), options);
export const useInfiniteErc721BalancesQuery = (variables, options) => {
    const query = useFetchData(Erc721BalancesDocument);
    return useInfiniteQuery(['ERC721Balances.infinite', variables], (metaData) => query({ ...variables, ...(metaData.pageParam ?? {}) }), options);
};
export const TokenTransfersDocument = `
    query TokenTransfers($address: String!, $first: Int!) {
  tokenTransfers(accountAddress: $address, first: $first) {
    edges {
      node {
        from
        to
        tokenMetadata {
          __typename
          ... on ERC20__Token {
            amount
            contractAddress
            decimals
            name
            symbol
          }
          ... on ERC721__Token {
            contractAddress
            imagePath
            metadataAttributes
            metadataDescription
            metadataName
            name
            symbol
            tokenId
          }
        }
        transactionHash
        executedAt
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
    `;
export const useTokenTransfersQuery = (variables, options) => useQuery(['TokenTransfers', variables], useFetchData(TokenTransfersDocument).bind(null, variables), options);
export const useInfiniteTokenTransfersQuery = (variables, options) => {
    const query = useFetchData(TokenTransfersDocument);
    return useInfiniteQuery(['TokenTransfers.infinite', variables], (metaData) => query({ ...variables, ...(metaData.pageParam ?? {}) }), options);
};
//# sourceMappingURL=generated.js.map