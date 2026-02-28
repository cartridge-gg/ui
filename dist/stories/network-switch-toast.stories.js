import { jsx as _jsx } from "react/jsx-runtime";
import { NetworkSwitchToast } from "../components/primitives/toast/specialized-toasts";
import { StarknetIcon } from "../components/icons/brand";
const meta = {
    title: "Primitives/Toast/Network Switch Toast",
    component: NetworkSwitchToast,
    parameters: {
        layout: "centered",
        backgrounds: {
            default: "dark",
            values: [
                { name: "dark", value: "#353535" },
                { name: "light", value: "#ffffff" },
            ],
        },
    },
    decorators: [
        (Story) => (_jsx("div", { children: _jsx(Story, {}) })),
    ],
    argTypes: {
        networkName: { control: "text" },
    },
};
export default meta;
export const StarknetMainnet = {
    args: {
        networkName: "Starknet Mainnet",
        networkIcon: _jsx(StarknetIcon, { size: "default" }),
    },
};
export const NumsChain = {
    args: {
        networkName: "Nums Chain",
        networkIcon: (_jsx("div", { className: "w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold", children: "N" })),
    },
};
export const EthereumMainnet = {
    args: {
        networkName: "Ethereum Mainnet",
        networkIcon: (_jsx("div", { className: "w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold", children: "E" })),
    },
};
export const CustomNetwork = {
    args: {
        networkName: "Custom Network",
        networkIcon: (_jsx("div", { className: "w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold", children: "C" })),
    },
};
//# sourceMappingURL=network-switch-toast.stories.js.map