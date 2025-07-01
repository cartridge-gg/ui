import type { Meta, StoryObj } from "@storybook/react";
import { CloseButton, XPTag, ToastProgressBar } from "@/components/toast-components";

// Close Button Stories
const closeButtonMeta: Meta<typeof CloseButton> = {
  title: "Components/Toast Components/Supporting/Close Button",
  component: CloseButton,
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
    variant: {
      control: "select",
      options: ["default", "hover", "translucent", "translucent-hover"],
    },
    onClick: { action: "clicked" },
  },
};

export default closeButtonMeta;

type CloseButtonStory = StoryObj<typeof CloseButton>;

export const DefaultCloseButton: CloseButtonStory = {
  args: {
    variant: "default",
  },
};

export const HoverCloseButton: CloseButtonStory = {
  args: {
    variant: "hover",
  },
};

export const TranslucentCloseButton: CloseButtonStory = {
  args: {
    variant: "translucent",
  },
};

export const TranslucentHoverCloseButton: CloseButtonStory = {
  args: {
    variant: "translucent-hover",
  },
};

export const AllCloseButtonVariants: CloseButtonStory = {
  render: () => (
    <div className="flex gap-4 items-center">
      <div className="text-center">
        <CloseButton variant="default" />
        <p className="text-white text-xs mt-1">Default</p>
      </div>
      <div className="text-center">
        <CloseButton variant="hover" />
        <p className="text-white text-xs mt-1">Hover</p>
      </div>
      <div className="text-center">
        <CloseButton variant="translucent" />
        <p className="text-white text-xs mt-1">Translucent</p>
      </div>
      <div className="text-center">
        <CloseButton variant="translucent-hover" />
        <p className="text-white text-xs mt-1">Translucent Hover</p>
      </div>
    </div>
  ),
};