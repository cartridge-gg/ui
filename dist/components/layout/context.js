import { createContext, useContext } from "react";
const initialState = {
    withBackground: false,
    setWithBackground: () => { },
    bottomLayout: "none",
    setBottomLayout: () => { },
};
export const LayoutContext = createContext(initialState);
export function useLayoutContext() {
    return useContext(LayoutContext);
}
//# sourceMappingURL=context.js.map