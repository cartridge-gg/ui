import { jsx as _jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { cn } from "../../../../utils";
import { Button } from "../../../../index";
export const followerUnfollowVariants = cva("w-[88px] h-8 group transition-colors normal-case tracking-normal font-sans font-normal font-medium border border-transparent rounded", {
    variants: {
        variant: {
            darkest: "",
            darker: "",
            dark: "",
            default: "bg-background-300 text-foreground-100 hover:bg-background-400 hover:text-destructive-100",
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
export const FollowerUnfollow = ({ loading, disabled, variant, className, ...props }) => {
    return (_jsx(Button, { isLoading: loading, disabled: disabled, variant: "secondary", className: cn(followerUnfollowVariants({ variant }), className), ...props, children: _jsx("p", { className: "text-sm font-medium", children: "Unfollow" }) }));
};
export default FollowerUnfollow;
//# sourceMappingURL=unfollow.js.map