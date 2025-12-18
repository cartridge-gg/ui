import { useCallback } from "react";
import { CheckboxIcon } from "@/index";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

export interface CollectibleHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof collectibleHeaderVariants> {
  selectable?: boolean;
  selected?: boolean;
  onSelect?: () => void;
}

const collectibleHeaderVariants = cva(
  "group h-9 absolute w-full flex gap-2 px-1.5 py-1.5 justify-between items-center text-sm font-medium transition-all duration-150 z-10 bg-transparent",
  {
    variants: {
      variant: {
        default:
          "",
        faded:
          "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export function CollectibleHeader({
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
      )}
      {...props}
    >
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
