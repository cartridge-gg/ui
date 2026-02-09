import { GlobeIcon, Thumbnail, VerifiedIcon } from "@/index";
import { cn, getDuration } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { useMemo } from "react";

export const activityCardVariants = cva(
  "select-none rounded px-3 py-2.5 flex items-center justify-between gap-4 text-foreground-100 data-[loading]:text-foreground-300 data-[error]:text-destructive-100",
  {
    variants: {
      variant: {
        default: "bg-background-200 hover:bg-background-300 cursor-pointer",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface ActivityCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof activityCardVariants> {
  icon: React.ReactNode;
  logo?: React.ReactNode;
  timestamp: number;
  items: (string | React.ReactNode)[];
  error?: boolean;
  loading?: boolean;
  className?: string;
}

export const ActivityCard = ({
  icon,
  logo,
  items,
  timestamp,
  error,
  loading,
  variant,
  className,
  ...props
}: ActivityCardProps) => {
  return (
    <div
      data-loading={loading}
      data-error={error}
      className={cn(activityCardVariants({ variant }), className)}
      {...props}
    >
      <div className="flex flex-row gap-1 text-xs w-full items-center">
        <div className="w-[24px] h-[24px] p-0 mr-1">{icon}</div>
        {items.map((item, index) => (
          <div key={`item-${index}`}>
            {typeof item === "string" ? (
              <div
                data-error={error}
                className="data-[error]:text-destructive-100"
              >
                <p>{item}</p>
              </div>
            ) : (
              item
            )}
          </div>
        ))}
        <div className="grow" />
        <div className="text-sm text-foreground-400 mx-1 mb-[1px]">
          {getDuration(new Date().getTime() - timestamp)}
        </div>
        {logo && (
          <div className="w-[24px] h-[24px]">
            <Thumbnail icon={logo} size="sm" />
          </div>
        )}
      </div>
    </div>
  );
};

export const ActivityPreposition = ({
  label,
}: {
  label: string | undefined | null;
}) => {
  if (!label) {
    return null;
  }
  return (
    <div className="text-sm text-foreground-400 mx-1 mb-[1px]">{label}</div>
  );
};

export const ActivitySocialWebsite = ({
  website,
  certified,
  className,
}: {
  website: string;
  certified?: boolean;
  className?: string;
}) => {
  const label = useMemo(() => {
    return website.replace(/^.*https?:\/\//, "").replace(/\/$/, "");
  }, [website]);

  const Icon = useMemo(() => {
    if (certified) {
      return <VerifiedIcon size="xs" />;
    }
    return <GlobeIcon variant="line" size="xs" />;
  }, [certified]);

  return (
    <div className={cn("select-none flex gap-x-1 items-center", className)}>
      {Icon}
      {label && <p className="text-xs">{label}</p>}
    </div>
  );
};

export default ActivityCard;
