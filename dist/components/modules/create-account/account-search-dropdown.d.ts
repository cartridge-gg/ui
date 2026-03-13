import * as React from "react";
import { AccountSearchResult } from "../../../utils/hooks/useAccountSearch";
export interface AccountSearchDropdownProps {
    query: string;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    onSelect: (result: AccountSearchResult) => void;
    children: React.ReactNode;
    selectedIndex?: number;
    onSelectedIndexChange?: (index: number | undefined) => void;
    mockResults?: AccountSearchResult[];
    mockIsLoading?: boolean;
    mockError?: Error;
}
export declare const AccountSearchDropdown: React.ForwardRefExoticComponent<AccountSearchDropdownProps & React.RefAttributes<HTMLDivElement>>;
export default AccountSearchDropdown;
