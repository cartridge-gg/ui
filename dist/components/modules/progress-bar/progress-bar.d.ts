interface ProgressBarProps {
    count: number;
    total: number;
    completed: boolean;
    className?: string;
    color?: string;
}
export declare function ProgressBar({ count, total, completed, className, color, }: ProgressBarProps): import("react/jsx-runtime").JSX.Element;
export {};
