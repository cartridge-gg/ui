import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../../../utils";
export const LeaderboardTable = ({ className, ...props }) => {
    return (_jsx("div", { className: cn("relative flex flex-col gap-y-px rounded overflow-y-scroll", className), style: {
            scrollbarWidth: "none",
        }, ...props }));
};
export default LeaderboardTable;
//# sourceMappingURL=table.js.map