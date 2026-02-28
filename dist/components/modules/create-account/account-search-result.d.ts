import { AccountSearchResult } from "../../../utils/hooks/useAccountSearch";
import { VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
declare const accountSearchResultVariants: (props?: ({
    variant?: "create-new" | "default" | "selected" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface AccountSearchResultItemProps extends Omit<HTMLAttributes<HTMLDivElement>, "id">, VariantProps<typeof accountSearchResultVariants> {
    result: AccountSearchResult;
    isSelected?: boolean;
}
export declare const AccountSearchResultItem: React.ForwardRefExoticComponent<AccountSearchResultItemProps & React.RefAttributes<HTMLDivElement>>;
export default AccountSearchResultItem;
