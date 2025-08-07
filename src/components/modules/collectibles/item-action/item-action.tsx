import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils";
import { Button, ShoppingCancelIcon, ShoppingCartIcon, TagIcon } from "@/index";
import { ComponentProps } from "react";
import { Pressable } from "react-native";

interface CollectibleItemActionProps
  extends Omit<ComponentProps<typeof Pressable>, 'children'>,
  VariantProps<typeof collectibleItemActionVariants> {
  variant?: "list" | "unlist" | "purchase";
}

export const collectibleItemActionVariants = cva(
  "min-h-10 min-w-10 p-0",
  {
    variants: {
      variant: {
        list: "",
        unlist: "",
        purchase: "",
      },
    },
    defaultVariants: {
      variant: "list",
    },
  },
);

export const CollectibleItemAction = ({
  variant,
  className,
  ...props
}: CollectibleItemActionProps) => {
  return (
    <Button
      variant="secondary"
      className={cn(collectibleItemActionVariants({ variant }), className)}
      aria-label="Action item"
      {...props}
    >
      {(() => {
        switch (variant) {
          case "list":
            return <TagIcon variant="solid" size="default" />;
          case "unlist":
            return (
              <ShoppingCancelIcon
                variant="solid"
                size="default"
                className="text-destructive-100"
              />
            );
          case "purchase":
            return (
              <ShoppingCartIcon
                variant="solid"
                size="default"
                className="text-constructive-100"
              />
            );
          default:
            return null;
        }
      })()}
    </Button>
  );
};

export default CollectibleItemAction;
