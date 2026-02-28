export interface PurchaseCardProps extends React.HTMLAttributes<HTMLDivElement> {
    text: string;
    icon: React.ReactNode;
    network?: string;
    networkIcon?: React.ReactNode;
}
export declare const PurchaseCard: ({ text, icon, network, networkIcon, className, ...props }: PurchaseCardProps) => import("react/jsx-runtime").JSX.Element;
