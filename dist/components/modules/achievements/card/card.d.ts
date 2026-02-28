import { AchievementContentProps, AchievementPinProps, AchievementShareProps } from "../../../../index";
import React from "react";
export interface AchievementCardProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    achievements: {
        id: string;
        index: number;
        completed: boolean;
        content: AchievementContentProps;
        pin?: AchievementPinProps;
        share?: AchievementShareProps;
    }[];
}
export declare const AchievementCard: ({ name, achievements, }: AchievementCardProps) => import("react/jsx-runtime").JSX.Element | null;
export default AchievementCard;
