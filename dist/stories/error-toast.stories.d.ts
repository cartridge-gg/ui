import type { Meta, StoryObj } from "@storybook/react";
import { ErrorToast } from "../components/primitives/toast/specialized-toasts";
declare const meta: Meta<typeof ErrorToast>;
export default meta;
type Story = StoryObj<typeof ErrorToast>;
export declare const ExecutionError: Story;
export declare const ConnectionError: Story;
export declare const ValidationError: Story;
export declare const TimeoutError: Story;
