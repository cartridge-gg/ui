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
export declare function useAccountSearch(query: string, options?: UseAccountSearchOptions): UseAccountSearchResult;
