import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header, Textarea } from "../../../components";
import { Selection } from "./selection";
import { Preview } from "./preview";
import { formatAddress } from "../../../utils";
export const Recipient = ({ to, value, selectedName, selectedAddress, selectedWallet, onChange, onFocus, onBlur, onClear, resultName, resultAddress, resultWallet, onResultClick, onResultEnter, onResultLeave, error, isLoading, isFocused, isHovered, }) => {
    return (_jsxs("div", { className: "flex flex-col gap-y-px", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx(Header, { label: "To" }), (selectedName || selectedAddress) && (_jsx(Selection, { label: selectedName || formatAddress(selectedAddress, { size: "xs" }), wallet: selectedWallet }))] }), _jsxs("div", { className: "relative flex flex-col gap-y-3", children: [_jsx(Textarea, { spellCheck: false, placeholder: "Recipient Address or Username", value: value, error: error, onChange: onChange, onFocus: onFocus, onBlur: onBlur, isLoading: isLoading, onClear: onClear, className: "min-w-[320px]" }), (isFocused || isHovered) &&
                        !error &&
                        resultAddress &&
                        !isLoading &&
                        to !== resultAddress && (_jsx("div", { className: "absolute bottom-[-8px] translate-y-full w-full z-10", children: _jsx(Preview, { address: resultAddress, wallet: resultWallet, onClick: onResultClick, onMouseEnter: onResultEnter, onMouseLeave: onResultLeave, name: resultName }) }))] })] }));
};
//# sourceMappingURL=recipient.js.map