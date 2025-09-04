import { VariantProps } from "class-variance-authority";
import { activityCardVariants } from "../../../../components/modules/activities/card";
export interface TokenCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">, VariantProps<typeof activityCardVariants> {
    image: string | React.ReactNode;
    title: string | React.ReactNode;
    amount: string;
    value?: string;
    change?: string;
    className?: string;
}
export declare const TokenCard: ({ image, title, amount, value, change, variant, className, ...props }: TokenCardProps) => import("react/jsx-runtime").JSX.Element;
export default TokenCard;
