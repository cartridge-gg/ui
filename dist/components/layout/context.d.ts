export type BottomLayout = "none" | "tabs" | "footer";
type LayoutContextType = {
    withBackground: boolean;
    setWithBackground: (withBackground: boolean) => void;
    bottomLayout: BottomLayout;
    setBottomLayout: (bottomLayout: BottomLayout) => void;
};
export declare const LayoutContext: import("react").Context<LayoutContextType>;
export declare function useLayoutContext(): LayoutContextType;
export {};
