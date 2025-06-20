export interface AchievementTabsProps extends React.HTMLAttributes<HTMLDivElement> {
    count: number;
    total: number;
    rank: number;
    value?: string;
    onValueChange?: (value: string) => void;
}
export declare const AchievementTabs: ({ count, total, rank, value, className, children, onValueChange, }: AchievementTabsProps) => import("react/jsx-runtime").JSX.Element;
export default AchievementTabs;
