import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Select, SelectContent } from "../../../../components/primitives/select";
import { useState } from "react";
import { TokenSelectHeader } from "./header";
import { TokenSelectRow } from "./row";
import { cn } from "../../../../utils";
export const TokenSelect = ({ tokens, defaultToken, onSelect, ...props }) => {
    const [currentToken, setCurrentToken] = useState(defaultToken || tokens[0]);
    const handleChangeToken = (address) => {
        const selectedToken = tokens.find((token) => token.metadata.address === address);
        if (selectedToken) {
            onSelect(selectedToken);
            setCurrentToken(selectedToken);
        }
    };
    return (_jsxs(Select, { ...props, value: currentToken.metadata.address, onValueChange: handleChangeToken, defaultValue: currentToken.metadata.address, children: [_jsx(TokenSelectHeader, {}), _jsx(SelectContent, { viewPortClassName: "gap-0", children: tokens.map((token, i) => (_jsx(TokenSelectRow, { token: token, currentToken: currentToken, className: cn(i === tokens.length - 1 && "border-b-0") }, token.metadata.address))) })] }));
};
//# sourceMappingURL=token-select.js.map