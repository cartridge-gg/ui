import { jsx as _jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { cn } from "../../../../utils";
export const followerFollowingVariants = cva("select-none w-[88px] h-8 border border-transparent rounded flex items-center justify-center", {
    variants: {
        variant: {
            darkest: "",
            darker: "",
            dark: "",
            default: "border-background-300 bg-background-200 text-foreground-300",
            light: "",
            lighter: "",
            lightest: "",
            ghost: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const FollowerFollowing = ({ variant, className, ...props }) => {
    return (_jsx("div", { className: cn(followerFollowingVariants({ variant }), className), ...props, children: _jsx("p", { className: "text-sm font-medium", children: "Following" }) }));
};
export default FollowerFollowing;
//# sourceMappingURL=following.js.map