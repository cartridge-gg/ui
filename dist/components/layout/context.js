import { createContext, useContext } from "react";
const initialState = {
    withBackground: false,
    setWithBackground: () => { },
    withBottomTabs: false,
    setWithBottomTabs: () => { },
    withFooter: false,
    setWithFooter: () => { },
};
export const LayoutContext = createContext(initialState);
export function useLayoutContext() {
    return useContext(LayoutContext);
}
//# sourceMappingURL=context.js.map