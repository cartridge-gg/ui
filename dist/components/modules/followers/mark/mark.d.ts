import { VariantProps } from "class-variance-authority";
export declare const followerMarkVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface FollowerMarkProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof followerMarkVariants> {
    active?: boolean;
}
export declare const FollowerMark: ({ active, variant, className, ...props }: FollowerMarkProps) => import("react/jsx-runtime").JSX.Element;
export default FollowerMark;
