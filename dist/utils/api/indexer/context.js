import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
const initialState = {
    setIndexerUrl: () => { },
    isReady: false,
};
export const IndexerAPIContext = createContext(initialState);
export function IndexerAPIProvider({ credentials, headers, children, }) {
    const [indexerUrl, setIndexerUrl] = useState(initialState.indexerUrl);
    return (_jsx(IndexerAPIContext.Provider, { value: {
            indexerUrl,
            setIndexerUrl,
            credentials,
            headers,
            isReady: !!indexerUrl,
        }, children: children }));
}
//# sourceMappingURL=context.js.map