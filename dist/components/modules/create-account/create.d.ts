import { ValidationState } from "./status";
type CreateAccountProps = {
    usernameField: {
        value: string;
        error?: Error;
    };
    validation: ValidationState;
    error?: Error;
    isLoading: boolean;
    onUsernameChange: (value: string) => void;
    onUsernameFocus: () => void;
    onUsernameClear: () => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
};
export declare function CreateAccount({ usernameField, validation, error, isLoading, onUsernameChange, onUsernameFocus, onUsernameClear, onKeyDown, }: CreateAccountProps): import("react/jsx-runtime").JSX.Element;
export default CreateAccount;
