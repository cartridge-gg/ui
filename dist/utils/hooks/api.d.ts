export declare function useCartridgeAPI(): {
    url: string;
    credentials?: RequestInit["credentials"];
    headers?: RequestInit["headers"];
};
export declare function useIndexerAPI(): {
    indexerUrl?: string;
    credentials?: RequestInit["credentials"];
    headers?: RequestInit["headers"];
    isReady: boolean;
    setIndexerUrl: (url: string) => void;
};
