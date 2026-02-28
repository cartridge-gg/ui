import { VariantProps } from "class-variance-authority";
import { activityCardVariants } from "../../../../components/modules/activities/card";
export interface TokenCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">, VariantProps<typeof activityCardVariants> {
    image: string | React.ReactNode;
    title: string | React.ReactNode;
    amount: string;
    increasing?: boolean;
    decreasing?: boolean;
    value?: string;
    change?: string;
    clickable?: boolean;
    className?: string;
}
export declare const TokenCard: ({ image, title, amount, increasing, decreasing, value, change, clickable, variant, className, ...props }: TokenCardProps) => import("react/jsx-runtime").JSX.Element;
export default TokenCard;
