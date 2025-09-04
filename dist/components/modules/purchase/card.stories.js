import { jsx as _jsx } from "react/jsx-runtime";
import { PurchaseCard } from "./card";
import { ControllerColorIcon, CreditCardIcon, StarknetColorIcon, GoogleColorIcon, PhantomColorIcon, ArgentColorIcon, SolanaIcon, StarknetIcon, RabbyColorIcon, EthereumIcon, } from "../../../components/icons";
const meta = {
    title: "Modules/Purchase/Card",
    component: PurchaseCard,
    tags: ["autodocs"],
    parameters: {
        layout: "padded",
    },
    argTypes: {
        text: {
            description: "Payment method text",
            control: { type: "text" },
        },
        icon: {
            description: "Payment method icon",
            control: { type: "object" },
        },
        network: {
            description: "Network text",
            control: { type: "text" },
        },
        networkIcon: {
            description: "Network icon",
            control: { type: "object" },
        },
    },
};
export default meta;
export const Controller = {
    args: {
        text: "Controller",
        icon: _jsx(ControllerColorIcon, {}),
    },
};
export const CreditCard = {
    args: {
        text: "Credit Card",
        icon: _jsx(CreditCardIcon, { variant: "solid" }),
    },
};
export const Starknet = {
    args: {
        text: "Starknet",
        icon: _jsx(StarknetColorIcon, {}),
    },
};
export const Google = {
    args: {
        text: "Google",
        icon: _jsx(GoogleColorIcon, {}),
    },
};
export const PhantomWallet = {
    args: {
        text: "Phantom",
        icon: _jsx(PhantomColorIcon, {}),
        network: "Solana",
        networkIcon: _jsx(SolanaIcon, {}),
    },
};
export const ReadyWallet = {
    args: {
        text: "Ready",
        icon: _jsx(ArgentColorIcon, {}),
        network: "Starknet",
        networkIcon: _jsx(StarknetIcon, {}),
    },
};
export const RabbyWallet = {
    args: {
        text: "Rabby",
        icon: _jsx(RabbyColorIcon, {}),
        network: "Ethereum",
        networkIcon: _jsx(EthereumIcon, {}),
    },
};
//# sourceMappingURL=card.stories.js.map