export declare function fetchApiCreator(baseUrl: string, options?: {
    credentials?: RequestInit["credentials"];
    headers?: RequestInit["headers"];
}): <TData>(endpoint: string, body: Record<string, unknown>, urlParams?: Record<string, string>, signal?: AbortSignal) => Promise<TData>;
export declare function doFetch<TData>(url: string, options?: {
    credentials?: RequestInit["credentials"];
    headers?: RequestInit["headers"];
}, body?: Record<string, unknown>, urlParams?: Record<string, string>, signal?: AbortSignal): Promise<TData>;
