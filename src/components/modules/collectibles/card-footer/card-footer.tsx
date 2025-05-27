import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";

export interface CollectibleCardFooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof collectibleCardFooterVariants> {
  price?: string;
  lastSale?: string;
}

const collectibleCardFooterVariants = cva(
  "px-3 py-2 flex flex-col gap-0.5 text-foreground-400 data-[hidden=true]:hidden",
  {
    variants: {
      variant: {
        default: "bg-background-200 group-hover:bg-background-300",
        faded: "bg-background-100 group-hover:bg-background-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export function CollectibleCardFooter({
  price,
  lastSale,
  variant,
  className,
  ...props
}: CollectibleCardFooterProps) {
  return (
    <div
      data-hidden={!price && !lastSale}
      className={cn(collectibleCardFooterVariants({ variant }), className)}
      {...props}
    >
      <div className="flex justify-between items-center text-[10px]/3">
        <p>Price</p>
        <p>Last Sale</p>
      </div>
      <div className="flex justify-between items-center text-sm font-medium">
        <p className={price ? "text-foreground-100" : ""}>
          {price ? price : "--"}
        </p>
        <p>{lastSale ? lastSale : "--"}</p>
      </div>
    </div>
  );
}

export default CollectibleCardFooter;
