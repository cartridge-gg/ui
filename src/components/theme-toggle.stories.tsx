import type { Meta, StoryObj } from "@storybook/react";
import { ThemeToggle } from "./theme-toggle";

const meta: Meta<typeof ThemeToggle> = {
  title: "Components/ThemeToggle",
  component: ThemeToggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "icon", "link", "destructive", "outline", "ghost"],
    },
    size: {
      control: "select",
      options: ["default", "icon", "tall", "thumbnail"],
    },
  },
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "ghost",
    size: "icon",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "icon",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "icon",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "icon",
  },
};

export const DefaultSize: Story = {
  args: {
    variant: "ghost",
    size: "default",
  },
};