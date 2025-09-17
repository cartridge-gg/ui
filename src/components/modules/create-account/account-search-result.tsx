import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
import {
  AchievementPlayerAvatar,
  SparklesIcon,
  PlusIcon,
  SeedlingIcon,
  AchievementPlayerBadge,
} from "@/index";
import { AccountSearchResult } from "@/utils/hooks/useAccountSearch";

const accountSearchResultVariants = cva(
  "px-3 py-2.5 flex gap-3 items-center select-none cursor-pointer transition-colors duration-150 relative",
  {
    variants: {
      variant: {
        default:
          "bg-background-200 hover:bg-background-300 text-foreground-100",
        selected: "bg-background-400 text-foreground-100",
        "create-new":
          "bg-background-200 hover:bg-background-300 text-foreground-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface AccountSearchResultItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "id">,
    VariantProps<typeof accountSearchResultVariants> {
  result: AccountSearchResult;
  isSelected?: boolean;
}

export const AccountSearchResultItem = React.forwardRef<
  HTMLDivElement,
  AccountSearchResultItemProps
>(({ result, isSelected, className, variant, ...props }, ref) => {
  const selectedVariant = isSelected
    ? "selected"
    : result.type === "create-new"
      ? "create-new"
      : "default";

  if (result.type === "create-new") {
    return (
      <div
        ref={ref}
        className={cn(
          "p-3 flex items-center gap-3 select-none cursor-pointer transition-colors duration-150",
          isSelected
            ? "bg-background-400"
            : "bg-background-200 hover:bg-background-300",
          className,
        )}
        {...props}
      >
        {/* User icon container with plus and dotted border - matching Figma design */}
        <div className="rounded-full flex justify-center items-center overflow-hidden border border-dashed border-foreground-400 w-10 h-10">
          <PlusIcon variant="line" className="w-4 h-4 text-foreground-100" />
        </div>

        {/* Username text */}
        <p className="flex-1 justify-center text-foreground-100 text-sm font-normal leading-tight">
          {result.username}
        </p>

        {/* Create New tag with seedling icon */}
        <div className="p-1 bg-background-300 rounded inline-flex justify-center items-center gap-0.5">
          <div className="flex justify-start items-center gap-0.5">
            <SeedlingIcon variant="solid" className="w-4 h-4 text-primary" />
          </div>
          <div className="px-0.5 flex justify-center items-center gap-2.5">
            <p className="text-center justify-center text-primary text-xs font-normal leading-none">
              Create New
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn(
        accountSearchResultVariants({ variant: selectedVariant }),
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <AchievementPlayerBadge
          icon={
            <AchievementPlayerAvatar
              username={result.username}
              className="h-full w-full"
            />
          }
          variant="default"
        />
        <div className="flex flex-row items-center justify-between gap-1 flex-1">
          <p className="text-sm font-medium px-0.5 truncate">
            {result.username}
          </p>

          {result.points && (
            <div className="flex items-center gap-0.5 text-foreground-300 p-3">
              <SparklesIcon
                variant="solid"
                size="sm"
                className="text-foreground-100"
              />
              <div className="flex items-center gap-1">
                <p className="text-xs font-medium text-foreground-100">
                  {result.points.toLocaleString()}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

AccountSearchResultItem.displayName = "AccountSearchResultItem";

export default AccountSearchResultItem;
