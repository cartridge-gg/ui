import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../utils";
function Skeleton({ className, ...props }) {
    return (_jsx("div", { className: cn("rounded-md", "bg-[linear-gradient(to_right,var(--background-150)_0%,var(--background-200)_20%,var(--background-150)40%)]", "bg-[length:200%_100%]", "animate-shimmer", className), ...props }));
}
export { Skeleton };
//# sourceMappingURL=skeleton.js.map