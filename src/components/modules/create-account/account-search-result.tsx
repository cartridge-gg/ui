import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
import {
  AchievementPlayerAvatar,
  Separator,
  SparklesIcon,
  PlusIcon,
  SeedlingIcon,
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

  const formatLastOnline = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };

  if (result.type === "create-new") {
    return (
      <div
        ref={ref}
        className={cn(
          "px-4 py-3 flex items-center gap-3 select-none cursor-pointer transition-colors duration-150",
          isSelected
            ? "bg-background-400"
            : "bg-background-200 hover:bg-background-300",
          className,
        )}
        {...props}
      >
        {/* User icon container with plus and dotted border - matching Figma design */}
        <div className="w-10 h-10 relative flex justify-center items-center">
          <div className="w-8 h-8 p-1 absolute rounded-full flex justify-center items-center gap-2.5 overflow-hidden">
            <PlusIcon variant="line" className="w-4 h-4 text-foreground-100" />
          </div>
          {/* Circular dotted border around plus */}
          <div className="w-12 h-12 absolute border border-dashed border-foreground-400 rounded-full" />
        </div>

        {/* Username text */}
        <div className="flex-1 justify-center text-foreground-100 text-sm font-normal leading-tight flex items-center">
          {result.username}
        </div>

        {/* Create New tag with seedling icon */}
        <div className="p-1 bg-background-300 rounded inline-flex justify-center items-center gap-0.5">
          <div className="flex justify-start items-center gap-0.5">
            <SeedlingIcon variant="solid" className="w-4 h-4 text-primary" />
          </div>
          <div className="px-0.5 flex justify-center items-center gap-2.5">
            <div className="text-center justify-center text-primary text-xs font-normal leading-none">
              Create New
            </div>
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
        <div className="flex items-center gap-0.5">
          <AchievementPlayerAvatar username={result.username} size="sm" />
          <p className="text-sm font-medium px-0.5 truncate">
            {result.username}
          </p>
        </div>

        {result.points && (
          <>
            <Separator
              orientation="vertical"
              className="w-px h-2 bg-background-400"
            />
            <div className="flex items-center gap-1 text-foreground-300">
              <SparklesIcon variant="line" size="sm" />
              <p className="text-sm font-medium">
                {result.points.toLocaleString()}
              </p>
            </div>
          </>
        )}
      </div>

      {result.lastOnline && (
        <div className="flex flex-col items-end gap-0.5 text-xs text-foreground-400 min-w-0">
          <span className="whitespace-nowrap">Last Online</span>
          <span className="whitespace-nowrap">
            {formatLastOnline(result.lastOnline)}
          </span>
        </div>
      )}
    </div>
  );
});

AccountSearchResultItem.displayName = "AccountSearchResultItem";

export default AccountSearchResultItem;
