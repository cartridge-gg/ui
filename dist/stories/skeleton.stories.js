import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Skeleton as UISkeleton } from "../components/primitives/skeleton";
const meta = {
    title: "Primitives/Skeleton",
    component: Skeleton,
    tags: ["autodocs"],
};
export default meta;
export const Default = {};
function Skeleton() {
    return (_jsxs("div", { className: "flex items-center space-x-4", children: [_jsx(UISkeleton, { className: "h-12 w-12 rounded-full" }), _jsxs("div", { className: "space-y-2", children: [_jsx(UISkeleton, { className: "h-4 w-[250px]" }), _jsx(UISkeleton, { className: "h-4 w-[200px]" })] })] }));
}
//# sourceMappingURL=skeleton.stories.js.map