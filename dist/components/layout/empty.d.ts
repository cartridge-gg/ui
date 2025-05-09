import { VariantProps } from "class-variance-authority";
interface EmptyProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof emptyVariants> {
    title?: string;
    icon?: "activity" | "achievement" | "guild" | "inventory" | "discover" | "leaderboard";
}
export declare const emptyVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function Empty({ title, icon, variant, className, ...props }: EmptyProps): import("react/jsx-runtime").JSX.Element;
export {};
