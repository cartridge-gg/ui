import { jsx as _jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import FollowerUnfollow from "./unfollow";
import FollowerFollowing from "./following";
import FollowerFollow from "./follow";
export const followerActionVariants = cva("", {
    variants: {
        variant: {
            darkest: "",
            darker: "",
            dark: "",
            default: "",
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
export const FollowerAction = ({ following, unfollowable, loading, disabled, variant, className, onClick, ...props }) => {
    if (following && unfollowable) {
        return (_jsx(FollowerUnfollow, { onClick: onClick, loading: loading, disabled: disabled, variant: variant, className: className, ...props }));
    }
    if (following) {
        return (_jsx(FollowerFollowing, { variant: variant, className: className, ...props }));
    }
    return (_jsx(FollowerFollow, { onClick: onClick, loading: loading, disabled: disabled, variant: variant, className: className, ...props }));
};
export default FollowerAction;
//# sourceMappingURL=action.js.map