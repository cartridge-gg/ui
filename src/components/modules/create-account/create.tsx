import { cn } from "@/utils";
import { Status, ValidationState } from "./status";
import { Input } from "@/index";
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

export const CreateAccount = React.forwardRef<
  HTMLInputElement,
  CreateAccountProps
>(
  (
    {
      usernameField,
      validation,
      error,
      isLoading,
      autoFocus = false,
      onUsernameChange,
      onUsernameFocus,
      onUsernameClear,
      onKeyDown,
    },
    ref,
  ) => {
    const internalRef = React.useRef<HTMLInputElement>(null);

    // Use imperative handle to expose the input ref
    React.useImperativeHandle(ref, () => internalRef.current!);

    // Handle auto-focus internally
    React.useEffect(() => {
      if (autoFocus && internalRef.current) {
        internalRef.current.focus();
      }
    }, [autoFocus]);

    return (
      <div
        className={cn(
          "flex flex-col border rounded-md border-background-300 bg-background-300",
          (validation.status === "invalid" || error) &&
            "bg-destructive-100 border-destructive-100",
        )}
      >
        <Input
          ref={internalRef}
          variant="username"
          size="lg"
          value={usernameField.value}
          spellCheck={false}
          placeholder="Username"
          className="relative z-1"
          onFocus={onUsernameFocus}
          onChange={(e) => {
            onUsernameChange(e.target.value.toLowerCase());
          }}
          onKeyDown={onKeyDown}
          isLoading={validation.status === "validating"}
          disabled={isLoading}
          onClear={onUsernameClear}
        />
        <Status
          username={usernameField.value}
          validation={validation}
          error={error}
        />
      </div>
    );
  },
);

CreateAccount.displayName = "CreateAccount";

export default CreateAccount;
