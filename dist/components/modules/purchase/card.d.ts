import React from "react";
export interface PurchaseCardProps extends React.HTMLAttributes<HTMLDivElement> {
    text: string;
    icon: React.ReactNode;
    network?: string;
    networkIcon?: React.ReactNode;
    onClick: () => void;
}
export declare const PurchaseCard: ({ text, icon, network, networkIcon, className, onClick, ...props }: PurchaseCardProps) => import("react/jsx-runtime").JSX.Element;
