import type { StoryObj } from "@storybook/react";
import { SocialCard } from "./card";
declare const meta: {
    title: string;
    component: ({ text, icon, handle, isDisabled, isCompleted, isExpired, className, onClick, ...props }: import("./card").SocialCardProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof SocialCard>;
export declare const Default: Story;
export declare const NoHandleClickable: Story;
export declare const WithHandle: Story;
export declare const Disabled: Story;
export declare const Expired: Story;
export declare const Completed: Story;
