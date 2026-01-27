import { jsx as _jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { cn } from "../../../../utils";
export const followerTagVariants = cva("border rounded px-1.5 py-0.5 text-xs", {
    variants: {
        variant: {
            darkest: "bg-background-100 border-background-200 text-foreground-400",
            darker: "bg-background-100 border-background-200 text-foreground-400",
            dark: "bg-background-100 border-background-200 text-foreground-400",
            default: "bg-background-100 border-background-200 text-foreground-400",
            light: "bg-background-125 border-background-200 text-foreground-400",
            lighter: "bg-background-125 border-background-200 text-foreground-400",
            lightest: "bg-background-125 border-background-200 text-foreground-400",
            ghost: "bg-transparent text-foreground-400 border-transparent",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const FollowerTag = ({ variant, className, ...props }) => {
    return (_jsx("p", { className: cn(followerTagVariants({ variant }), className), ...props, children: "Follows you" }));
};
export default FollowerTag;
//# sourceMappingURL=tag.js.map