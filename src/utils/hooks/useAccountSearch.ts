import { useEffect, useMemo, useState } from "react";
import { useAccountSearchQuery } from "../api/cartridge/generated";

export interface AccountSearchResult {
  id: string;
  type: "existing" | "create-new";
  username: string;
  points?: number;
  lastOnline?: Date;
}

export interface UseAccountSearchOptions {
  minLength?: number;
  debounceMs?: number;
  maxResults?: number;
}

export interface UseAccountSearchResult {
  results: AccountSearchResult[];
  isLoading: boolean;
  error?: Error;
}

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export function useAccountSearch(
  query: string,
  options: UseAccountSearchOptions = {},
): UseAccountSearchResult {
  const { minLength = 1, debounceMs = 300, maxResults = 5 } = options;

  const debouncedQuery = useDebounce(query.trim().toLowerCase(), debounceMs);
  const shouldSearch = debouncedQuery.length >= minLength;

  const { data, isLoading, error } = useAccountSearchQuery(
    {
      query: debouncedQuery,
      limit: maxResults,
    },
    {
      enabled: shouldSearch,
      staleTime: 30 * 1000, // 30 seconds
      cacheTime: 5 * 60 * 1000, // 5 minutes
    },
  );

  const results = useMemo(() => {
    if (!shouldSearch) return [];

    const accountResults: AccountSearchResult[] = [];

    // Add existing accounts from search results
    if (data?.accounts?.edges) {
      accountResults.push(
        ...data.accounts.edges
          .filter((edge) => edge?.node)
          .map((edge) => {
            const account = edge!.node!;
            const credits = account.credits;
            const points = credits
              ? Math.floor(
                  Number(credits.amount) / Math.pow(10, credits.decimals),
                )
              : undefined;

            return {
              id: `existing-${account.username}`,
              type: "existing" as const,
              username: account.username,
              points,
              lastOnline: account.updatedAt
                ? new Date(account.updatedAt)
                : undefined,
            };
          }),
      );
    }

    // Check if exact match exists
    const exactMatch = accountResults.find(
      (result) =>
        result.username.toLowerCase() === debouncedQuery.toLowerCase(),
    );

    // If no exact match, add "Create New" option
    if (!exactMatch && debouncedQuery.length >= 3) {
      accountResults.unshift({
        id: `create-new-${debouncedQuery}`,
        type: "create-new",
        username: debouncedQuery,
      });
    }

    return accountResults;
  }, [data, debouncedQuery, shouldSearch]);

  return {
    results,
    isLoading: shouldSearch && isLoading,
    error: error as Error | undefined,
  };
}
