import type { Meta, StoryObj } from "@storybook/react";
import { CloseButton } from "../components/primitives/toast/toast";
declare const closeButtonMeta: Meta<typeof CloseButton>;
export default closeButtonMeta;
type CloseButtonStory = StoryObj<typeof CloseButton>;
export declare const DefaultCloseButton: CloseButtonStory;
export declare const TranslucentCloseButton: CloseButtonStory;
export declare const AllCloseButtonVariants: CloseButtonStory;
