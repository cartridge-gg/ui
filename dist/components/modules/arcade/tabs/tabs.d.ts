import React from "react";
import { VariantProps } from "class-variance-authority";
declare const arcadeTabsVariants: (props?: ({
    variant?: "default" | null | undefined;
    size?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type TabValue = "inventory" | "achievements" | "leaderboard" | "guilds" | "activity" | "metrics" | "about" | "marketplace" | "items" | "holders" | "predict" | "positions";
export interface ArcadeTabsProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof arcadeTabsVariants> {
    defaultValue?: TabValue;
    order?: TabValue[];
    onTabClick?: (tab: TabValue) => void;
}
export declare const ArcadeTabs: ({ defaultValue, order, onTabClick, variant, size, className, children, }: ArcadeTabsProps) => import("react/jsx-runtime").JSX.Element;
export default ArcadeTabs;
