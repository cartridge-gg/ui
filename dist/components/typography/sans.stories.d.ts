import type { Meta, StoryObj } from "@storybook/react";
declare const P: ({ label, className }: {
    label: string;
    className: string;
}) => import("react/jsx-runtime").JSX.Element;
declare const meta: Meta<typeof P>;
export default meta;
type Story = StoryObj<typeof P>;
export declare const Regular10px: Story;
export declare const Regular12px: Story;
export declare const Regular14px: Story;
export declare const Regular16px: Story;
export declare const Medium12px: Story;
export declare const Medium14px: Story;
export declare const SemiBold12px: Story;
export declare const SemiBold14px: Story;
export declare const SemiBold18px: Story;
export declare const Bold14px: Story;
export declare const Bold18px: Story;
