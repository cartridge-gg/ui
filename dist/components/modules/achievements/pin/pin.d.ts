export interface AchievementPinProps {
    pinned?: boolean;
    achievementId?: string;
    disabled?: boolean;
    onClick?: (pinned: boolean, achievementId: string, setLoading: (loading: boolean) => void) => void;
}
export declare function AchievementPin({ pinned, achievementId, disabled, onClick, }: AchievementPinProps): import("react/jsx-runtime").JSX.Element;
export default AchievementPin;
