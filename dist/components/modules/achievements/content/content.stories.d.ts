import type { Meta, StoryObj } from "@storybook/react";
import { AchievementContent } from "./content";
declare const meta: Meta<typeof AchievementContent>;
export default meta;
type Story = StoryObj<typeof AchievementContent>;
export declare const Default: Story;
export declare const Uncompleted: Story;
export declare const Hidden: Story;
