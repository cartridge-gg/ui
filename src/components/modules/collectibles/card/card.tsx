import { CollectibleCardFooter, CollectiblePreview } from "@/index";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { CollectibleHeader } from "../header";

export interface CollectibleCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof collectibleCardVariants> {
  title: string;
  images: string[];
  icon?: string | null;
  totalCount?: number;
  listingCount?: number;
  price?: string | { value: string; image: string } | null;
  lastSale?: string | { value: string; image: string } | null;
  selectable?: boolean;
  selected?: boolean;
  onSelect?: () => void;
  backgroundColor?: string;
}

const collectibleCardVariants = cva(
  "group relative grow rounded overflow-hidden cursor-pointer border-transparent border-[2px] data-[selected=true]:border-foreground-100 data-[selected=true]:rounded-[10px]",
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
  images,
  icon,
  totalCount,
  listingCount,
  price,
  lastSale,
  selectable = false,
  selected,
  onSelect,
  variant,
  className,
  onError,
  backgroundColor,
  ...props
}: CollectibleCardProps) {
  return (
    <div
      data-selected={selected}
      className={cn(collectibleCardVariants({ variant }), className)}
      {...props}
    >
      <CollectibleHeader
        selectable={selectable}
        selected={selected}
        onSelect={onSelect}
        variant={variant}
      />
      <CollectiblePreview
        title={title}
        icon={icon}
        images={images}
        size="sm"
        totalCount={totalCount}
        listingCount={listingCount}
        onError={onError}
        backgroundColor={backgroundColor}
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
