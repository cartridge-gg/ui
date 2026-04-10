import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button } from "../components/primitives/button";
import { ArrowToLineIcon, CoinsIcon, GiftIcon, Separator } from "../components";
import { ControllerStack } from "../utils/mock/controller-stack";
const meta = {
    title: "Primitives/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        children: {
            control: "text",
            description: "label",
        },
        disabled: {
            control: "boolean",
            description: "Gray out a button when disabled",
        },
        isLoading: {
            control: "boolean",
            description: "Show loading indicator.",
        },
    },
};
export default meta;
export const Default = {
    render: () => (_jsxs(ControllerStack, { children: [_jsx(Button, { children: "Primary" }), _jsx(Button, { disabled: true, children: "Disabled" }), _jsx(Button, { isLoading: true, children: "Loading" }), _jsx(Separator, { className: "bg-background-400" }), _jsxs(Button, { children: [_jsx(CoinsIcon, { variant: "solid", size: "sm" }), " Primary + Icon"] }), _jsxs(Button, { disabled: true, children: [_jsx(CoinsIcon, { variant: "solid", size: "sm" }), " Disabled"] }), _jsxs(Button, { isLoading: true, children: [_jsx(CoinsIcon, { variant: "solid", size: "sm" }), " Loading"] }), _jsx(Separator, { className: "bg-background-400" }), _jsx(Button, { variant: "secondary", children: "Secondary" }), _jsx(Button, { variant: "secondary", disabled: true, children: "Disabled" }), _jsx(Button, { variant: "secondary", isLoading: true, children: "Loading" }), _jsx(Separator, { className: "bg-background-400" }), _jsxs(Button, { variant: "secondary", children: [_jsx(CoinsIcon, { variant: "solid", size: "sm" }), " Secondary + Icon"] }), _jsxs(Button, { variant: "secondary", disabled: true, children: [_jsx(CoinsIcon, { variant: "solid", size: "sm" }), " Disabled"] }), _jsxs(Button, { variant: "secondary", isLoading: true, children: [_jsx(CoinsIcon, { variant: "solid", size: "sm" }), " Loading"] }), _jsx(Separator, { className: "bg-background-400" }), _jsx(Button, { variant: "destructive", children: "Destructive" }), _jsx(Button, { variant: "destructive", disabled: true, children: "Disabled" }), _jsx(Button, { variant: "destructive", isLoading: true, children: "Loading" }), _jsx(Separator, { className: "bg-background-400" }), _jsxs(Button, { variant: "destructive", children: [_jsx(CoinsIcon, { variant: "solid", size: "sm" }), " Destructive + Icon"] }), _jsxs(Button, { variant: "destructive", disabled: true, children: [_jsx(CoinsIcon, { variant: "solid", size: "sm" }), " Disabled"] }), _jsxs(Button, { variant: "destructive", isLoading: true, children: [_jsx(CoinsIcon, { variant: "solid", size: "sm" }), " Loading"] }), _jsx(Separator, { className: "bg-background-400" }), _jsx(Button, { variant: "tertiary", children: "Tertiary" }), _jsx(Button, { variant: "tertiary", isActive: true, children: "Active" }), _jsx(Button, { variant: "tertiary", disabled: true, children: "Disabled" }), _jsx(Button, { variant: "tertiary", isLoading: true, children: "Loading" }), _jsx(Separator, { className: "bg-background-400" }), _jsxs(Button, { variant: "tertiary", children: [_jsx(CoinsIcon, { variant: "solid", size: "sm" }), " Tertiary + Icon"] }), _jsxs(Button, { variant: "tertiary", isActive: true, children: [_jsx(CoinsIcon, { variant: "solid", size: "sm" }), " Active"] }), _jsxs(Button, { variant: "tertiary", disabled: true, children: [_jsx(CoinsIcon, { variant: "solid", size: "sm" }), " Disabled"] }), _jsxs(Button, { variant: "tertiary", isLoading: true, children: [_jsx(CoinsIcon, { variant: "solid", size: "sm" }), " Loading"] }), _jsx(Separator, { className: "bg-background-400" }), _jsx("h3", { children: "With Quantity" }), _jsx(Button, { quantity: "2", children: "Primary" }), _jsx(Button, { quantity: "2", disabled: true, children: "Disabled" }), _jsx(Button, { quantity: "2", variant: "secondary", children: "Secondary" }), _jsx(Button, { quantity: "2", variant: "secondary", disabled: true, children: "Disabled" }), _jsx(Button, { quantity: "2", variant: "destructive", children: "Destructive" }), _jsx(Button, { quantity: "2", variant: "destructive", disabled: true, children: "Disabled" })] })),
};
export const Primary = {
    args: {
        children: "sign up",
    },
};
export const PrimaryLoading = {
    args: {
        children: "sign up",
        isLoading: true,
    },
};
export const PrimaryDisabled = {
    args: {
        children: "sign up",
        disabled: true,
    },
};
export const PrimaryWithIcon = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsx(CoinsIcon, { variant: "solid", size: "sm" }), " sign up"] })),
    },
};
export const PrimaryWithIconDisabled = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsx(CoinsIcon, { variant: "solid", size: "sm" }), " sign up"] })),
        disabled: true,
    },
};
export const PrimaryWithQuantity = {
    args: {
        children: "sign up",
        quantity: "2",
    },
};
export const Secondary = {
    args: {
        children: "skip",
        variant: "secondary",
    },
};
export const SecondaryLoading = {
    args: {
        children: "skip",
        variant: "secondary",
        isLoading: true,
    },
};
export const SecondaryDisabled = {
    args: {
        children: "skip",
        disabled: true,
        variant: "secondary",
    },
};
export const SecondaryWithIcon = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsx(CoinsIcon, { variant: "solid", size: "sm" }), " skip"] })),
        variant: "secondary",
    },
};
export const SecondaryWithIconDisabled = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsx(CoinsIcon, { variant: "solid", size: "sm" }), " skip"] })),
        disabled: true,
        variant: "secondary",
    },
};
export const SecondaryWithQuantity = {
    args: {
        children: "skip",
        quantity: "2",
        variant: "secondary",
    },
};
export const Tertiary = {
    args: {
        children: "$1",
        variant: "tertiary",
    },
};
export const TertiaryLoading = {
    args: {
        children: "$1",
        variant: "tertiary",
        isLoading: true,
    },
};
export const TertiaryActive = {
    args: {
        children: "$1",
        variant: "tertiary",
        isActive: true,
    },
};
export const TertiaryWithQuantity = {
    args: {
        children: "$1",
        quantity: "2",
        variant: "tertiary",
    },
};
export const IconDeposit = {
    args: {
        children: _jsx(ArrowToLineIcon, { variant: "down" }),
        size: "icon",
        variant: "icon",
    },
};
export const IconToggle = {
    args: {
        children: _jsx(GiftIcon, { variant: "line" }),
        size: "icon",
        variant: "icon",
    },
};
export const ThumnailDeposit = {
    args: {
        children: _jsx(ArrowToLineIcon, { variant: "down" }),
        size: "thumbnail",
        variant: "icon",
    },
};
export const ThumnailToggle = {
    args: {
        children: _jsx(GiftIcon, { variant: "line" }),
        size: "thumbnail",
        variant: "icon",
    },
};
export const ExternalLink = {
    args: {
        children: "View on Voyager",
        variant: "link",
    },
};
//# sourceMappingURL=button.stories.js.map