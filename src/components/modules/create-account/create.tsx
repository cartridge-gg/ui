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

    // Render pill mode when selectedUsername is provided - matches Figma design exactly
    const renderPillInput = () => (
      <div
        className={cn(
          "flex flex-col border rounded-md border-primary bg-background-300", // Golden border for selected state
          (validation.status === "invalid" || error) &&
            "bg-destructive-100 border-destructive-100",
        )}
      >
        {/* Main input container with selected content */}
        <div className="relative">
          <div className="flex w-full rounded-md border border-primary bg-background-200 px-4 py-3 font-mono text-[15px] leading-5">
            {/* User icon container */}
            <div className="w-10 h-10 relative flex justify-center items-center mr-3">
              <div className="w-8 h-8 p-1 absolute rounded-full flex justify-center items-center gap-2.5 overflow-hidden">
                {/* Plus icon */}
                <div className="w-6 h-6 relative">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-foreground-100"
                  >
                    <path
                      d="M12 2v20M2 12h20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              {/* Circular dotted border around plus */}
              <div className="w-12 h-12 absolute border border-dashed border-foreground-400 rounded-full" />
            </div>

            {/* Username text */}
            <div className="flex-1 justify-center text-foreground-100 text-sm font-normal leading-tight flex items-center">
              {selectedUsername}
            </div>

            {/* Create New tag */}
            <div className="p-2 inline-flex flex-col justify-start items-start gap-2.5 ml-3">
              <div className="p-1 bg-background-300 rounded inline-flex justify-center items-center gap-0.5">
                <div className="flex justify-start items-center gap-0.5">
                  {/* Seedling icon */}
                  <svg viewBox="0 0 16 16" className="w-4 h-4">
                    <path
                      d="M10.5 3.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S8.17 2 9 2s1.5.67 1.5 1.5z"
                      fill="#33ff33"
                    />
                    <path
                      d="M9 6c-.83 0-1.5.67-1.5 1.5v5c0 .28.22.5.5.5s.5-.22.5-.5v-5c0-.28.22-.5.5-.5s.5.22.5.5v1c0 .28.22.5.5.5s.5-.22.5-.5v-1C10.5 6.67 9.83 6 9 6z"
                      fill="#33ff33"
                    />
                  </svg>
                </div>
                <div className="px-0.5 flex justify-center items-center gap-2.5">
                  <div className="text-center justify-center text-primary text-xs font-normal leading-none">
                    Create New
                  </div>
                </div>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={onSelectedUsernameRemove}
              className="ml-2 p-1 hover:bg-background-400 rounded-full transition-colors flex items-center justify-center"
              type="button"
            >
              <TimesCircleIcon className="w-5 h-5 text-foreground-300 hover:text-foreground-200" />
            </button>
          </div>

          {/* Placeholder text when not focused */}
          <div className="absolute left-4 -bottom-8 text-foreground-400 text-sm">
            Enter a Username
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
