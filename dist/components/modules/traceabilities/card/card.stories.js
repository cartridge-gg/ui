import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TraceabilityCard, TraceabilityCollectibleCard } from ".";
const meta = {
    title: "Modules/Traceabilities/Card",
    component: TraceabilityCard,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
};
export default meta;
export const Collectible = {
    render: () => (_jsxs("div", { className: "flex flex-col gap-3", children: [_jsx(TraceabilityCollectibleCard, { from: "0x041a...123b", to: "0x041a...123b", amount: 1, image: "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/cover.png", action: "receive" }), _jsx(TraceabilityCollectibleCard, { from: "0x041a...123b", to: "0x041a...123b", amount: 2, image: "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/cover.png", action: "send" }), _jsx(TraceabilityCollectibleCard, { from: "0x041a...123b", to: "0x041a...123b", amount: 3, image: "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/cover.png", action: "mint" }), _jsx(TraceabilityCollectibleCard, { from: "0x041a...123b", to: "0x041a...123b", amount: 4, image: "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/cover.png", action: "receive", loading: true }), _jsx(TraceabilityCollectibleCard, { from: "0x041a...123b", to: "0x041a...123b", amount: 10, image: "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/cover.png", action: "receive", error: true })] })),
};
//# sourceMappingURL=card.stories.js.map