import type { Meta, StoryObj } from "@storybook/react";
import { AchievementToast } from "@/components/toast-components";

const meta: Meta<typeof AchievementToast> = {
  title: "Components/Toast Components/Achievement Toast",
  component: AchievementToast,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#353535" },
        { name: "light", value: "#ffffff" },
      ],
    },
  },
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    xpAmount: { control: "number" },
    progress: { control: { type: "range", min: 0, max: 100, step: 1 } },
    isDraft: { control: "boolean" },
    onClose: { action: "closed" },
  },
};

export default meta;

type Story = StoryObj<typeof AchievementToast>;

export const PacifistPath: Story = {
  args: {
    title: "Pacifist Path",
    subtitle: "Earned!",
    xpAmount: 100,
    progress: 66.7,
    isDraft: false,
  },
};

export const DiamondsDraft: Story = {
  args: {
    title: "Diamonds",
    subtitle: "Earned!",
    xpAmount: 100,
    progress: 16.7,
    isDraft: true,
  },
};

export const CustomAchievement: Story = {
  args: {
    title: "Master Explorer",
    subtitle: "Unlocked!",
    xpAmount: 250,
    progress: 100,
    isDraft: false,
  },
};