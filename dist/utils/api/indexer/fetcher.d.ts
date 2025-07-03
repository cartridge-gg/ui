export declare function useFetchData<TData, TVariables>(query: string, options?: {
    credentials?: RequestInit["credentials"];
    headers?: RequestInit["headers"];
}): (variables?: TVariables) => Promise<TData>;
