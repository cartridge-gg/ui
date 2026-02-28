import { jsx as _jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { UserCheckIcon } from "../../../../index";
import { cn } from "../../../../utils";
export const followerMarkVariants = cva("h-6 w-7 flex items-center justify-center rounded hidden data-[active=true]:flex", {
    variants: {
        variant: {
            default: "text-background-400 group-hover:text-background-500 data-[active=true]:text-foreground-100 data-[active=true]:group-hover:text-foreground-100 transition-colors",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const FollowerMark = ({ active, variant, className, ...props }) => {
    return (_jsx("div", { "data-active": active, className: cn(followerMarkVariants({ variant, className })), ...props, children: _jsx(UserCheckIcon, { variant: "solid", size: "sm" }) }));
};
export default FollowerMark;
//# sourceMappingURL=mark.js.map