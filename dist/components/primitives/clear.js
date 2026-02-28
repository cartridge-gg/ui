import { jsx as _jsx } from "react/jsx-runtime";
import { SpinnerIcon, TimesCircleIcon } from "../../index";
export const Clear = ({ isLoading, onClear }) => {
    return (_jsx("div", { className: "h-9 w-9 p-1.5 flex items-center justify-center cursor-pointer", onMouseDown: (e) => e.preventDefault(), onClick: onClear, children: isLoading ? (_jsx(SpinnerIcon, { className: " text-foreground-300 animate-spin" })) : (_jsx(TimesCircleIcon, { className: "text-foreground-300 hover:text-foreground-200" })) }));
};
//# sourceMappingURL=clear.js.map