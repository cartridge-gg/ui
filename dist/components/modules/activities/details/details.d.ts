import { VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
export declare const activityDetailsVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ActivityDetailsProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof activityDetailsVariants> {
}
export declare const ActivityDetails: ({ variant, className, children, }: ActivityDetailsProps) => import("react/jsx-runtime").JSX.Element;
export default ActivityDetails;
