import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
const collectibleTagVariants = cva("relative px-1 py-0.5 rounded-sm h-6 flex justify-center items-center text-sm tracking-wider font-semibold select-none", {
    variants: {
        variant: {
            default: "text-foreground-100 bg-[#1E221FA3] backdrop-blur-[8px]",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export function CollectibleTag({ label, variant, className, children, ...props }) {
    return (_jsxs("div", { className: cn(collectibleTagVariants({ variant }), className), ...props, children: [children, label && _jsx("p", { className: "px-0.5", children: label })] }));
}
export default CollectibleTag;
//# sourceMappingURL=tag.js.map