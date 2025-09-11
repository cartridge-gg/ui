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
  CreateAccountProps
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
    },
    ref,
  ) => {
    const internalRef = React.useRef<HTMLInputElement>(null);
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(() => {
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

    // Render pill mode when selectedUsername is provided
    const renderPillInput = () => (
      <div
        className={cn(
          "flex flex-col border rounded-md border-background-300 bg-background-300",
          (validation.status === "invalid" || error) &&
            "bg-destructive-100 border-destructive-100",
        )}
      >
        <div className="bg-background-200 relative rounded-md p-1.5 w-full">
          <div className="bg-background-300 flex items-center gap-2 px-3 py-2 rounded-sm border-l-4 border-background-400 shadow-sm">
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 flex items-center justify-center">
                {/* Plus icon for Create New */}
                <svg viewBox="0 0 20 20" className="w-4 h-4 fill-primary">
                  <path d="M16.667 9.167h-6.25V2.917a.833.833 0 0 0-1.667 0v6.25H2.5a.833.833 0 1 0 0 1.666h6.25v6.25a.833.833 0 0 0 1.667 0v-6.25h6.25a.833.833 0 1 0 0-1.666Z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-primary">
                {selectedUsername}
              </span>
            </div>
            <button
              onClick={onSelectedUsernameRemove}
              className="ml-auto p-0.5 hover:bg-background-400 rounded-full transition-colors"
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
        <Status
          username={usernameField.value}
          validation={validation}
          error={error}
        />
      </div>
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
