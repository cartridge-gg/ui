import { StarterpackDetails, StarterpackStatus, } from "./details";
const meta = {
    title: "Modules/Starterpack/Details",
    component: StarterpackDetails,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    // argTypes: {
    //   items: {
    //     description: "Array of claimable items",
    //     control: { type: "object" },
    //   },
    // },
};
export default meta;
const props = {
    status: StarterpackStatus.CLAIMABLE,
    createdBy: "John Doe",
    owner: "0x1234567890abcdef1234567890abcdef12345678",
    claimedOn: new Date("2023-05-15T14:30:00Z"),
};
export const Default = {
    args: props,
};
export const Claimed = {
    args: { ...props, status: StarterpackStatus.CLAIMED },
};
//# sourceMappingURL=details.stories.js.map