type LayoutContextType = {
    withBackground: boolean;
    setWithBackground: (withBackground: boolean) => void;
    withBottomTabs: boolean;
    setWithBottomTabs: (withBottomTabs: boolean) => void;
    withFooter: boolean;
    setWithFooter: (withFooter: boolean) => void;
};
export declare const LayoutContext: import("react").Context<LayoutContextType>;
export declare function useLayoutContext(): LayoutContextType;
export {};
