import { WalletType } from "../../../components";
import { fn } from "@storybook/test";
import { Recipient } from "./recipient";
const meta = {
    title: "Modules/Recipient",
    component: Recipient,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        to: "",
        value: "",
        selectedName: "",
        selectedAddress: "",
        selectedWallet: WalletType.None,
        resultName: "",
        resultAddress: "",
        resultWallet: WalletType.None,
        isFocused: false,
        isHovered: false,
        isLoading: false,
        onChange: fn(),
        onFocus: fn(),
        onBlur: fn(),
        onClear: fn(),
        onResultClick: fn(),
        onResultEnter: fn(),
        onResultLeave: fn(),
    },
};
export default meta;
export const Default = {};
export const Error = {
    args: {
        value: "shnobiw.stark",
        error: { name: "error", message: "Could not get address from stark name" },
    },
};
export const ControllerValidated = {
    args: {
        value: "shinobi",
        resultName: "shinobi.ctrl.stark",
        resultAddress: "0x040eef43f4d7b9cc357312a83365c3649273886c5394efafdcc9144bd6b86424",
        resultWallet: WalletType.Controller,
        isFocused: true,
    },
};
export const ControllerConfirmed = {
    args: {
        value: "clicksave.ctrl.stark",
        selectedName: "clicksave",
        selectedAddress: "0x040eef43f4d7b9cc357312a83365c3649273886c5394efafdcc9144bd6b86424",
        selectedWallet: WalletType.Controller,
    },
};
export const ArgentValidated = {
    args: {
        value: "0x040eef43f4d7b9cc357312a83365c3649273886c5394efafdcc9144bd6b86424",
        resultName: "clicksave.stark",
        resultAddress: "0x040eef43f4d7b9cc357312a83365c3649273886c5394efafdcc9144bd6b86424",
        resultWallet: WalletType.ArgentX,
        isFocused: true,
    },
};
export const ArgentConfirmed = {
    args: {
        value: "clicksave.stark",
        selectedName: "clicksave",
        selectedAddress: "0x040eef43f4d7b9cc357312a83365c3649273886c5394efafdcc9144bd6b86424",
        selectedWallet: WalletType.ArgentX,
    },
};
export const BraavosPreview = {
    args: {
        resultAddress: "0x040eef43f4d7b9cc357312a83365c3649273886c5394efafdcc9144bd6b86424",
        resultWallet: WalletType.Braavos,
        isFocused: true,
        isHovered: false,
        isLoading: false,
    },
};
export const ArgentPreview = {
    args: {
        resultName: "clicksave.stark",
        resultAddress: "0x040eef43f4d7b9cc357312a83365c3649273886c5394efafdcc9144bd6b86424",
        resultWallet: WalletType.ArgentX,
        isFocused: true,
        isHovered: false,
        isLoading: false,
    },
};
export const OpenZeppelinPreview = {
    args: {
        resultAddress: "0x040eef43f4d7b9cc357312a83365c3649273886c5394efafdcc9144bd6b86424",
        resultWallet: WalletType.OpenZeppelin,
        isFocused: true,
        isHovered: false,
        isLoading: false,
    },
};
export const WalletPreview = {
    args: {
        resultAddress: "0x040eef43f4d7b9cc357312a83365c3649273886c5394efafdcc9144bd6b86424",
        resultWallet: WalletType.None,
        isFocused: true,
        isHovered: false,
        isLoading: false,
    },
};
export const ControllerPreview = {
    args: {
        resultName: "shinobi.ctrl.stark",
        resultAddress: "0x040eef43f4d7b9cc357312a83365c3649273886c5394efafdcc9144bd6b86424",
        resultWallet: WalletType.Controller,
        isFocused: true,
        isHovered: false,
        isLoading: false,
    },
};
export const ControllerNamedSelection = {
    args: {
        selectedName: "clicksave",
        selectedAddress: "0x040eef43f4d7b9cc357312a83365c3649273886c5394efafdcc9144bd6b86424",
        selectedWallet: WalletType.Controller,
    },
};
export const ArgentNamedSelection = {
    args: {
        selectedName: "clicksave.stark",
        selectedAddress: "0x040eef43f4d7b9cc357312a83365c3649273886c5394efafdcc9144bd6b86424",
        selectedWallet: WalletType.ArgentX,
    },
};
export const BraavosNamedSelection = {
    args: {
        selectedName: "clicksave.stark",
        selectedAddress: "0x040eef43f4d7b9cc357312a83365c3649273886c5394efafdcc9144bd6b86424",
        selectedWallet: WalletType.Braavos,
    },
};
export const WalletNamedSelection = {
    args: {
        selectedName: "clicksave.stark",
        selectedAddress: "0x040eef43f4d7b9cc357312a83365c3649273886c5394efafdcc9144bd6b86424",
        selectedWallet: WalletType.None,
    },
};
export const OpenzeppelinNamedSelection = {
    args: {
        selectedName: "clicksave.stark",
        selectedAddress: "0x040eef43f4d7b9cc357312a83365c3649273886c5394efafdcc9144bd6b86424",
        selectedWallet: WalletType.OpenZeppelin,
    },
};
export const ArgentUnamedSelection = {
    args: {
        selectedAddress: "0x040eef43f4d7b9cc357312a83365c3649273886c5394efafdcc9144bd6b86424",
        selectedWallet: WalletType.ArgentX,
    },
};
export const BraavosUnamedSelection = {
    args: {
        selectedAddress: "0x040eef43f4d7b9cc357312a83365c3649273886c5394efafdcc9144bd6b86424",
        selectedWallet: WalletType.Braavos,
    },
};
export const WalletUnamedSelection = {
    args: {
        selectedAddress: "0x040eef43f4d7b9cc357312a83365c3649273886c5394efafdcc9144bd6b86424",
        selectedWallet: WalletType.None,
    },
};
export const OpenzeppelinUnamedSelection = {
    args: {
        selectedAddress: "0x040eef43f4d7b9cc357312a83365c3649273886c5394efafdcc9144bd6b86424",
        selectedWallet: WalletType.OpenZeppelin,
    },
};
//# sourceMappingURL=recipient.stories.js.map