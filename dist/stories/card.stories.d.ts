import React from "react";
import { Meta, StoryObj } from "@storybook/react";
declare const meta: Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof Card>;
export declare const Default: Story;
export declare const OnlyTitle: Story;
export declare const IconHeader: Story;
export declare const CardList: Story;
declare function Card({ variant, title, description, icon, }: {
    variant?: "content" | "list";
    title: string;
    description?: string;
    icon?: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
