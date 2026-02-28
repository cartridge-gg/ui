import { Meta, StoryObj } from "@storybook/react";
declare const meta: Meta<typeof Accordion>;
export default meta;
type Story = StoryObj<typeof Accordion>;
export declare const Default: Story;
declare function Accordion({ triggerColor }: {
    triggerColor?: string;
}): import("react/jsx-runtime").JSX.Element;
export declare const TriggerColor: Story;
