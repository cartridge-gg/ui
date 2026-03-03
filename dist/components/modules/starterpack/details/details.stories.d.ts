import type { StoryObj } from "@storybook/react";
import { StarterpackDetails, StarterpackDetailsProps } from "./details";
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLDivElement> & StarterpackDetailsProps & import("react").RefAttributes<HTMLDivElement>>;
    tags: string[];
    parameters: {
        layout: string;
    };
};
export default meta;
type Story = StoryObj<typeof StarterpackDetails>;
export declare const Default: Story;
export declare const Claimed: Story;
