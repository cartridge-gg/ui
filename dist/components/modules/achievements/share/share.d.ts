export interface AchievementShareProps {
    website?: string;
    twitter?: string;
    timestamp?: number;
    points?: number;
    difficulty?: number;
    title?: string;
    disabled?: boolean;
}
export declare function AchievementShare({ disabled, website, twitter, timestamp, points, difficulty, title, }: AchievementShareProps): import("react/jsx-runtime").JSX.Element;
export default AchievementShare;
