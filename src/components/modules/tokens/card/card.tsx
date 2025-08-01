import { Thumbnail } from "@/index";
import { cn } from "@/utils";
import { VariantProps } from "class-variance-authority";
import { useMemo, useState } from "react";
import {
  ActivityCard,
  activityCardVariants,
} from "@/components/modules/activities/card";

export interface TokenCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof activityCardVariants> {
  image: string | React.ReactNode;
  title: string | React.ReactNode;
  amount: string;
  value?: string;
  change?: string;
  className?: string;
}

export const TokenCard = ({
  image,
  title,
  amount,
  value,
  change,
  variant,
  className,
  ...props
}: TokenCardProps) => {
  const [hover, setHover] = useState(false);

  const Logo = useMemo(
    () => (
      <Thumbnail
        icon={image}
        size="lg"
        variant={hover ? "lighter" : "light"}
        rounded
      />
    ),
    [image, hover],
  );

  const style = useMemo(() => {
    if (change?.includes("+")) {
      return {
        backgroundImage: `linear-gradient(to right,transparent,color-mix(in srgb, var(--constructive-100) 3%, transparent))`,
      };
    }
    if (change?.includes("-")) {
      return {
        backgroundImage: `linear-gradient(to right,transparent,color-mix(in srgb, var(--destructive-100) 3%, transparent))`,
      };
    }
    return {};
  }, [change]);

  const Change = useMemo(() => {
    if (change?.includes("+")) {
      return <p className="text-constructive-100">{change}</p>;
    }
    if (change?.includes("-")) {
      return <p className="text-destructive-100">{change}</p>;
    }
    return <></>;
  }, [change]);

  return (
    <ActivityCard
      Logo={Logo}
      title={title}
      subTitle={amount}
      topic={value}
      subTopic={Change}
      variant={variant}
      className={cn("rounded-none", className)}
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    />
  );
};

export default TokenCard;
