import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { CheckboxIcon } from "../../../../index";
import { cva } from "class-variance-authority";
import { cn } from "../../../../utils";
const collectibleSelectedVariants = cva("cursor-pointer w-[40px] h-[40px]", {
    variants: {
        variant: {
            default: "",
            faded: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export function CollectibleSelected({ size = "collectible", selected, onSelect, variant, className, ...props }) {
    const handleClick = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        onSelect?.();
    }, [onSelect]);
    return (_jsx("div", { className: cn(collectibleSelectedVariants({ variant }), className), ...props, children: _jsxs("div", { className: "relative cursor-pointer hover:brightness-150 w-full h-full", onClick: handleClick, children: [_jsx("div", { className: "absolute top-[8px] right-[8px] text-foreground-400", children: _jsx(CheckboxIcon, { variant: "unchecked-solid", size: size }) }), !selected && (_jsx("div", { className: "absolute top-[8px] right-[8px] text-foreground-300", children: _jsx(CheckboxIcon, { variant: "unchecked-line", size: size }) })), selected && (_jsxs(_Fragment, { children: [_jsx("div", { className: "absolute top-[8px] right-[8px]", children: _jsx(CheckboxIcon, { variant: "check", size: size }) }), _jsx("div", { className: "absolute top-[8px] right-[8px] text-foreground-100", children: _jsx(CheckboxIcon, { variant: "unchecked-line", size: size }) })] }))] }) }));
}
export default CollectibleSelected;
//# sourceMappingURL=selected.js.map