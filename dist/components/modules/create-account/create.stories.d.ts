import type { Meta, StoryObj } from "@storybook/react";
import { CreateAccount } from "./create";
declare const meta: Meta<typeof CreateAccount>;
export default meta;
type Story = StoryObj<typeof CreateAccount>;
export declare const Default: Story;
export declare const DefaultValidating: Story;
export declare const DefaultLogin: Story;
export declare const DefaultNew: Story;
export declare const ErrorTooShort: Story;
export declare const ErrorSpecialCharacter: Story;
export declare const ErrorTimeout: Story;
export declare const WithAutoFocus: Story;
export declare const WithAutocomplete: Story;
export declare const WithAutocompleteAndValue: Story;
export declare const LongError: Story;
export declare const InteractivePillDemo: {
    render: () => import("react/jsx-runtime").JSX.Element;
    parameters: {
        docs: {
            description: {
                story: string;
            };
        };
    };
};
export declare const PillWithExistingUser: Story;
export declare const PillWithExistingUserWithoutPoints: Story;
export declare const PillWithNewUser: Story;
