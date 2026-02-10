import {
  AchievementPlayerAvatar,
  ActivityPreposition,
  ArrowIcon,
  CollectibleTag,
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
  const [_hover, setHover] = useState(false);

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
          variant="ghost"
          size="xs"
          className="flex-none"
          rounded
        />
      ) : undefined,
    [image],
  );

  const Token = useMemo(() => {
    return (
      <CollectibleTag variant="dark" className="gap-1">
        {TokenImage}
        <p>{amount}</p>
        {TokenImage ? undefined : <p>{symbol?.toUpperCase() || "TOKEN"}</p>}
      </CollectibleTag>
    );
  }, [TokenImage, amount, symbol]);

  const SwappedTokenImage = useMemo(
    () =>
      swappedImage ? (
        <Thumbnail icon={swappedImage} variant="ghost" size="xs" rounded />
      ) : undefined,
    [image],
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
        return username ? (
          <CollectibleTag variant="dark" className="gap-1 shrink min-w-0">
            <AchievementPlayerAvatar
              size="xs"
              className="flex-none"
              username={username}
            />
            <p className="truncate shrink">{username}</p>
          </CollectibleTag>
        ) : (
          <CollectibleTag variant="dark" className="gap-1 shrink min-w-0">
            <WalletIcon variant="solid" size="xs" className="flex-none" />
            <p className="truncate shrink">
              {formatAddress(address, { size: "xs" })}
            </p>
          </CollectibleTag>
        );
      case "swap":
        return (
          <CollectibleTag variant="dark" className="gap-1 shrink">
            {SwappedTokenImage}
            <p>{swappedAmount!}</p>
            {SwappedTokenImage ? undefined : (
              <p>{swappedSymbol?.toUpperCase() || "TOKEN"}</p>
            )}
          </CollectibleTag>
        );
      default:
        return undefined;
    }
  }, [address, action]);

  return (
    <ActivityCardRow
      icon={Icon}
      logo={logo}
      items={[Token, Preposition, Subject]}
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
