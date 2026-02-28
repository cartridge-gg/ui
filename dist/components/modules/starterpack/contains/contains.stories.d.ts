import type { StoryObj } from "@storybook/react";
import { StarterpackContains } from "./contains";
declare const meta: {
    title: string;
    component: typeof StarterpackContains;
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
type Story = StoryObj<typeof StarterpackContains>;
export declare const Default: Story;
export declare const SingleItem: Story;
