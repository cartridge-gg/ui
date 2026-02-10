import {
  AchievementPlayerAvatar,
  ActivityPreposition,
  ArrowIcon,
  FireIcon,
  PaperPlaneIcon,
  SeedlingIcon,
  Thumbnail,
  TransferIcon,
  WalletIcon,
} from "@/index";
import { VariantProps } from "class-variance-authority";
import { useMemo, useState } from "react";
import ActivityCardRow, { activityCardRowVariants } from "./card-row";
import { formatAddress } from "@/utils";

export interface ActivityTokenCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof activityCardRowVariants> {
  address: string; // token address
  username?: string; // token owner username
  amount: string; // token amount
  value?: string; // usd value
  image?: string; // token image
  symbol?: string; // token symbol (used if no image)
  swappedAmount?: string;
  swappedImage?: string;
  swappedSymbol?: string;
  logo?: string; // game logo
  action: "send" | "receive" | "mint" | "burn" | "swap";
  timestamp: number;
  error?: boolean;
  loading?: boolean;
  className?: string;
}

export const ActivityTokenCard = ({
  address,
  username,
  amount,
  value,
  image,
  symbol,
  swappedAmount,
  swappedImage,
  swappedSymbol,
  logo,
  action: actionProp,
  timestamp,
  error,
  loading,
  variant,
  className,
  ...props
}: ActivityTokenCardProps) => {
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
        return <PaperPlaneIcon variant="solid" className="w-full h-full" />;
      case "receive":
        return <ArrowIcon variant="down" className="w-full h-full" />;
      case "mint":
        return <SeedlingIcon variant="solid" className="w-full h-full" />;
      case "burn":
        return <FireIcon variant="solid" className="w-full h-full" />;
      case "swap":
        return <TransferIcon className="w-full h-full" />;
      default:
        return undefined;
    }
  }, [action]);

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

  const SwappedTokenImage = useMemo(
    () =>
      swappedImage ? (
        <Thumbnail
          icon={swappedImage}
          variant={hover ? "lighter" : "light"}
          size="sm"
          rounded
        />
      ) : undefined,
    [image, hover],
  );

  const Preposition = useMemo(() => {
    switch (action) {
      case "send":
        return <ActivityPreposition label="to" />;
      case "receive":
        return <ActivityPreposition label="from" />;
      case "mint":
        return <ActivityPreposition label="minted" />;
      case "burn":
        return <ActivityPreposition label="burned" />;
      case "swap":
        return <ActivityPreposition label="for" />;
      default:
        return undefined;
    }
  }, [action]);

  const Subject = useMemo(() => {
    switch (action) {
      case "send":
      case "receive":
        return username
          ? [
              <AchievementPlayerAvatar username={username} size="xs" />,
              username,
            ]
          : [
              <WalletIcon variant="solid" size="xs" />,
              formatAddress(address, { size: "xs" }),
            ];
      case "swap":
        return [
          SwappedTokenImage,
          swappedAmount!,
          SwappedTokenImage
            ? undefined
            : swappedSymbol?.toUpperCase() || "TOKEN",
        ];
      default:
        return [];
    }
  }, [address, action]);

  return (
    <ActivityCardRow
      icon={Icon}
      logo={logo}
      items={[TokenImage, amount, TokenSymbol, Preposition, ...Subject]}
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
