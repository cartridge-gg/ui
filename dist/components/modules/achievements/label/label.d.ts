interface AchievementLabelProps {
    title: string;
    points: number;
    difficulty: number;
    icon?: string;
    timestamp?: number;
    completed?: boolean;
}
export declare function AchievementLabel({ title, points, difficulty, icon, timestamp, completed, }: AchievementLabelProps): import("react/jsx-runtime").JSX.Element;
export declare function AchievementTitle({ title, completed, }: {
    title: string;
    completed?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export default AchievementLabel;
