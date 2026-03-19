import { jsx as _jsx } from "react/jsx-runtime";
import { createContext } from "react";
const initialState = {
    url: "",
};
export const CartridgeAPIContext = createContext(initialState);
export function CartridgeAPIProvider({ url, credentials, headers, children, }) {
    return (_jsx(CartridgeAPIContext.Provider, { value: { ...initialState, headers, credentials, url }, children: children }));
}
//# sourceMappingURL=context.js.map