import { CheckboxIcon, Thumbnail } from "@/index";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { useCallback } from "react";

export interface CollectibleHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof collectibleHeaderVariants> {
  title: string;
  icon?: string | null;
  selectable?: boolean;
  selected?: boolean;
  onSelect?: () => void;
}

const collectibleHeaderVariants = cva(
  "group h-9 relative flex gap-2 px-2 py-1.5 justify-between items-center text-sm font-medium transition-all duration-150",
  {
    variants: {
      variant: {
        default:
          "bg-background-200 group-hover:bg-background-300 text-foreground-100",
        faded:
          "bg-background-100 group-hover:bg-background-200 text-foreground-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export function CollectibleHeader({
  title,
  icon,
  selectable,
  selected,
  onSelect,
  variant,
  className,
  ...props
}: CollectibleHeaderProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      onSelect?.();
    },
    [onSelect],
  );

  return (
    <div
      className={cn(
        collectibleHeaderVariants({ variant }),
        className,
        icon === undefined && "pl-2.5",
      )}
      {...props}
    >
      <div className="flex items-center gap-1.5 overflow-hidden">
        <Thumbnail
          variant="light"
          size="sm"
          icon={icon === null ? undefined : icon}
          className={icon === undefined ? "hidden" : ""}
        />
        <p className={cn("truncate", (selected || selectable) && "pr-6")}>
          {title}
        </p>
      </div>
      {selected && (
        <div
          className="absolute right-[9px] top-1/2 -translate-y-1/2 text-foreground-100 cursor-pointer"
          onClick={handleClick}
        >
          <CheckboxIcon variant="line" size="sm" />
        </div>
      )}
      {selectable && !selected && (
        <div
          className="absolute right-[9px] top-1/2 -translate-y-1/2 text-background-500 hover:text-foreground-200 cursor-pointer"
          onClick={handleClick}
        >
          <CheckboxIcon variant="unchecked-line" size="sm" />
        </div>
      )}
    </div>
  );
}

export default CollectibleHeader;
