import type { Meta, StoryObj } from "@storybook/react";
import { FollowerAction } from "./action";
declare const meta: Meta<typeof FollowerAction>;
export default meta;
type Story = StoryObj<typeof FollowerAction>;
export declare const Follow: Story;
export declare const Following: Story;
export declare const Unfollow: Story;
