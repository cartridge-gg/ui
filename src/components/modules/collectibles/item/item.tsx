import { CollectibleItemDetails, CollectibleItemAction } from "@/index";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";

export interface CollectibleItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof collectibleItemVariants> {
  owner: string;
  quantity: number;
  price?: string;
  expiration?: string;
  action: "list" | "unlist" | "purchase";
  onActionPress: () => void;
}

const collectibleItemVariants = cva("flex gap-3 w-full overflow-hidden", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export function CollectibleItem({
  owner,
  quantity,
  price,
  expiration,
  action,
  onActionPress,
  variant,
  className,
  ...props
}: CollectibleItemProps) {
  return (
    <div
      className={cn(collectibleItemVariants({ variant }), className)}
      {...props}
    >
      <CollectibleItemDetails
        owner={owner}
        quantity={quantity}
        price={price}
        expiration={expiration}
      />
      <CollectibleItemAction variant={action} onPress={onActionPress} />
    </div>
  );
}

export default CollectibleItem;
