import type { Meta, StoryObj } from "@storybook/react";
import {
  AchievementToast,
  NetworkSwitchToast,
  ErrorToast,
  TransactionNotification,
  CloseButton,
  XPTag,
  ToastProgressBar,
} from "@/components/toast-components";
import { StarknetIcon } from "@/components/icons/brand";

// Achievement Toast Stories
const achievementMeta: Meta<typeof AchievementToast> = {
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

export default achievementMeta;

type AchievementStory = StoryObj<typeof AchievementToast>;

export const PacifistPath: AchievementStory = {
  args: {
    title: "Pacifist Path",
    subtitle: "Earned!",
    xpAmount: 100,
    progress: 66.7,
    isDraft: false,
  },
};

export const DiamondsDraft: AchievementStory = {
  args: {
    title: "Diamonds",
    subtitle: "Earned!",
    xpAmount: 100,
    progress: 16.7,
    isDraft: true,
  },
};

// Network Switch Toast Stories
const networkMeta: Meta<typeof NetworkSwitchToast> = {
  title: "Components/Toast Components/Network Switch Toast",
  component: NetworkSwitchToast,
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
    networkName: { control: "text" },
    onClose: { action: "closed" },
  },
};

type NetworkStory = StoryObj<typeof NetworkSwitchToast>;

export const StarknetMainnet: NetworkStory = {
  args: {
    networkName: "Starknet Mainnet",
    networkIcon: <StarknetIcon size="default" />,
  },
};

export const NumsChain: NetworkStory = {
  args: {
    networkName: "Nums Chain",
    networkIcon: <div className="w-6 h-6 bg-purple-500 rounded-full" />,
  },
};

// Error Toast Stories
const errorMeta: Meta<typeof ErrorToast> = {
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

type ErrorStory = StoryObj<typeof ErrorToast>;

export const ExecutionError: ErrorStory = {
  args: {
    message: "Execution Error",
    progress: 66.7,
  },
};

// Transaction Notification Stories
const transactionMeta: Meta<typeof TransactionNotification> = {
  title: "Components/Toast Components/Transaction Notification",
  component: TransactionNotification,
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
    status: {
      control: "select",
      options: ["confirming", "confirmed"],
    },
    isExpanded: { control: "boolean" },
    label: { control: "text" },
    progress: { control: { type: "range", min: 0, max: 100, step: 1 } },
    onClose: { action: "closed" },
  },
};

type TransactionStory = StoryObj<typeof TransactionNotification>;

export const ConfirmingExpanded: TransactionStory = {
  args: {
    status: "confirming",
    isExpanded: true,
    label: "New Game",
    progress: 66.7,
  },
};

export const ConfirmedExpanded: TransactionStory = {
  args: {
    status: "confirmed",
    isExpanded: true,
    progress: 100,
  },
};

export const ConfirmingCollapsed: TransactionStory = {
  args: {
    status: "confirming",
    isExpanded: false,
  },
};

export const ConfirmedCollapsed: TransactionStory = {
  args: {
    status: "confirmed",
    isExpanded: false,
  },
};

// Close Button Stories
const closeButtonMeta: Meta<typeof CloseButton> = {
  title: "Components/Toast Components/Close Button",
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

// XP Tag Stories
const xpTagMeta: Meta<typeof XPTag> = {
  title: "Components/Toast Components/XP Tag",
  component: XPTag,
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
    amount: { control: "number" },
    isMainnet: { control: "boolean" },
  },
};

type XPTagStory = StoryObj<typeof XPTag>;

export const MainnetXP: XPTagStory = {
  args: {
    amount: 100,
    isMainnet: true,
  },
};

export const TestnetXP: XPTagStory = {
  args: {
    amount: 100,
    isMainnet: false,
  },
};

// Toast Progress Bar Stories
const progressBarMeta: Meta<typeof ToastProgressBar> = {
  title: "Components/Toast Components/Toast Progress Bar",
  component: ToastProgressBar,
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
    progress: { control: { type: "range", min: 0, max: 100, step: 1 } },
    variant: {
      control: "select",
      options: ["achievement", "error"],
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[360px]">
        <Story />
      </div>
    ),
  ],
};

type ProgressBarStory = StoryObj<typeof ToastProgressBar>;

export const AchievementProgress: ProgressBarStory = {
  args: {
    progress: 66.7,
    variant: "achievement",
  },
};

export const ErrorProgress: ProgressBarStory = {
  args: {
    progress: 66.7,
    variant: "error",
  },
};

// Combined Toast Showcase
const showcaseMeta: Meta = {
  title: "Components/Toast Components/Showcase",
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
};

export const AllToasts = () => (
  <div className="flex flex-col gap-4 p-4">
    <div className="grid grid-cols-1 gap-4">
      <AchievementToast
        title="Pacifist Path"
        subtitle="Earned!"
        xpAmount={100}
        progress={66.7}
        isDraft={false}
      />
      <AchievementToast
        title="Diamonds"
        subtitle="Earned!"
        xpAmount={100}
        progress={16.7}
        isDraft={true}
      />
      <NetworkSwitchToast
        networkName="Starknet Mainnet"
        networkIcon={<StarknetIcon size="default" />}
      />
      <NetworkSwitchToast
        networkName="Nums Chain"
        networkIcon={<div className="w-6 h-6 bg-purple-500 rounded-full" />}
      />
      <ErrorToast message="Execution Error" progress={66.7} />
      <TransactionNotification
        status="confirming"
        isExpanded={true}
        label="New Game"
        progress={66.7}
      />
      <TransactionNotification
        status="confirmed"
        isExpanded={true}
        progress={100}
      />
      <div className="flex gap-2">
        <TransactionNotification status="confirming" isExpanded={false} />
        <TransactionNotification status="confirmed" isExpanded={false} />
      </div>
    </div>
  </div>
);

AllToasts.parameters = showcaseMeta.parameters;

// Export individual component stories
export {
  achievementMeta as AchievementToastMeta,
  networkMeta as NetworkSwitchToastMeta,
  errorMeta as ErrorToastMeta,
  transactionMeta as TransactionNotificationMeta,
  closeButtonMeta as CloseButtonMeta,
  xpTagMeta as XPTagMeta,
  progressBarMeta as ToastProgressBarMeta,
  showcaseMeta as ShowcaseMeta,
};