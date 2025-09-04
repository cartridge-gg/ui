import type { StoryObj } from "@storybook/react";
import { Network } from "./network";
declare const meta: {
    title: string;
    component: typeof Network;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Mainnet: Story;
export declare const Sepolia: Story;
export declare const Slot: Story;
export declare const Unknown: Story;
