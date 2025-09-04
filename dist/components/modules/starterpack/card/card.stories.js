import { StarterpackCard } from "./card";
const meta = {
    title: "Modules/Starterpack/Card",
    component: StarterpackCard,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    argTypes: {
        item: {
            description: "claimable item",
            control: { type: "object" },
        },
    },
};
export default meta;
export const Default = {
    args: {
        item: "Adventurer #94",
    },
};
export const Claimed = {
    args: {
        item: "Adventurer #94",
        isClaimed: true,
    },
};
export const LongItemNames = {
    args: {
        item: "This is a very long item name that might need special handling for display purposes",
    },
};
//# sourceMappingURL=card.stories.js.map