import type { StoryObj } from "@storybook/react";
import { CopyAddress } from "./copy-address";
declare const meta: {
    title: string;
    component: typeof CopyAddress;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Small: Story;
export declare const Large: Story;
export declare const ExplicitLength: Story;
