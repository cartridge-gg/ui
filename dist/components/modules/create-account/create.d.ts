import { ValidationState } from "./status";
import * as React from "react";
type CreateAccountProps = {
    usernameField: {
        value: string;
        error?: Error;
    };
    validation: ValidationState;
    error?: Error;
    isLoading: boolean;
    autoFocus?: boolean;
    onUsernameChange: (value: string) => void;
    onUsernameFocus: () => void;
    onUsernameClear: () => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
};
export declare const CreateAccount: React.ForwardRefExoticComponent<CreateAccountProps & React.RefAttributes<HTMLInputElement>>;
export default CreateAccount;
