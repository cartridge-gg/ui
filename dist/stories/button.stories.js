import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../components/primitives/button";
import { ArrowToLineIcon, CoinsIcon, GiftIcon } from "../components";
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
    args: {
        children: "sign up",
    },
};
export const DefaultLoading = {
    args: {
        children: "sign up",
        isLoading: true,
    },
};
export const DefaultDisabled = {
    args: {
        children: "sign up",
        disabled: true,
    },
};
export const DefaultWithIcon = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsx(CoinsIcon, { variant: "solid", size: "sm" }), " sign up"] })),
    },
};
export const DefaultWithIconDisabled = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsx(CoinsIcon, { variant: "solid", size: "sm" }), " sign up"] })),
        disabled: true,
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