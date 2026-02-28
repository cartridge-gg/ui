export interface LeaderboardRowProps extends React.HTMLAttributes<HTMLDivElement> {
    rank: number;
    name: string;
    points: number;
    icon?: string;
    highlight?: boolean;
    following?: boolean;
}
export declare const LeaderboardRow: ({ rank, name, points, icon, highlight, following, className, onClick, ...props }: LeaderboardRowProps) => import("react/jsx-runtime").JSX.Element;
export default LeaderboardRow;
