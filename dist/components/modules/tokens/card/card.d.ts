import { VariantProps } from "class-variance-authority";
import { activityCardVariants } from "../../../../components/modules/activities/card";
export interface TokenCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof activityCardVariants> {
    image: string;
    title: string;
    amount: string;
    value?: string;
    change?: string;
    className?: string;
}
export declare const TokenCard: ({ image, title, amount, value, change, variant, className, ...props }: TokenCardProps) => import("react/jsx-runtime").JSX.Element;
export default TokenCard;
