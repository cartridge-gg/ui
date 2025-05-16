import { ReactNode } from "react";
type CartridgeAPIContextType = {
    url: string;
    credentials?: RequestInit["credentials"];
    headers?: RequestInit["headers"];
};
export declare const CartridgeAPIContext: import("react").Context<CartridgeAPIContextType>;
export declare function CartridgeAPIProvider({ url, credentials, headers, children, }: {
    url: string;
    credentials?: RequestInit["credentials"];
    headers?: RequestInit["headers"];
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export {};
