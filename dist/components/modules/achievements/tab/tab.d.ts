import { AchievementCounter, LeaderboardCounter } from "../../../../index";
export interface AchievementTabProps {
    value: string;
    label: string;
    active: boolean;
    counter: ReturnType<typeof AchievementCounter> | ReturnType<typeof LeaderboardCounter>;
    className?: string;
}
export declare const AchievementTab: ({ value, label, active, counter, className, }: AchievementTabProps) => import("react/jsx-runtime").JSX.Element | null;
export default AchievementTab;
