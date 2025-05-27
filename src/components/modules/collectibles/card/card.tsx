import { CollectibleCardFooter, CollectiblePreview } from "@/index";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { CollectibleHeader } from "../header";

export interface CollectibleCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof collectibleCardVariants> {
  title: string;
  image: string;
  icon?: string;
  totalCount?: number;
  listingCount?: number;
  price?: string;
  lastSale?: string;
  selectable?: boolean;
  selected?: boolean;
  onSelect?: () => void;
}

const collectibleCardVariants = cva(
  "group relative grow rounded overflow-hidden cursor-pointer border-transparent border-[2px] data-[selected=true]:border-foreground-100",
  {
    variants: {
      variant: {
        default: "",
        faded: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export function CollectibleCard({
  title,
  image,
  icon,
  totalCount,
  listingCount,
  price,
  lastSale,
  selectable = true,
  selected,
  onSelect,
  variant,
  className,
  ...props
}: CollectibleCardProps) {
  return (
    <div
      data-selected={selected}
      className={cn(collectibleCardVariants({ variant }), className)}
      {...props}
    >
      <CollectibleHeader
        title={title}
        icon={icon}
        selectable={!selected && selectable}
        selected={selected}
        onSelect={onSelect}
        variant={variant}
      />
      <CollectiblePreview
        image={image}
        size="sm"
        totalCount={totalCount}
        listingCount={listingCount}
      />
      <CollectibleCardFooter
        price={price}
        lastSale={lastSale}
        variant={variant}
      />
    </div>
  );
}

export default CollectibleCard;
