import type { Meta, StoryObj } from "@storybook/react";
import { AchievementCounter } from "./counter";
declare const meta: Meta<typeof AchievementCounter>;
export default meta;
type Story = StoryObj<typeof AchievementCounter>;
export declare const Default: Story;
export declare const Active: Story;
