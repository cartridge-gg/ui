import { VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
export declare const connectionTooltipContentVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ConnectionTooltipContentProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof connectionTooltipContentVariants> {
    username: string;
    address: string;
    chainId: string;
    followers?: number;
    followings?: number;
    hideNetwork?: boolean;
    setOpen?: (open: boolean) => void;
    onFollowersClick?: () => void;
    onFollowingsClick?: () => void;
    onOpenSettings?: () => void;
    onLogout?: () => void;
}
export declare const ConnectionTooltipContent: ({ username, address, chainId, followers, followings, hideNetwork, setOpen, onFollowersClick, onFollowingsClick, onOpenSettings, onLogout, variant, className, }: ConnectionTooltipContentProps) => import("react/jsx-runtime").JSX.Element;
export default ConnectionTooltipContent;
