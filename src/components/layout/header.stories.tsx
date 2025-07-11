import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { EthereumIcon, TransferIcon } from "@/index";
import { LayoutHeader } from "./index";

const meta: Meta<typeof LayoutHeader> = {
  title: "Layout/Header",
  component: LayoutHeader,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#161a17" }],
    },
  },
  args: {
    variant: "compressed",
    title: "Welcome to Keychain",
    description: "Secure your digital assets",
    onBack: undefined,
    onClose: undefined,
  },
} satisfies Meta<typeof LayoutHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Expanded: Story = {
  args: {
    variant: "expanded",
  },
};

export const Compressed: Story = {};

export const IconComponentProp: Story = {
  args: {
    Icon: TransferIcon,
  },
};

export const IconElementProp: Story = {
  args: {
    icon: <EthereumIcon size="lg" />,
  },
};

export const VeryLongTitle: Story = {
  args: {
    title: "This is a very long title that should be truncated",
    description:
      "This is a very long description that should be wrapped and demonstrate how text behaves when it extends beyond multiple lines. It's important to test how the UI handles lengthy content to ensure proper wrapping, readability, and overall visual appeal. How does this much longer description look in the component?",
  },
};

export const CustomIconUrl: Story = {
  args: {
    title: "Custom Icon URL Example",
    description: "This header uses a custom icon defined via CSS variable",
  },
  decorators: [
    (Story) => {
      // Set the custom icon URL CSS variable
      const originalIconUrl =
        document.documentElement.style.getPropertyValue("--theme-icon-url");
      document.documentElement.style.setProperty(
        "--theme-icon-url",
        "https://static.cartridge.gg/presets/slot/icon.svg",
      );

      // Clean up on unmount
      React.useEffect(() => {
        return () => {
          if (originalIconUrl) {
            document.documentElement.style.setProperty(
              "--theme-icon-url",
              originalIconUrl,
            );
          } else {
            document.documentElement.style.removeProperty("--theme-icon-url");
          }
        };
      }, []);

      return (
        <div>
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    docs: {
      description: {
        story:
          "This example demonstrates using a custom icon URL via the `--theme-icon-url` CSS variable. The header will automatically use this URL for the icon when no Icon or icon prop is provided.",
      },
    },
  },
};

export const CustomIconUrlExpanded: Story = {
  args: {
    variant: "expanded",
    title: "Custom Icon - Expanded View",
    description: "Same custom icon URL in expanded header variant",
  },
  decorators: [
    (Story) => {
      // Set the custom icon URL CSS variable
      const originalIconUrl =
        document.documentElement.style.getPropertyValue("--theme-icon-url");
      document.documentElement.style.setProperty(
        "--theme-icon-url",
        "https://static.cartridge.gg/presets/slot/icon.svg",
      );

      // Clean up on unmount
      React.useEffect(() => {
        return () => {
          if (originalIconUrl) {
            document.documentElement.style.setProperty(
              "--theme-icon-url",
              originalIconUrl,
            );
          } else {
            document.documentElement.style.removeProperty("--theme-icon-url");
          }
        };
      }, []);

      return (
        <div>
          <Story />
        </div>
      );
    },
  ],
};

export const WithBackButton: Story = {
  args: {
    onBack: () => {},
  },
};

export const WithCloseButton: Story = {
  args: {
    onClose: () => {},
  },
};