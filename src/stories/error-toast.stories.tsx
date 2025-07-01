import type { Meta, StoryObj } from "@storybook/react";
import { ErrorToast } from "@/components/toast-components";

const meta: Meta<typeof ErrorToast> = {
  title: "Components/Toast Components/Error Toast",
  component: ErrorToast,
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
    message: { control: "text" },
    progress: { control: { type: "range", min: 0, max: 100, step: 1 } },
    onClose: { action: "closed" },
  },
};

export default meta;

type Story = StoryObj<typeof ErrorToast>;

export const ExecutionError: Story = {
  args: {
    message: "Execution Error",
    progress: 66.7,
  },
};

export const ConnectionError: Story = {
  args: {
    message: "Connection Failed",
    progress: 25,
  },
};

export const ValidationError: Story = {
  args: {
    message: "Invalid Transaction",
    progress: 90,
  },
};

export const TimeoutError: Story = {
  args: {
    message: "Request Timeout",
    progress: 50,
  },
};