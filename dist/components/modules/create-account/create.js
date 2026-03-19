import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { AchievementPlayerAvatar, AchievementPlayerBadge, Input, PlusIcon, SeedlingIcon, SparklesIcon, TimesIcon, } from "../../../index";
import { cn } from "../../../utils";
import * as React from "react";
import { AccountSearchDropdown } from "./account-search-dropdown";
import { Status } from "./status";
export const CreateAccount = React.forwardRef(({ usernameField, validation, error, isLoading, autoFocus = false, showAutocomplete = false, selectedAccount, onUsernameChange, onUsernameFocus, onUsernameClear, onKeyDown, onAccountSelect, onSelectedUsernameRemove, mockResults, mockIsLoading, mockError, className, }, ref) => {
    const hasMockResults = React.useMemo(() => Boolean(mockResults && mockResults.length > 0), [mockResults]);
    const internalRef = React.useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(() => {
        if (usernameField.value === "") {
            return false;
        }
        // Initialize dropdown as open if we have autocomplete enabled, a value, and mock results
        return Boolean(showAutocomplete && usernameField.value.length > 0 && hasMockResults);
    });
    const [selectedIndex, setSelectedIndex] = React.useState(undefined);
    // Use imperative handle to expose the input ref
    React.useImperativeHandle(ref, () => internalRef.current);
    // Handle auto-focus internally
    React.useEffect(() => {
        if (autoFocus && internalRef.current) {
            internalRef.current.focus();
        }
    }, [autoFocus]);
    const handleFocus = React.useCallback(() => {
        onUsernameFocus();
        if (showAutocomplete) {
            const shouldOpen = usernameField.value.length > 0 || hasMockResults;
            setIsDropdownOpen(shouldOpen);
        }
    }, [
        onUsernameFocus,
        showAutocomplete,
        usernameField.value,
        hasMockResults,
    ]);
    const handleBlur = React.useCallback((e) => {
        // Only close if focus is not moving to the dropdown
        const relatedTarget = e.relatedTarget;
        if (relatedTarget &&
            relatedTarget.closest("[data-radix-popover-content]")) {
            return;
        }
        // Small delay to allow for dropdown item clicks before closing
        setTimeout(() => {
            setIsDropdownOpen(false);
            setSelectedIndex(undefined);
        }, 150);
    }, []);
    const handleAccountSelect = React.useCallback((result) => {
        onUsernameChange(result.username);
        setIsDropdownOpen(false);
        setSelectedIndex(undefined);
        onAccountSelect?.(result);
    }, [onUsernameChange, onAccountSelect]);
    const handleKeyDown = React.useCallback((e) => {
        // Handle escape key to close dropdown
        if (showAutocomplete && isDropdownOpen && e.key === "Escape") {
            e.preventDefault();
            setIsDropdownOpen(false);
            setSelectedIndex(undefined);
            return;
        }
        // If autocomplete is shown and dropdown is open, let dropdown handle arrow keys and enter
        if (showAutocomplete &&
            isDropdownOpen &&
            (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter")) {
            // Dropdown will handle these keys
            return;
        }
        // Otherwise, pass to parent handler
        onKeyDown(e);
    }, [onKeyDown, showAutocomplete, isDropdownOpen]);
    const handleInputChange = React.useCallback((e) => {
        const value = e.target.value.toLowerCase();
        onUsernameChange(value);
        if (showAutocomplete) {
            // Batch state updates
            React.startTransition(() => {
                const shouldOpen = Boolean(mockResults && mockResults.length > 0
                    ? value.length > 0
                    : value.length > 0);
                setIsDropdownOpen(shouldOpen);
                setSelectedIndex(undefined);
            });
        }
    }, [onUsernameChange, showAutocomplete, mockResults]);
    // Render pill mode when selectedAccount is provided - simple pill design
    const renderPillInput = () => (_jsxs("div", { className: cn("flex flex-col rounded-md bg-background-150", className), children: [_jsxs("div", { className: "h-12 flex items-center justify-between gap-1 p-2 bg-background-200 rounded shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] z-10", children: [_jsx(AchievementPlayerBadge, { icon: selectedAccount?.type === "create-new" ? (_jsx(PlusIcon, { variant: "line", className: "text-foreground-100" })) : (_jsx(AchievementPlayerAvatar, { username: selectedAccount?.username || "", className: "!h-5 !w-5" })), rank: selectedAccount?.type === "create-new" ? "empty" : undefined, variant: "ghost", size: "lg", className: "!w-8 !h-8", badgeClassName: cn(selectedAccount?.type === "create-new" && "text-foreground-400") }), _jsxs("div", { className: "flex flex-row items-center justify-between gap-1 flex-1", children: [_jsx("p", { className: "text-sm font-normal px-0.5 truncate", children: selectedAccount?.username || "N/A" }), _jsxs("div", { className: "flex items-center gap-3", children: [selectedAccount?.type === "create-new" ? (_jsxs("div", { className: "p-1 bg-background-300 rounded inline-flex justify-center items-center gap-0.5", children: [_jsx("div", { className: "flex justify-start items-center gap-0.5", children: _jsx(SeedlingIcon, { variant: "solid", className: "text-primary", size: "xs" }) }), _jsx("div", { className: "px-0.5 flex justify-center items-center gap-2.5", children: _jsx("p", { className: "text-center justify-center text-primary text-xs font-normal leading-none", children: "Create New" }) })] })) : selectedAccount?.points ? (_jsxs("div", { className: "flex items-center justify-center gap-0.5 p-1 bg-background-300 rounded text-foreground-100", children: [_jsx(SparklesIcon, { variant: "solid", size: "xs", className: "text-foreground-100" }), _jsx("div", { className: "flex items-center gap-1", children: _jsx("p", { className: "text-xs font-medium text-foreground-100", children: selectedAccount.points.toLocaleString() }) })] })) : null, _jsx(TimesIcon, { size: "sm", className: "text-foreground-400 hover:text-foreground-300 cursor-pointer", onClick: () => {
                                            onSelectedUsernameRemove?.();
                                            if (showAutocomplete) {
                                                setIsDropdownOpen(false);
                                                setSelectedIndex(undefined);
                                            }
                                        } })] })] })] }), _jsx(Status, { className: "bg-background-150 rounded-b-md", username: selectedAccount?.username || "", validation: validation, error: error })] }));
    const inputElement = selectedAccount ? (renderPillInput()) : (_jsxs(_Fragment, { children: [_jsxs("div", { className: cn("flex flex-col border rounded-md border-background-300 bg-background-300", (validation.status === "invalid" || error) &&
                    "bg-destructive-100 border-destructive-100", className), children: [_jsx(Input, { ref: internalRef, variant: "username", size: "lg", value: usernameField.value, spellCheck: false, placeholder: "Username", className: "relative z-1 focus:bg-spacer", autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", "data-1p-ignore": "true", "data-lpignore": "true", "data-form-type": "other", onFocus: handleFocus, onBlur: handleBlur, onChange: handleInputChange, onKeyDown: handleKeyDown, isLoading: validation.status === "validating", disabled: isLoading, onClear: () => {
                            onUsernameClear();
                            if (showAutocomplete) {
                                setIsDropdownOpen(false);
                                setSelectedIndex(undefined);
                            }
                        } }), (!isDropdownOpen || usernameField.value === "") && (_jsx(Status, { username: usernameField.value, validation: validation, error: error }))] }), isDropdownOpen && usernameField.value !== "" && (_jsx("div", { className: "h-8 bg-background-150 border-none" }) // Placeholder to prevent layout shift when dropdown opens
            )] }));
    const dropdownProps = React.useMemo(() => ({
        query: usernameField.value,
        isOpen: isDropdownOpen,
        onOpenChange: (open) => {
            // Only allow closing via blur or explicit close, not via Popover's auto-close
            if (!open) {
                return;
            }
            setIsDropdownOpen(open);
        },
        onSelect: handleAccountSelect,
        selectedIndex,
        onSelectedIndexChange: setSelectedIndex,
        mockResults,
        mockIsLoading: mockIsLoading ?? false,
        mockError,
    }), [
        usernameField.value,
        isDropdownOpen,
        handleAccountSelect,
        selectedIndex,
        mockResults,
        mockIsLoading,
        mockError,
    ]);
    if (showAutocomplete) {
        return (_jsx(AccountSearchDropdown, { ...dropdownProps, children: inputElement }));
    }
    return inputElement;
});
CreateAccount.displayName = "CreateAccount";
export default CreateAccount;
//# sourceMappingURL=create.js.map