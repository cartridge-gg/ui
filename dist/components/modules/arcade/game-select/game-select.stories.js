import { ArcadeGameSelect } from "./game-select";
import { fn } from "@storybook/test";
const meta = {
    title: "Modules/Arcade/Game Select",
    component: ArcadeGameSelect,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    args: {
        name: "Loot Survivor",
        logo: "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/icon.png",
        cover: "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/cover.png",
        points: 400,
        onClick: fn(),
    },
};
export default meta;
export const Default = {};
export const Active = {
    args: {
        active: true,
    },
};
export const Unplayed = {
    args: {
        points: 0,
    },
};
export const UnplayedActive = {
    args: {
        points: 0,
        active: true,
    },
};
export const Unthemed = {
    args: {
        cover: undefined,
    },
};
export const UnthemedActive = {
    args: {
        cover: undefined,
        active: true,
    },
};
export const Unknown = {
    args: {
        name: "Game Name",
        logo: undefined,
        cover: undefined,
    },
};
export const UnknownActive = {
    args: {
        name: "Game Name",
        logo: undefined,
        cover: undefined,
        active: true,
    },
};
//# sourceMappingURL=game-select.stories.js.map