import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { EthereumIcon, TransferIcon } from "../../index";
import { UIProvider } from "../../context";
import { LayoutHeader } from "./index";
const meta = {
    title: "Layout/Header",
    component: LayoutHeader,
    tags: ["autodocs"],
    parameters: {
        backgrounds: {
            default: "dark",
            values: [{ name: "dark", value: "#161a17" }],
        },
    },
    args: {
        variant: "compressed",
        title: "Welcome to Keychain",
        description: "Secure your digital assets",
        onBack: undefined,
        onClose: undefined,
    },
};
export default meta;
export const Expanded = {
    args: {
        variant: "expanded",
    },
};
export const Compressed = {};
export const IconComponentProp = {
    args: {
        Icon: TransferIcon,
    },
};
export const IconElementProp = {
    args: {
        icon: _jsx(EthereumIcon, { size: "lg" }),
    },
};
export const VeryLongTitle = {
    args: {
        title: "This is a very long title that should be truncated",
        description: "This is a very long description that should be wrapped and demonstrate how text behaves when it extends beyond multiple lines. It's important to test how the UI handles lengthy content to ensure proper wrapping, readability, and overall visual appeal. How does this much longer description look in the component?",
    },
};
export const CustomIconUrl = {
    args: {
        title: "Custom Icon URL Example",
        description: "This header uses a custom icon defined via CSS variable",
    },
    decorators: [
        (Story) => {
            // Set the custom icon URL CSS variable
            const originalIconUrl = document.documentElement.style.getPropertyValue("--theme-icon-url");
            document.documentElement.style.setProperty("--theme-icon-url", "https://static.cartridge.gg/presets/slot/icon.svg");
            // Clean up on unmount
            React.useEffect(() => {
                return () => {
                    if (originalIconUrl) {
                        document.documentElement.style.setProperty("--theme-icon-url", originalIconUrl);
                    }
                    else {
                        document.documentElement.style.removeProperty("--theme-icon-url");
                    }
                };
            }, []);
            return (_jsx("div", { children: _jsx(Story, {}) }));
        },
    ],
    parameters: {
        docs: {
            description: {
                story: "This example demonstrates using a custom icon URL via the `--theme-icon-url` CSS variable. The header will automatically use this URL for the icon when no Icon or icon prop is provided.",
            },
        },
    },
};
export const CustomIconUrlExpanded = {
    args: {
        variant: "expanded",
        title: "Custom Icon - Expanded View",
        description: "Same custom icon URL in expanded header variant",
    },
    decorators: [
        (Story) => {
            // Set the custom icon URL CSS variable
            const originalIconUrl = document.documentElement.style.getPropertyValue("--theme-icon-url");
            document.documentElement.style.setProperty("--theme-icon-url", "https://static.cartridge.gg/presets/slot/icon.svg");
            // Clean up on unmount
            React.useEffect(() => {
                return () => {
                    if (originalIconUrl) {
                        document.documentElement.style.setProperty("--theme-icon-url", originalIconUrl);
                    }
                    else {
                        document.documentElement.style.removeProperty("--theme-icon-url");
                    }
                };
            }, []);
            return (_jsx("div", { children: _jsx(Story, {}) }));
        },
    ],
};
export const WithBackButton = {
    args: {
        onBack: () => { },
    },
};
export const WithCloseButton = {
    args: {
        onClose: () => { },
    },
};
export const WithConnectedUser = {
    args: {
        onOpenStarterPack: null,
        onBack: () => { },
    },
    decorators: [
        (Story) => {
            // Mock the useUI hook to provide connected user state
            const mockUIContext = {
                account: {
                    username: "player.stark",
                    address: "0x1234567890abcdef1234567890abcdef12345678",
                },
                chainId: "0x534e5f4d41494e", // Starknet Mainnet
            };
            return (_jsx(UIProvider, { value: mockUIContext, children: _jsx(Story, {}) }));
        },
    ],
};
export const ReactiveThemeChanges = {
    render: () => {
        const [themeCount, setThemeCount] = React.useState(0);
        const themes = [
            {
                name: "Default",
                coverUrl: "",
                iconUrl: "",
            },
            {
                name: "Custom Theme 1",
                coverUrl: "url('https://picsum.photos/800/400?random=1')",
                iconUrl: "url('https://picsum.photos/100/100?random=1')",
            },
            {
                name: "Custom Theme 2",
                coverUrl: "url('https://picsum.photos/800/400?random=2')",
                iconUrl: "url('https://picsum.photos/100/100?random=2')",
            },
        ];
        const currentTheme = themes[themeCount % themes.length];
        // Apply theme changes dynamically
        React.useEffect(() => {
            if (currentTheme.coverUrl) {
                document.documentElement.style.setProperty("--theme-cover-url", currentTheme.coverUrl);
            }
            else {
                document.documentElement.style.removeProperty("--theme-cover-url");
            }
            if (currentTheme.iconUrl) {
                document.documentElement.style.setProperty("--theme-icon-url", currentTheme.iconUrl);
            }
            else {
                document.documentElement.style.removeProperty("--theme-icon-url");
            }
        }, [currentTheme]);
        return (_jsxs("div", { className: "w-full", children: [_jsxs("div", { className: "mb-4 p-4 bg-background-200 rounded", children: [_jsxs("p", { className: "text-sm text-foreground-300 mb-2", children: ["Current Theme: ", _jsx("strong", { children: currentTheme.name })] }), _jsxs("button", { className: "bg-primary text-primary-foreground px-4 py-2 rounded hover:opacity-80", onClick: () => setThemeCount((c) => c + 1), children: ["Switch Theme (", ((themeCount + 1) % themes.length) + 1, "/3)"] }), _jsx("p", { className: "text-xs text-foreground-400 mt-2", children: "Notice how the header background and icon update reactively when you click the button. This demonstrates the useCSSCustomProperty hook working correctly." })] }), _jsx(LayoutHeader, { variant: "expanded", title: "Reactive Theme Demo", description: "This header updates automatically when CSS custom properties change" })] }));
    },
    parameters: {
        docs: {
            description: {
                story: "This story demonstrates the reactive behavior of the header when CSS custom properties change. " +
                    "The header will automatically update its background image and icon when `--theme-cover-url` and `--theme-icon-url` are modified. " +
                    "Click the 'Switch Theme' button to see the changes in real-time.",
            },
        },
    },
};
//# sourceMappingURL=header.stories.js.map