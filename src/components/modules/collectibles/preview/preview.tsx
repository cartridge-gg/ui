import {
  CollectibleTag,
  TagIcon,
  Thumbnail,
  CollectibleImage,
  Skeleton,
} from "@/index";
import { cva, VariantProps } from "class-variance-authority";
import { cn, formatNumber } from "@/utils";
import { useState } from "react";

export interface CollectiblePreviewProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof collectiblePreviewVariants> {
  title: string;
  icon?: string | null;
  images: string[];
  totalCount?: number;
  listingCount?: number;
  backgroundColor?: string;
}

const collectiblePreviewVariants = cva(
  "relative flex items-center justify-center overflow-hidden shrink-0 rounded-[8px]",
  {
    variants: {
      variant: {
        default: "",
      },
      size: {
        sm: "p-[20px] h-[160px]",
        md: "p-[20px] h-[160px]",
        lg: "p-[20px] h-[200px] rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export const CollectiblePreview = ({
  title,
  icon,
  images,
  totalCount,
  listingCount,
  backgroundColor,
  variant,
  size,
  className,
  onError,
  ...props
}: CollectiblePreviewProps) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div
      className={cn(collectiblePreviewVariants({ variant, size }), className)}
      {...props}
    >
      <div className="absolute grow inset-0">
        <div
          className="h-full w-full relative"
          style={{
            backgroundColor: backgroundColor || `#000000`,
          }}
        />
      </div>
      {!loaded && <Skeleton className="absolute inset-0 full-w full-h" />}
      <CollectibleImage
        className="transition duration-150 ease-in-out hover:scale-[1.1]"
        images={images}
        onLoaded={() => setLoaded(true)}
      />
      <div
        className="absolute bottom-0 w-full h-[48px] p-[12px]"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.8), transparent)",
        }}
      >
        <div className="flex items-center overflow-hidden rounded-[3px] gap-[6px]">
          {icon !== undefined && (
            <Thumbnail
              className="w-[20px] h-[20px] bg-translucent-light-100"
              variant="light"
              size="sm"
              icon={icon}
            />
          )}
          {!!listingCount && (
            <TagIcon variant="solid" size="sm" className="mr-[6px]" />
          )}
          <p className="truncate">{title}</p>
        </div>

        {!!totalCount && (
          <CollectibleTag
            label={`${formatNumber(totalCount)}x`}
            className="absolute bottom-[12px] right-[12px] bg-translucent-light-100"
          />
        )}
      </div>
    </div>
  );
};

export default CollectiblePreview;
