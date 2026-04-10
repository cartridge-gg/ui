import type { Meta, StoryObj } from "@storybook/react";
import { NetworkSwitchToast } from "../components/primitives/toast/specialized-toasts";
declare const meta: Meta<typeof NetworkSwitchToast>;
export default meta;
type Story = StoryObj<typeof NetworkSwitchToast>;
export declare const StarknetMainnet: Story;
export declare const NumsChain: Story;
export declare const EthereumMainnet: Story;
export declare const CustomNetwork: Story;
