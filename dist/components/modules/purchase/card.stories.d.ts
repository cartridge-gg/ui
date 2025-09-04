import type { StoryObj } from "@storybook/react";
import { PurchaseCard } from "./card";
declare const meta: {
    title: string;
    component: ({ text, icon, network, networkIcon, className, ...props }: import("./card").PurchaseCardProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    parameters: {
        layout: string;
    };
    argTypes: {
        text: {
            description: string;
            control: {
                type: "text";
            };
        };
        icon: {
            description: string;
            control: {
                type: "object";
            };
        };
        network: {
            description: string;
            control: {
                type: "text";
            };
        };
        networkIcon: {
            description: string;
            control: {
                type: "object";
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof PurchaseCard>;
export declare const Controller: Story;
export declare const CreditCard: Story;
export declare const Starknet: Story;
export declare const Google: Story;
export declare const PhantomWallet: Story;
export declare const ReadyWallet: Story;
export declare const RabbyWallet: Story;
