import {
  ArrowIcon,
  PaperPlaneIcon,
  SparklesIcon,
  ThumbnailCollectible,
  ThumbnailsSubIcon,
} from "@/index";
import { VariantProps } from "class-variance-authority";
import { useMemo, useState } from "react";
import ActivityCardRow, { activityCardRowVariants } from "./card-row";
import { formatAddress } from "@/utils";
import { getChecksumAddress } from "starknet";

export interface ActivityCollectibleCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof activityCardRowVariants> {
  name: string;
  address: string;
  collection: string;
  image: string;
  action: "send" | "receive" | "mint" | "burn";
  timestamp: number;
  error?: boolean;
  loading?: boolean;
  className?: string;
}

export const ActivityCollectibleCard = ({
  name,
  address,
  collection,
  image,
  action: actionProp,
  timestamp,
  error,
  loading,
  variant,
  className,
  ...props
}: ActivityCollectibleCardProps) => {
  const [hover, setHover] = useState(false);
  const action = useMemo(
    () =>
      actionProp === "receive" && BigInt(address) == 0n
        ? "mint"
        : actionProp === "send" && BigInt(address) == 0n
          ? "burn"
          : actionProp,
    [actionProp, address],
  );

  const Icon = useMemo(() => {
    switch (action) {
      case "send":
        return <PaperPlaneIcon className="w-full h-full" variant="solid" />;
      case "receive":
        return <ArrowIcon variant="down" className="w-full h-full" />;
      default:
        return <SparklesIcon className="w-full h-full" variant="solid" />;
    }
  }, [action]);

  const title = useMemo(() => {
    switch (action) {
      case "send":
        return loading ? "Sending" : "Sent";
      case "receive":
        return loading ? "Receiving" : "Received";
      default:
        return loading ? "Minting" : "Minted";
    }
  }, [loading, action]);

  const Logo = useMemo(
    () => (
      <ThumbnailCollectible
        image={image}
        subIcon={
          <ThumbnailsSubIcon
            variant={hover ? "lighter" : "light"}
            Icon={Icon}
          />
        }
        error={error}
        loading={loading}
        variant={hover ? "lighter" : "light"}
        size="lg"
      />
    ),
    [image, error, loading, hover, Icon],
  );

  const Address = useMemo(() => {
    switch (action) {
      case "send":
        return (
          <p>{`To ${formatAddress(getChecksumAddress(address), {
            size: "xs",
          })}`}</p>
        );
      default:
        return (
          <p>{`From ${formatAddress(getChecksumAddress(address), {
            size: "xs",
          })}`}</p>
        );
    }
  }, [address, action]);

  const Collection = useMemo(() => {
    return <p>{collection}</p>;
  }, [collection]);

  return (
    <ActivityCardRow
      icon={Icon}
      logo={Logo}
      items={[title, Address, name, Collection]}
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

export default ActivityCollectibleCard;
