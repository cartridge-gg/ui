import type { StoryObj } from "@storybook/react";
import { StarterpackClaimable } from "./claimable";
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLDivElement> & import("./claimable").StarterpackClaimableProps & import("react").RefAttributes<HTMLDivElement>>;
    tags: string[];
    parameters: {
        layout: string;
    };
    argTypes: {
        items: {
            description: string;
            control: {
                type: "object";
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof StarterpackClaimable>;
export declare const Default: Story;
export declare const Claimed: Story;
export declare const SingleItem: Story;
export declare const ManyItems: Story;
export declare const LongItemNames: Story;
