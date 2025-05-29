import { PLACEHOLDER } from "@/assets";
import { CollectibleTag, StackDiamondIcon, TagIcon } from "@/index";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { useMemo } from "react";

export interface CollectiblePreviewProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof collectiblePreviewVariants> {
  image: string;
  totalCount?: number;
  listingCount?: number;
}

const collectiblePreviewVariants = cva(
  "relative flex items-center justify-center overflow-hidden shrink-0",
  {
    variants: {
      variant: {
        default: "",
      },
      size: {
        sm: "p-2 h-[128px]",
        md: "p-2 h-[128px]",
        lg: "p-2 h-[200px] rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export const CollectiblePreview = ({
  image,
  totalCount,
  listingCount,
  variant,
  size,
  className,
  ...props
}: CollectiblePreviewProps) => {
  const uri = useMemo(() => {
    if (!image) return PLACEHOLDER;
    return image;
  }, [image]);

  return (
    <div
      className={cn(collectiblePreviewVariants({ variant, size }), className)}
      {...props}
    >
      <div className="absolute grow inset-0 blur-[8px] transition-opacity duration-150 opacity-75 group-hover:opacity-100">
        <img
          src={uri}
          className={cn("object-cover absolute inset-0 w-full h-full")}
        />
        <div
          className="bg-center bg-cover h-full w-full relative"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.64))`,
          }}
        />
      </div>
      <img
        className="object-contain max-h-full max-w-full relative transition duration-150 ease-in-out group-hover:scale-[1.02]"
        draggable={false}
        src={image}
        onError={(e) => {
          e.currentTarget.src = PLACEHOLDER;
        }}
      />
      <div className="flex gap-1 items-center flex-wrap justify-start absolute bottom-1.5 left-1.5">
        {!!totalCount && (
          <CollectibleTag label={`${totalCount}`}>
            <StackDiamondIcon variant="solid" size="sm" />
          </CollectibleTag>
        )}
        {!!listingCount && (
          <CollectibleTag label={`${listingCount}`}>
            <TagIcon variant="solid" size="sm" />
          </CollectibleTag>
        )}
      </div>
    </div>
  );
};

export default CollectiblePreview;
