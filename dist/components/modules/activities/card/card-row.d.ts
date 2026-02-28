import { VariantProps } from "class-variance-authority";
import React from "react";
export declare const activityCardRowVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ActivityCardRowProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">, VariantProps<typeof activityCardRowVariants> {
    icon: React.ReactNode;
    logo?: React.ReactNode;
    timestamp: number;
    items: (string | React.ReactNode)[];
    error?: boolean;
    loading?: boolean;
    className?: string;
}
export declare const ActivityCardRow: ({ icon, logo, items, timestamp, error, loading, variant, className, ...props }: ActivityCardRowProps) => import("react/jsx-runtime").JSX.Element;
export declare const ActivityPreposition: ({ label, }: {
    label: string | undefined | null;
}) => import("react/jsx-runtime").JSX.Element | null;
export default ActivityCardRow;
