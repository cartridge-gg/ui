import { StarterpackClaimable } from "./claimable";
const meta = {
    title: "Modules/Starterpack/Claimable",
    component: StarterpackClaimable,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    argTypes: {
        items: {
            description: "Array of claimable items",
            control: { type: "object" },
        },
    },
};
export default meta;
export const Default = {
    args: {
        items: ["Adventurer #94", "Adventurer #95", "Adventurer #96"],
    },
};
export const Claimed = {
    args: {
        items: ["Adventurer #94", "Adventurer #95", "Adventurer #96"],
        isClaimed: true,
    },
};
export const SingleItem = {
    args: {
        items: ["Special Bonus Item"],
    },
};
export const ManyItems = {
    args: {
        items: [
            "Adventurer #94",
            "Adventurer #95",
            "Adventurer #96",
            "Adventurer #97",
            "Adventurer #98",
            "Adventurer #99",
            "Adventurer #100",
        ],
    },
};
export const LongItemNames = {
    args: {
        items: [
            "This is a very long item name that might need special handling for display purposes",
            "Another long item name that could potentially wrap to multiple lines",
            "Short item",
        ],
    },
};
//# sourceMappingURL=claimable.stories.js.map