import { AccountSearchResult } from "../../../utils/hooks/useAccountSearch";
import * as React from "react";
import { ValidationState } from "./status";
type CreateAccountProps = {
    usernameField: {
        value: string;
        error?: Error;
    };
    validation: ValidationState;
    error?: Error;
    isLoading: boolean;
    autoFocus?: boolean;
    showAutocomplete?: boolean;
    selectedAccount?: AccountSearchResult;
    onUsernameChange: (value: string) => void;
    onUsernameFocus: () => void;
    onUsernameClear: () => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
    onAccountSelect?: (result: AccountSearchResult) => void;
    onSelectedUsernameRemove?: () => void;
    mockResults?: AccountSearchResult[];
    mockIsLoading?: boolean;
    mockError?: Error;
};
export declare const CreateAccount: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & CreateAccountProps & React.RefAttributes<HTMLInputElement>>;
export default CreateAccount;
