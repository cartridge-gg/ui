import { useEffect, useMemo, useState } from "react";
import { useAccountSearchQuery } from "../api/cartridge/generated";
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
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
export function useAccountSearch(query, options = {}) {
    const { minLength = 1, debounceMs = 300, maxResults = 5 } = options;
    const debouncedQuery = useDebounce(query.trim().toLowerCase(), debounceMs);
    const shouldSearch = debouncedQuery.length >= minLength;
    const { data, isLoading, error } = useAccountSearchQuery({
        query: debouncedQuery,
        limit: maxResults,
    }, {
        enabled: shouldSearch,
        staleTime: 30 * 1000, // 30 seconds
        cacheTime: 5 * 60 * 1000, // 5 minutes
    });
    const results = useMemo(() => {
        if (!shouldSearch)
            return [];
        const accountResults = [];
        // Add existing accounts from search results
        if (data?.searchAccounts) {
            accountResults.push(...data.searchAccounts.map((user) => {
                const points = user.credits
                    ? Math.floor(Number(user.credits.amount) /
                        Math.pow(10, user.credits.decimals))
                    : undefined;
                return {
                    id: `existing-${user.username}`,
                    type: "existing",
                    username: user.username,
                    points: points,
                    lastOnline: user.updatedAt ? new Date(user.updatedAt) : undefined,
                };
            }));
        }
        // Check if exact match exists
        const exactMatch = accountResults?.find((result) => result.username.toLowerCase() === debouncedQuery.toLowerCase());
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
        error: error,
    };
}
//# sourceMappingURL=useAccountSearch.js.map