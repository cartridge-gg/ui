import { fn } from "@storybook/test";
import { Amount } from "./amount";
const meta = {
    title: "Modules/Amount",
    component: Amount,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        amount: undefined,
        balance: 1000,
        symbol: "LORDS",
        decimals: 18,
        conversion: undefined,
        onChange: fn(),
        onMax: fn(),
        setError: fn(),
    },
};
export default meta;
export const Default = {};
export const ZeroAmount = {
    args: {
        balance: 0,
        amount: 0,
    },
};
export const NonZeroAmount = {
    args: {
        amount: 50,
        conversion: "$16.54",
    },
};
export const NegativeAmount = {
    args: {
        amount: -1,
    },
};
export const ZeroDecimals = {
    args: {
        amount: -1,
        conversion: "$16.54",
        decimals: 0,
    },
};
export const IncrementButtons = {
    args: {
        onPlus: fn(),
        onMinus: fn(),
        min: 0,
        max: 100,
    },
};
//# sourceMappingURL=amount.stories.js.map