import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ActivityDetail } from ".";
import { CreditIcon, StarknetColorIcon } from "../../../../components/icons";
import { Thumbnail } from "../../../../index";
const meta = {
    title: "Modules/Activities/Detail",
    component: ActivityDetail,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        label: "Label",
        children: _jsx("p", { children: "Content" }),
    },
};
export default meta;
export const Default = {};
export const Samples = {
    render: () => (_jsxs("div", { className: "flex flex-col gap-3 p-3", children: [_jsx(ActivityDetail, { label: "Contract Address", children: "0xb668...dd65" }), _jsx(ActivityDetail, { label: "To", children: "0xb668...dd65" }), _jsx(ActivityDetail, { label: "From", children: "0xb668...dd65" }), _jsx(ActivityDetail, { label: "Network", children: _jsxs("div", { className: "flex gap-1.5 items-center", children: [_jsx(Thumbnail, { icon: _jsx(StarknetColorIcon, { className: "absolute", size: "default" }), size: "xs", centered: true, rounded: true }), "Starknet"] }) }), _jsx(ActivityDetail, { label: "Network Fee", children: _jsxs("div", { className: "flex gap-1.5 items-center", children: [_jsx(Thumbnail, { icon: _jsx(CreditIcon, { className: "absolute", size: "default" }), size: "xs", centered: true, rounded: true }), ".01 CREDITS ($0.001)"] }) }), _jsx(ActivityDetail, { label: "Token ID", children: "8" }), _jsx(ActivityDetail, { label: "Token Standard", children: "ERC-721" }), _jsx(ActivityDetail, { label: "Date", children: "Feb 11th, 2025 at 11:09 pm" }), _jsx(ActivityDetail, { label: "Status", status: "success", children: "Succeeded" })] })),
};
//# sourceMappingURL=detail.stories.js.map