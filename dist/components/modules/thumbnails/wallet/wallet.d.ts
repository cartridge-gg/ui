import { VariantProps } from "class-variance-authority";
import { thumbnailVariants } from "../thumbnail";
export interface ThumbnailWalletProps extends VariantProps<typeof thumbnailVariants> {
    brand?: "argentx" | "braavos" | "openzeppelin" | "controller" | undefined;
    className?: string;
}
export declare const ThumbnailWallet: ({ brand, variant, size, className, }: ThumbnailWalletProps) => import("react/jsx-runtime").JSX.Element;
export default ThumbnailWallet;
