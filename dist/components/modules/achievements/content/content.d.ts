import { AchievementTaskProps } from "../../../../index";
export interface AchievementContentProps {
    points: number;
    difficulty: number;
    hidden: boolean;
    icon?: string;
    title?: string;
    description?: string;
    tasks?: (AchievementTaskProps & {
        id: string;
    })[];
    timestamp?: number;
}
export declare function AchievementContent({ points, difficulty, icon, title, description, tasks, timestamp, hidden, }: AchievementContentProps): import("react/jsx-runtime").JSX.Element;
export default AchievementContent;
