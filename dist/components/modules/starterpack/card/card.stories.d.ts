import type { StoryObj } from "@storybook/react";
import { StarterpackCard } from "./card";
declare const meta: {
    title: string;
    component: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLDivElement> & import("./card").StarterpackCardProps & import("react").RefAttributes<HTMLDivElement>>;
    tags: string[];
    parameters: {
        layout: string;
    };
    argTypes: {
        item: {
            description: string;
            control: {
                type: "object";
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof StarterpackCard>;
export declare const Default: Story;
export declare const Claimed: Story;
export declare const LongItemNames: Story;
