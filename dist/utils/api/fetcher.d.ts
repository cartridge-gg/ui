export declare function fetchDataCreator(url: string, options?: {
    credentials?: RequestInit["credentials"];
    headers?: RequestInit["headers"];
}): <TData, TVariables>(query: string, variables?: TVariables, signal?: AbortSignal) => Promise<TData>;
