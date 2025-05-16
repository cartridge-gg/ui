import type { Meta, StoryObj } from "@storybook/react";
import { ThumbnailCollectible } from "./collectible";
declare const meta: Meta<typeof ThumbnailCollectible>;
export default meta;
type Story = StoryObj<typeof ThumbnailCollectible>;
export declare const Default: Story;
export declare const Fallback: Story;
export declare const Loading: Story;
export declare const Error: Story;
