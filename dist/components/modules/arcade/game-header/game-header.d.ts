import { AchievementContentProps, AchievementPinProps } from "../../../../index";
import { VariantProps } from "class-variance-authority";
export interface Metadata {
    name: string;
    logo?: string;
    cover?: string;
}
export interface Socials {
    website?: string;
    discord?: string;
    telegram?: string;
    twitter?: string;
    github?: string;
}
export interface ArcadeGameHeaderProps extends VariantProps<typeof arcadeGameHeaderVariants> {
    metadata: Metadata;
    achievements?: {
        id: string;
        content: AchievementContentProps;
        pin?: AchievementPinProps;
    }[];
    socials?: Socials;
    active?: boolean;
    className?: string;
    color?: string;
}
export declare const arcadeGameHeaderVariants: (props?: ({
    variant?: "default" | "ghost" | "darkest" | "darker" | "dark" | "light" | "lighter" | "lightest" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
type ArcadeGameHeaderVariant = VariantProps<typeof arcadeGameHeaderVariants>["variant"];
export declare const ArcadeGameHeader: ({ achievements, metadata, socials, active, variant, className, color, }: ArcadeGameHeaderProps) => import("react/jsx-runtime").JSX.Element;
export declare const AchievementSocialWebsite: ({ website, variant, className, }: {
    website: string;
    variant: ArcadeGameHeaderVariant;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
declare const achievementSocialVariants: (props?: ({
    variant?: "default" | "ghost" | "darkest" | "darker" | "dark" | "light" | "lighter" | "lightest" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
type AchievementSocialVariant = VariantProps<typeof achievementSocialVariants>["variant"];
export declare const AchievementSocial: ({ icon, href, label, variant, className, }: {
    icon: React.ReactNode;
    href: string;
    label?: string;
    variant: AchievementSocialVariant;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
export default ArcadeGameHeader;
