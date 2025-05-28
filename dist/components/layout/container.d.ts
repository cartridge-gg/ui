import { type PropsWithChildren } from "react";
export declare function useMediaQuery(query: string): boolean;
export declare function LayoutContainer({ children, className, }: PropsWithChildren & {
    className?: string;
    modal?: boolean;
    onModalClick?: () => void;
}): import("react/jsx-runtime").JSX.Element;
