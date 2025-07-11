import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "@/components";

const meta: Meta<typeof Text> = {
  title: "Typography/Sans",
  component: Text,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Regular10px: Story = {
  args: {
    className: "text-[10px]/[12px]",
  },
};

export const Regular12px: Story = {
  args: {
    className: "text-xs",
  },
};

export const Regular14px: Story = {
  args: {
    className: "text-sm",
  },
};

export const Regular16px: Story = {
  args: {
    className: "text-base",
  },
};

export const Medium12px: Story = {
  args: {
    className: "text-xs font-medium",
  },
};

export const Medium14px: Story = {
  args: {
    className: "text-sm font-medium",
  },
};

export const SemiBold12px: Story = {
  args: {
    className: "text-xs font-semibold",
  },
};

export const SemiBold14px: Story = {
  args: {
    className: "text-sm font-semibold",
  },
};

export const SemiBold18px: Story = {
  args: {
    className: "text-lg font-semibold",
  },
};

export const Bold14px: Story = {
  args: {
    className: "text-sm font-bold",
  },
};

export const Bold18px: Story = {
  args: {
    className: "text-lg font-bold",
  },
};
