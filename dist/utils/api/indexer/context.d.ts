import { ReactNode } from "react";
type IndexerAPIContextType = {
    indexerUrl?: string;
    credentials?: RequestInit["credentials"];
    headers?: RequestInit["headers"];
    isReady: boolean;
    setIndexerUrl: (url: string) => void;
};
export declare const IndexerAPIContext: import("react").Context<IndexerAPIContextType>;
export declare function IndexerAPIProvider({ credentials, headers, children, }: {
    credentials?: RequestInit["credentials"];
    headers?: RequestInit["headers"];
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export {};
