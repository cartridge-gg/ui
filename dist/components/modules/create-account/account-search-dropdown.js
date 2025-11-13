import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../../../utils";
import { Popover, PopoverContent, PopoverAnchor, } from "../../../components/primitives/popover";
import { useAccountSearch, } from "../../../utils/hooks/useAccountSearch";
import { AccountSearchResultItem } from "./account-search-result";
export const AccountSearchDropdown = React.forwardRef(({ query, isOpen, onOpenChange, onSelect, children, selectedIndex, onSelectedIndexChange, mockResults, mockIsLoading, mockError, }, ref) => {
    // Use mock data if provided, otherwise use real hook
    const hookData = mockResults !== undefined
        ? { results: [], isLoading: false, error: undefined }
        : useAccountSearch(query, {
            minLength: 1,
            debounceMs: 300,
            maxResults: 5,
        });
    const results = mockResults ?? hookData.results;
    const isLoading = mockIsLoading ?? hookData.isLoading;
    const error = mockError ?? hookData.error;
    const hasResults = results.length > 0;
    const shouldShowDropdown = React.useMemo(() => {
        return Boolean(isOpen && query.length > 0 && (hasResults || isLoading));
    }, [isOpen, hasResults, isLoading, query.length]);
    const handleSelect = React.useCallback((result) => {
        onSelect(result);
        onOpenChange(false);
        onSelectedIndexChange?.(undefined);
    }, [onSelect, onOpenChange, onSelectedIndexChange]);
    // Handle keyboard navigation
    const handleKeyDown = React.useCallback((event) => {
        if (!shouldShowDropdown)
            return;
        switch (event.key) {
            case "ArrowDown": {
                event.preventDefault();
                const nextIndex = selectedIndex === undefined
                    ? 0
                    : Math.min(selectedIndex + 1, results.length - 1);
                onSelectedIndexChange?.(nextIndex);
                break;
            }
            case "ArrowUp": {
                event.preventDefault();
                const prevIndex = selectedIndex === undefined
                    ? results.length - 1
                    : Math.max(selectedIndex - 1, 0);
                onSelectedIndexChange?.(prevIndex);
                break;
            }
            case "Enter": {
                event.preventDefault();
                if (selectedIndex !== undefined && results[selectedIndex]) {
                    handleSelect(results[selectedIndex]);
                }
                break;
            }
            case "Escape": {
                event.preventDefault();
                onOpenChange(false);
                onSelectedIndexChange?.(undefined);
                break;
            }
        }
    }, [
        shouldShowDropdown,
        selectedIndex,
        results,
        onSelectedIndexChange,
        onOpenChange,
        handleSelect,
    ]);
    // Attach keyboard event listener to the trigger element
    React.useEffect(() => {
        const handleGlobalKeyDown = (event) => {
            handleKeyDown(event);
        };
        if (shouldShowDropdown) {
            document.addEventListener("keydown", handleGlobalKeyDown);
            return () => {
                document.removeEventListener("keydown", handleGlobalKeyDown);
            };
        }
    }, [shouldShowDropdown, handleKeyDown]);
    return (_jsxs(Popover, { open: isOpen, onOpenChange: onOpenChange, children: [_jsx(PopoverAnchor, { ref: ref, children: children }), shouldShowDropdown && (_jsxs(PopoverContent, { className: cn("w-[--radix-popover-trigger-width] p-0 bg-spacer border-none -translate-y-7 divide-y divide-spacer", "max-h-[300px] overflow-y-auto"), align: "start", sideOffset: 4, onOpenAutoFocus: (e) => e.preventDefault(), onCloseAutoFocus: (e) => e.preventDefault(), children: [isLoading && (_jsx("div", { className: "px-3 py-2.5 text-sm text-foreground-400", children: "Searching..." })), error && (_jsx("div", { className: "px-3 py-2.5 text-sm text-destructive-100", children: "Failed to search accounts" })), !isLoading &&
                        !error &&
                        results.length === 0 &&
                        query.length > 0 && (_jsx("div", { className: "px-3 py-2.5 text-sm text-foreground-400", children: "No accounts found" })), !isLoading &&
                        !error &&
                        results.map((result, index) => (_jsx(AccountSearchResultItem, { result: result, isSelected: selectedIndex === index, onClick: () => handleSelect(result), onMouseEnter: () => onSelectedIndexChange?.(index), onMouseLeave: () => onSelectedIndexChange?.(undefined) }, result.id)))] }))] }));
});
AccountSearchDropdown.displayName = "AccountSearchDropdown";
export default AccountSearchDropdown;
//# sourceMappingURL=account-search-dropdown.js.map