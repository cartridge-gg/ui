import type { Meta, StoryObj } from "@storybook/react";
import { LeaderboardCounter } from "./counter";
declare const meta: Meta<typeof LeaderboardCounter>;
export default meta;
type Story = StoryObj<typeof LeaderboardCounter>;
export declare const Default: Story;
export declare const Active: Story;
