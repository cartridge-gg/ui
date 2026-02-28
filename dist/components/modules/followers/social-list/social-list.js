import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../../../utils";
export const FollowerSocialList = ({ className, ...props }) => {
    return (_jsx("div", { className: cn("relative flex flex-col gap-y-px rounded h-full overflow-y-scroll", className), style: {
            scrollbarWidth: "none",
        }, ...props }));
};
export default FollowerSocialList;
//# sourceMappingURL=social-list.js.map