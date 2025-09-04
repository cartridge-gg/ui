import type { Meta, StoryObj } from "@storybook/react";
import { ERC20Detail } from "./detail";
declare const meta: Meta<typeof ERC20Detail>;
export default meta;
type Story = StoryObj<typeof ERC20Detail>;
export declare const Default: Story;
export declare const PublicChain: Story;
export declare const PrivateChain: Story;
