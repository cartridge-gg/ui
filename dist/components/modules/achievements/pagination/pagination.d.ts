interface AchievementPaginationProps {
    direction: "left" | "right";
    disabled?: boolean;
    onClick?: () => void;
}
export declare function AchievementPagination({ direction, disabled, onClick, }: AchievementPaginationProps): import("react/jsx-runtime").JSX.Element;
export default AchievementPagination;
