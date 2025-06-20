import type { Meta, StoryObj } from "@storybook/react";
declare const P: ({ label, className }: {
    label: string;
    className: string;
}) => import("react/jsx-runtime").JSX.Element;
declare const meta: Meta<typeof P>;
export default meta;
type Story = StoryObj<typeof P>;
export declare const Regular14px: Story;
export declare const Regular16px: Story;
export declare const Medium16px: Story;
export declare const SemiBold16px: Story;
