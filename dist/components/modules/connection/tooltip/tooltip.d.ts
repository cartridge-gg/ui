import { VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
export declare const connectionTooltipVariants: (props?: ({
    variant?: "default" | "ghost" | "darkest" | "darker" | "dark" | "light" | "lighter" | "lightest" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ConnectionTooltipProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof connectionTooltipVariants> {
    username?: string;
    address?: string;
    chainId?: string;
    followers?: number;
    followings?: number;
    hideUsername?: boolean;
    hideNetwork?: boolean;
    onFollowersClick?: () => void;
    onFollowingsClick?: () => void;
    onOpenSettings?: () => void;
    onLogout?: () => void;
}
export declare const ConnectionTooltip: ({ username, address, chainId, followers, followings, hideUsername, hideNetwork, onFollowersClick, onFollowingsClick, onOpenSettings, onLogout, variant, className, children, ...props }: ConnectionTooltipProps) => import("react/jsx-runtime").JSX.Element;
export default ConnectionTooltip;
