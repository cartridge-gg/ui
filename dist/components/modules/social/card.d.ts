import React from "react";
export interface SocialCardProps extends React.HTMLAttributes<HTMLDivElement> {
    text: string;
    icon: React.ReactNode;
    handle?: string;
    isDisabled?: boolean;
    isCompleted?: boolean;
    isExpired?: boolean;
    onClick?: () => void;
}
export declare const SocialCard: ({ text, icon, handle, isDisabled, isCompleted, isExpired, className, onClick, ...props }: SocialCardProps) => import("react/jsx-runtime").JSX.Element;
