import { JoystickIcon, Thumbnail, ThumbnailsSubIcon } from "@/index";
import { VariantProps } from "class-variance-authority";
import { useMemo, useState } from "react";
import ActivityCardRow, { activityCardRowVariants } from "./card-row";

export interface ActivityGameCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof activityCardRowVariants> {
  title: string;
  website: string;
  image: string;
  timestamp: number;
  error?: boolean;
  loading?: boolean;
  certified?: boolean;
  className?: string;
}

export const ActivityGameCard = ({
  title,
  website,
  image,
  timestamp,
  error,
  loading,
  certified,
  variant,
  className,
  ...props
}: ActivityGameCardProps) => {
  const [hover, setHover] = useState(false);

  const Icon = useMemo(
    () => <JoystickIcon className="w-full h-full" variant="solid" />,
    [],
  );

  const Logo = useMemo(
    () => (
      <Thumbnail
        icon={image}
        subIcon={
          <ThumbnailsSubIcon
            variant={hover ? "lighter" : "light"}
            Icon={Icon}
          />
        }
        error={error}
        loading={loading}
        size="lg"
        variant={hover ? "lighter" : "light"}
      />
    ),
    [image, error, loading, hover, Icon],
  );

  // const Social = useMemo(() => {
  //   return <ActivitySocialWebsite website={website} certified={certified} />;
  // }, [website, certified]);

  const formattedTitle = useMemo(() => {
    return title.replace("_", " ").trim();
  }, [title]);

  return (
    <ActivityCardRow
      icon={Icon}
      logo={Logo}
      items={[formattedTitle]}
      timestamp={timestamp}
      error={error}
      loading={loading}
      variant={variant}
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    />
  );
};

export default ActivityGameCard;
