import {
  AchievementPlayerAvatar,
  ActivityPreposition,
  ArrowIcon,
  PaperPlaneIcon,
  SparklesIcon,
  Thumbnail,
} from "@/index";
import { VariantProps } from "class-variance-authority";
import { useMemo, useState } from "react";
import ActivityCard, { activityCardVariants } from "./card";
import { formatAddress } from "@/utils";

export interface ActivityTokenCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof activityCardVariants> {
  address: string; // token address
  username?: string; // token owner username
  amount: string; // token amount
  value: string; // usd value
  image?: string; // token image
  symbol?: string; // token symbol (used if no image)
  logo?: string; // game logo
  action: "send" | "receive" | "mint";
  timestamp: number;
  error?: boolean;
  loading?: boolean;
  className?: string;
}

export const ActivityTokenCard = ({
  amount,
  address,
  username,
  value,
  image,
  symbol,
  logo,
  action,
  timestamp,
  error,
  loading,
  variant,
  className,
  ...props
}: ActivityTokenCardProps) => {
  const [hover, setHover] = useState(false);

  const Icon = useMemo(() => {
    switch (action) {
      case "send":
        return <PaperPlaneIcon variant="solid" className="w-full h-full" />;
      case "receive":
        return <ArrowIcon variant="down" className="w-full h-full" />;
      case "mint":
        return <SparklesIcon variant="solid" className="w-full h-full" />;
      default:
        return undefined;
    }
  }, [action]);

  // const title = useMemo(() => {
  //   switch (action) {
  //     case "send":
  //       return loading ? "Sending" : "Sent";
  //     case "receive":
  //       return loading ? "Receiving" : "Received";
  //     default:
  //       return loading ? "Minting" : "Minted";
  //   }
  // }, [loading, action]);

  const TokenImage = useMemo(
    () =>
      image ? (
        <Thumbnail
          icon={image}
          variant={hover ? "lighter" : "light"}
          size="sm"
          rounded
        />
      ) : undefined,
    [image, hover],
  );

  const TokenSymbol = useMemo(
    () => (TokenImage ? undefined : symbol?.toUpperCase() || "TOKEN"),
    [TokenImage, symbol],
  );

  const Preposition = useMemo(() => {
    return (
      <ActivityPreposition
        label={action === "send" ? "to" : action === "receive" ? "from" : null}
      />
    );
  }, [action]);

  const Account = useMemo(() => {
    switch (action) {
      case "send":
      case "receive":
        return username
          ? [
              <AchievementPlayerAvatar username={username} size="xs" />,
              username,
            ]
          : [formatAddress(address, { size: "xs" })];
      default:
        return [];
    }
  }, [address, action]);

  return (
    <ActivityCard
      icon={Icon}
      logo={logo}
      items={[TokenImage, amount, TokenSymbol, Preposition, ...Account]}
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

export default ActivityTokenCard;
