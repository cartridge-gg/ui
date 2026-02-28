import type { Meta, StoryObj } from "@storybook/react";
import { CollectibleItemAction } from "./item-action";
declare const meta: Meta<typeof CollectibleItemAction>;
export default meta;
type Story = StoryObj<typeof CollectibleItemAction>;
export declare const List: Story;
export declare const Unlist: Story;
export declare const Purchase: Story;
