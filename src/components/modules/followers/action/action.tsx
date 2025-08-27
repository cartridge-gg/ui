import { ComponentProps } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Pressable } from "react-native";
import FollowerUnfollow from "./unfollow";
import FollowerFollowing from "./following";
import FollowerFollow from "./follow";

interface FollowerActionProps
  extends ComponentProps<typeof Pressable>,
  VariantProps<typeof followerActionVariants> {
  following: boolean;
  unfollowable: boolean;
  loading: boolean;
  disabled: boolean;
}

export const followerActionVariants = cva("", {
  variants: {
    variant: {
      darkest: "",
      darker: "",
      dark: "",
      default: "",
      light: "",
      lighter: "",
      lightest: "",
      ghost: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const FollowerAction = ({
  following,
  unfollowable,
  loading,
  disabled,
  variant,
  className,
  onPress,
  ...props
}: FollowerActionProps) => {
  if (following && unfollowable) {
    return (
      <FollowerUnfollow
        onPress={onPress}
        loading={loading}
        disabled={disabled}
        variant={variant}
        className={className}
        {...props}
      />
    );
  }
  if (following) {
    return (
      <FollowerFollowing variant={variant} className={className} />
    );
  }
  return (
    <FollowerFollow
      onPress={onPress}
      loading={loading}
      disabled={disabled}
      variant={variant}
      className={className}
      {...props}
    />
  );
};

export default FollowerAction;
