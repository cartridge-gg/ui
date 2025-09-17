import { cn } from "@/utils";
import { Status, ValidationState } from "./status";
import { Input } from "@/index";
import { AccountSearchDropdown } from "./account-search-dropdown";
import { AccountSearchResult } from "@/utils/hooks/useAccountSearch";
import { TimesCircleIcon } from "@/index";
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
  showAutocomplete?: boolean;
  selectedUsername?: string; // For pill functionality
  onUsernameChange: (value: string) => void;
  onUsernameFocus: () => void;
  onUsernameClear: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onAccountSelect?: (result: AccountSearchResult) => void;
  onSelectedUsernameRemove?: () => void; // For removing pill
  // Mock data props for Storybook
  mockResults?: AccountSearchResult[];
  mockIsLoading?: boolean;
  mockError?: Error;
};

export const CreateAccount = React.forwardRef<
  HTMLInputElement,
  React.HTMLAttributes<HTMLDivElement> & CreateAccountProps
>(
  (
    {
      usernameField,
      validation,
      error,
      isLoading,
      autoFocus = false,
      showAutocomplete = false,
      selectedUsername,
      onUsernameChange,
      onUsernameFocus,
      onUsernameClear,
      onKeyDown,
      onAccountSelect,
      onSelectedUsernameRemove,
      mockResults,
      mockIsLoading,
      mockError,
      className,
    },
    ref,
  ) => {
    const internalRef = React.useRef<HTMLInputElement>(null);
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(() => {
      if (usernameField.value === "") {
        return false;
      }

      // Initialize dropdown as open if we have autocomplete enabled, a value, and mock results
      return Boolean(
        showAutocomplete &&
          usernameField.value.length > 0 &&
          mockResults &&
          mockResults.length > 0,
      );
    });
    const [selectedIndex, setSelectedIndex] = React.useState<
      number | undefined
    >();

    // Use imperative handle to expose the input ref
    React.useImperativeHandle(ref, () => internalRef.current!);

    // Handle auto-focus internally
    React.useEffect(() => {
      if (autoFocus && internalRef.current) {
        internalRef.current.focus();
      }
    }, [autoFocus]);

    const handleFocus = React.useCallback(() => {
      onUsernameFocus();
      if (showAutocomplete) {
        // Only open if we have a value or mock results
        const shouldOpen =
          usernameField.value.length > 0 ||
          Boolean(mockResults && mockResults.length > 0);
        setIsDropdownOpen(shouldOpen);
        return;
      }
    }, [onUsernameFocus, showAutocomplete, usernameField.value, mockResults]);

    const handleAccountSelect = React.useCallback(
      (result: AccountSearchResult) => {
        onUsernameChange(result.username);
        setIsDropdownOpen(false);
        setSelectedIndex(undefined);
        onAccountSelect?.(result);
      },
      [onUsernameChange, onAccountSelect],
    );

    const handleKeyDown = React.useCallback(
      (e: React.KeyboardEvent) => {
        // If autocomplete is shown and dropdown is open, let dropdown handle arrow keys and enter
        if (
          showAutocomplete &&
          isDropdownOpen &&
          (e.key === "ArrowDown" ||
            e.key === "ArrowUp" ||
            e.key === "Enter" ||
            e.key === "Escape")
        ) {
          // Dropdown will handle these keys
          return;
        }

        // Otherwise, pass to parent handler
        onKeyDown(e);
      },
      [onKeyDown, showAutocomplete, isDropdownOpen],
    );

    // Render pill mode when selectedUsername is provided - simple pill design
    const renderPillInput = () => (
      <div className="flex flex-col border rounded-md border-background-300 bg-background-300">
        <div className="p-1.5 bg-spacer rounded-md">
          <div className="flex items-center justify-between gap-2 p-2 pl-3 bg-background-300 border-l-4 border-background-400 rounded-md">
            <span className="text-foreground-100 font-mono text-sm">
              {selectedUsername}
            </span>
            <button
              onClick={onSelectedUsernameRemove}
              className="p-1 hover:bg-background-400 rounded-full transition-colors flex items-center justify-center"
              type="button"
            >
              <TimesCircleIcon className="w-4 h-4 text-foreground-300 hover:text-foreground-200" />
            </button>
          </div>
        </div>
        <Status
          username={selectedUsername || ""}
          validation={validation}
          error={error}
        />
      </div>
    );

    const inputElement = selectedUsername ? (
      renderPillInput()
    ) : (
      <>
        <div
          className={cn(
            "flex flex-col border rounded-md border-background-300 bg-background-300",
            (validation.status === "invalid" || error) &&
              "bg-destructive-100 border-destructive-100",
            className,
          )}
        >
          <Input
            ref={internalRef}
            variant="username"
            size="lg"
            value={usernameField.value}
            spellCheck={false}
            placeholder="Username"
            className="relative z-1 focus:bg-spacer"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            data-1p-ignore="true"
            data-lpignore="true"
            data-form-type="other"
            onFocus={handleFocus}
            onChange={(e) => {
              const value = e.target.value.toLowerCase();
              onUsernameChange(value);
              if (showAutocomplete) {
                // Keep dropdown open if we have mock results and value, otherwise use value length
                const shouldOpen = Boolean(
                  mockResults && mockResults.length > 0
                    ? value.length > 0
                    : value.length > 0,
                );
                setIsDropdownOpen(shouldOpen);
                setSelectedIndex(undefined);
              }
            }}
            onKeyDown={handleKeyDown}
            isLoading={validation.status === "validating"}
            disabled={isLoading}
            onClear={() => {
              onUsernameClear();
              if (showAutocomplete) {
                setIsDropdownOpen(false);
                setSelectedIndex(undefined);
              }
            }}
          />
          {(!isDropdownOpen || usernameField.value === "") && (
            <Status
              username={usernameField.value}
              validation={validation}
              error={error}
            />
          )}
        </div>
        {isDropdownOpen && usernameField.value !== "" && (
          <div className="h-8 bg-background-150 border-none" /> // Placeholder to prevent layout shift when dropdown opens
        )}
      </>
    );

    if (showAutocomplete) {
      return (
        <AccountSearchDropdown
          query={usernameField.value}
          isOpen={isDropdownOpen}
          onOpenChange={setIsDropdownOpen}
          onSelect={handleAccountSelect}
          selectedIndex={selectedIndex}
          onSelectedIndexChange={setSelectedIndex}
          mockResults={mockResults}
          mockIsLoading={mockIsLoading ?? false}
          mockError={mockError}
        >
          {inputElement}
        </AccountSearchDropdown>
      );
    }

    return inputElement;
  },
);

CreateAccount.displayName = "CreateAccount";

export default CreateAccount;
