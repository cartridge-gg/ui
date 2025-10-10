import { constants } from "starknet";
import { ERC20Token } from "./types";
interface PublicChainProps {
    isPublicChain: true;
    chainId: constants.StarknetChainId;
}
interface PrivateChainProps {
    isPublicChain?: false;
    chainId?: constants.StarknetChainId;
}
export type ERC20DetailProps = {
    token: ERC20Token;
} & (PublicChainProps | PrivateChainProps);
export declare const ERC20Detail: ({ token, isPublicChain, chainId, }: ERC20DetailProps) => import("react/jsx-runtime").JSX.Element;
export {};
