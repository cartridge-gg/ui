import { PLACEHOLDER } from "@/assets";
import { CollectibleTag, StackDiamondIcon, TagIcon } from "@/index";
import { cn, formatNumber } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { useEffect, useState } from "react";

export interface CollectiblePreviewProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof collectiblePreviewVariants> {
  images: string[]; // maintenant on prend un tableau
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
  images,
  totalCount,
  listingCount,
  variant,
  size,
  className,
  onError,
  ...props
}: CollectiblePreviewProps) => {
  const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
  const [data, setData] = useState<string | null>(null);

  const currentSrc =
    images && images.length > 0 ? images[currentSrcIndex] : PLACEHOLDER;

  useEffect(() => {
    const fetchData = async () => {
      if (!currentSrc) return;

      try {
        const res = await fetch(currentSrc);
        if (!res.ok) return;

        const text = await res.text();
        if (!text.includes('width="100width="100%"')) return;

        const match = text.match(/data:image\/png;base64,[^)"]+/);
        if (match && match.length > 0) setData(match[0]);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };
    fetchData();
  }, [currentSrc]);

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    if (currentSrcIndex < images.length - 1) {
      setCurrentSrcIndex(currentSrcIndex + 1);
    } else {
      e.currentTarget.src = PLACEHOLDER;
      if (onError) onError(e);
    }
  };

  return (
    <div
      className={cn(collectiblePreviewVariants({ variant, size }), className)}
      {...props}
    >
      <div className="absolute grow inset-0 blur-[8px] transition-opacity duration-150 opacity-75 group-hover:opacity-100">
        <img
          src={data || currentSrc}
          className="object-cover absolute inset-0 w-full h-full image-pixelated"
          onError={handleImageError}
        />
        <div
          className="bg-center bg-cover h-full w-full relative"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.64))`,
          }}
        />
      </div>
      <img
        className="object-contain h-full w-full relative transition duration-150 ease-in-out group-hover:scale-[1.02]"
        style={{ imageRendering: "pixelated" }}
        draggable={false}
        src={data || currentSrc}
        onError={handleImageError}
      />
      <div className="flex gap-1 items-center flex-wrap justify-start absolute bottom-1.5 left-1.5">
        {!!totalCount && (
          <CollectibleTag label={`${formatNumber(totalCount)}`}>
            <StackDiamondIcon variant="solid" size="sm" />
          </CollectibleTag>
        )}
        {!!listingCount && (
          <CollectibleTag label={`${formatNumber(listingCount)}`}>
            <TagIcon variant="solid" size="sm" />
          </CollectibleTag>
        )}
      </div>
    </div>
  );
};

export default CollectiblePreview;
