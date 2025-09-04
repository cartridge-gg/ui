import { VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";
export declare const activityDetailVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ActivityDetailProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof activityDetailVariants> {
    label: string;
    status?: "success" | "fail";
}
export declare const ActivityDetail: ({ label, status, variant, className, children, }: ActivityDetailProps) => import("react/jsx-runtime").JSX.Element;
export default ActivityDetail;
