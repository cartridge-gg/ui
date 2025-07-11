import { VariantProps } from "class-variance-authority";
import { constants } from "starknet";
export interface CollectibleDetailsProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof collectibleDetailsVariants> {
    address: string;
    tokenId: string;
    standard: string;
    chainId: constants.StarknetChainId;
    owner?: string;
}
declare const collectibleDetailsVariants: (props?: ({
    variant?: "default" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare function CollectibleDetails({ address, tokenId, standard, chainId, owner, variant, className, ...props }: CollectibleDetailsProps): import("react/jsx-runtime").JSX.Element;
export default CollectibleDetails;
