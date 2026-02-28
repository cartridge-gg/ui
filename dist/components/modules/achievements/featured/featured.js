import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardHeader, CardTitle } from "../../../../index";
import { cn } from "../../../../utils";
import { useMemo } from "react";
export function AchievementFeatured({ icon, title }) {
    const empty = useMemo(() => !icon || !title, [icon, title]);
    return (_jsxs(Card, { className: "shadow-none overflow-visible relative h-[136px] w-[120px]", children: [!empty && _jsx(Banner, {}), _jsxs(CardHeader, { className: cn("flex flex-col justify-between items-center h-full p-2 pt-6 overflow-hidden rounded", empty &&
                    "bg-background-100 border border-dashed border-background-200"), children: [_jsx("div", { className: "flex justify-center items-center w-12 h-12", children: _jsx("div", { className: cn("w-9 h-9", empty ? "text-background-500" : "text-primary", !icon ? "fa-spider-web" : icon, empty ? "fa-thin" : "fa-solid") }) }), _jsx(Title, { title: title || "empty", empty: empty })] })] }));
}
function Title({ title, empty }) {
    return (_jsx(CardTitle, { className: cn("grow flex justify-center items-center", empty ? "text-background-500" : "text-foreground-100"), children: _jsx("p", { className: "font-medium text-sm capitalize break-words text-center text-ellipsis line-clamp-2", children: title }) }));
}
export function Banner() {
    return (_jsxs("div", { className: "absolute top-[-2px] right-2 h-7 w-6 rounded-t-sm rounded-b overflow-hidden flex flex-col", children: [_jsx("div", { className: "h-5 w-6 bg-background-500" }), _jsxs("div", { className: "flex justify-between", children: [_jsx("div", { className: "h-0 w-0 border-t-[6px] border-t-background-500 border-r-[12px] border-r-transparent" }), _jsx("div", { className: "h-0 w-0 border-t-[6px] border-t-background-500 border-l-[12px] border-l-transparent" })] })] }));
}
export default AchievementFeatured;
//# sourceMappingURL=featured.js.map