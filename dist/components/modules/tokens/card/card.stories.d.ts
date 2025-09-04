import type { Meta, StoryObj } from "@storybook/react";
import { TokenCard } from "./";
declare const meta: Meta<typeof TokenCard>;
export default meta;
type Story = StoryObj<typeof TokenCard>;
export declare const Default: Story;
export declare const WithValue: Story;
export declare const Increasing: Story;
export declare const Decreasing: Story;
