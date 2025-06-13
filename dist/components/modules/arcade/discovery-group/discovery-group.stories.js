import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArcadeDiscoveryGroup } from "./discovery-group";
const meta = {
    title: "Modules/Arcade/Discovery Group",
    component: ArcadeDiscoveryGroup,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        game: {
            metadata: {
                name: "Loot Survivor",
                logo: "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/icon.png",
                cover: "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/cover.png",
            },
            socials: {
                website: "https://lootsurvivor.io/",
                discord: "https://discord.gg/lootsurvivor",
                twitter: "https://x.com/lootsurvivor",
            },
        },
        events: [
            {
                name: "bal7hazar",
                achievement: {
                    title: "Squire",
                    icon: "fa-seedling",
                },
                timestamp: 1740388686,
            },
            {
                name: "karyi",
                achievement: {
                    title: "Squire",
                    icon: "fa-seedling",
                },
                timestamp: 1740288686,
            },
            {
                name: "ashe",
                achievement: {
                    title: "Squire",
                    icon: "fa-seedling",
                },
                timestamp: 1740188686,
            },
        ],
    },
};
export default meta;
export const Default = {};
export const Loading = {
    args: {
        loading: true,
    },
};
export const Rounded = {
    args: {
        rounded: true,
    },
};
export const MultiColors = {
    render: (args) => {
        return (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsx(ArcadeDiscoveryGroup, { ...args, rounded: true, color: "#ff00ff" }), _jsx(ArcadeDiscoveryGroup, { ...args, rounded: true, color: "#00ff00" })] }));
    },
};
//# sourceMappingURL=discovery-group.stories.js.map