import { CollectibleTag, TagIcon, Thumbnail, CollectibleImage } from "@/index";
import { cva, VariantProps } from "class-variance-authority";
import { cn, formatNumber } from "@/utils";

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
      <CollectibleImage
        className="transition duration-150 ease-in-out hover:scale-[1.1]"
        images={images}
      />
      <div
        className="absolute bottom-0 w-full h-[48px] p-[12px]"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.8), transparent)",
        }}
      >
        <div className="flex items-center overflow-hidden rounded-[3px]">
          {icon !== undefined && (
            <Thumbnail
              variant="light"
              size="sm"
              icon={icon}
              className="w-[20px] h-[20px] m-[2px] rounded-[1px] bg-translucent-light-100"
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
            className="absolute bottom-[12px] right-[12px] rounded-[8px] bg-translucent-light-100"
          />
        )}
      </div>
    </div>
  );
};

export default CollectiblePreview;
