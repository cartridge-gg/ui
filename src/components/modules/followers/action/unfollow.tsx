import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils";
import { Button } from "@/index";
import { ComponentProps } from "react";
import { Pressable } from "react-native";

interface FollowerUnfollowProps
  extends Omit<ComponentProps<typeof Pressable>, 'children'>,
  VariantProps<typeof followerUnfollowVariants> {
  loading: boolean;
  disabled: boolean;
}

export const followerUnfollowVariants = cva(
  "w-[88px] h-8 group transition-colors normal-case tracking-normal font-sans font-normal font-medium border border-transparent rounded",
  {
    variants: {
      variant: {
        darkest: "",
        darker: "",
        dark: "",
        default:
          "bg-background-300 text-foreground-100 hover:bg-destructive-100 hover:text-destructive-foreground",
        light: "",
        lighter: "",
        lightest: "",
        ghost: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export const FollowerUnfollow = ({
  variant,
  className,
  loading,
  disabled,
  ...props
}: FollowerUnfollowProps) => {
  return (
    <Button
      isLoading={loading}
      disabled={disabled}
      variant="secondary"
      className={cn(followerUnfollowVariants({ variant }), className)}
      {...props}
    >
      <p className="text-sm font-medium">Unfollow</p>
    </Button>
  );
};

export default FollowerUnfollow;
