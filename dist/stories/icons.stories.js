import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { badgeIcons, brandColorIcons, brandIcons, directionalIcons, stateIcons, utilityIcons, } from "../components/icons";
import { size } from "../components/icons/utils";
import { cn } from "../utils";
const iconsByCategory = {
    badge: badgeIcons,
    brand: brandIcons,
    "brand-color": brandColorIcons,
    directional: directionalIcons,
    state: stateIcons,
    utility: utilityIcons,
};
const meta = {
    title: "Primitives/Icons",
    component: Icons,
    tags: ["autodocs"],
    argTypes: {
        category: {
            control: "select",
            options: Object.keys(iconsByCategory),
        },
        className: {
            control: "text",
            description: "Apply icon color by `text-<color-name>`.",
            table: {
                defaultValue: { summary: "text-current" },
            },
        },
        size: {
            control: "radio",
            options: Object.keys(size),
            table: {
                defaultValue: { summary: "default" },
            },
        },
        directionalVariant: {
            control: "radio",
            options: ["up", "right", "down", "left"],
            description: "Directional icons only.",
        },
        stateVariant: {
            control: "radio",
            options: ["solid", "line"],
            defaultValue: "solid",
            description: "State icons only.",
            table: {
                defaultValue: { summary: "solid" },
            },
        },
    },
    args: {
        category: "state",
        className: "text-foreground",
        size: "default",
        directionalVariant: "up",
        stateVariant: "solid",
    },
};
export default meta;
export const Badge = {
    args: {
        category: "badge",
    },
};
export const Brand = {
    args: {
        category: "brand",
    },
};
export const BrandColor = {
    args: {
        category: "brand-color",
    },
};
export const Directional = {
    args: {
        category: "directional",
    },
};
export const State = {
    args: {
        category: "state",
    },
};
export const Utility = {
    args: {
        category: "utility",
    },
};
function Icons({ className, category, size, directionalVariant, stateVariant, }) {
    return (_jsx("div", { className: "grid grid-cols-3 sm:grip-cols-4 md:grid-cols-6 gap-2", children: Object.entries(iconsByCategory[category]).map(([, icon]) => (_jsxs("div", { className: cn("border rounded flex flex-col items-center py-4 px-2 gap-2 overflow-hidden", className), children: [(() => {
                    switch (category) {
                        case "directional": {
                            const DirectionalIcon = icon;
                            return (_jsx(DirectionalIcon, { size: size, variant: directionalVariant }));
                        }
                        case "state": {
                            const StateIcon = icon;
                            return _jsx(StateIcon, { size: size, variant: stateVariant });
                        }
                        default: {
                            const Icon = icon;
                            return _jsx(Icon, { size: size });
                        }
                    }
                })(), _jsx("p", { className: "text-[10px] md:text-xs text-foreground-400", children: icon.displayName })] }, icon.displayName))) }));
}
//# sourceMappingURL=icons.stories.js.map