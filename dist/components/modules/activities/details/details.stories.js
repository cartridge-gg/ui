import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ActivityDetails } from ".";
import { ActivityDetail, Thumbnail } from "../../../../index";
import { CreditIcon, StarknetColorIcon } from "../../../../components/icons";
const meta = {
    title: "Modules/Activities/Details",
    component: ActivityDetails,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        children: _jsx("p", { children: "Content" }),
    },
};
export default meta;
export const Default = {
    render: () => (_jsxs(ActivityDetails, { children: [_jsx(ActivityDetail, { label: "Date", children: "Feb 11th, 2025 at 11:09 pm" }), _jsx(ActivityDetail, { label: "Status", status: "fail", children: "Failed" }), _jsx(ActivityDetail, { label: "To", children: "0xb668...dd65" }), _jsx(ActivityDetail, { label: "Network", children: _jsxs("div", { className: "flex gap-1.5 items-center", children: [_jsx(Thumbnail, { icon: _jsx(StarknetColorIcon, { className: "absolute", size: "default" }), size: "xs", centered: true, rounded: true }), "Starknet"] }) }), _jsx(ActivityDetail, { label: "Network Fee", children: _jsxs("div", { className: "flex gap-1.5 items-center", children: [_jsx(Thumbnail, { icon: _jsx(CreditIcon, { className: "absolute", size: "default" }), size: "xs", centered: true, rounded: true }), ".01 CREDITS ($0.001)"] }) })] })),
};
//# sourceMappingURL=details.stories.js.map