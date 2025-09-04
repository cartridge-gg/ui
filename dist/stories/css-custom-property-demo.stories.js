import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { useCSSCustomProperty } from "../hooks/theme";
import { Button } from "../components/primitives/button";
const meta = {
    title: "Hooks/useCSSCustomProperty",
    component: () => _jsx(_Fragment, {}),
    parameters: {
        docs: {
            description: {
                component: "Demonstrates the `useCSSCustomProperty` hook that reactively watches for changes to CSS custom properties.",
            },
        },
    },
};
export default meta;
function CSSPropertyDemo() {
    const coverUrl = useCSSCustomProperty("--theme-cover-url");
    const iconUrl = useCSSCustomProperty("--theme-icon-url");
    const primaryColor = useCSSCustomProperty("--primary-100");
    const [counter, setCounter] = React.useState(0);
    const updateProperties = React.useCallback(() => {
        const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57"];
        const images = [
            "url('https://picsum.photos/800/400?random=1')",
            "url('https://picsum.photos/800/400?random=2')",
            "url('https://picsum.photos/800/400?random=3')",
            "url('https://picsum.photos/800/400?random=4')",
        ];
        const icons = [
            "url('https://picsum.photos/100/100?random=10')",
            "url('https://picsum.photos/100/100?random=11')",
            "url('https://picsum.photos/100/100?random=12')",
            "url('https://picsum.photos/100/100?random=13')",
        ];
        const newCounter = counter + 1;
        setCounter(newCounter);
        // Update CSS custom properties
        document.documentElement.style.setProperty("--primary-100", colors[newCounter % colors.length]);
        document.documentElement.style.setProperty("--theme-cover-url", images[newCounter % images.length]);
        document.documentElement.style.setProperty("--theme-icon-url", icons[newCounter % icons.length]);
    }, [counter]);
    const resetProperties = React.useCallback(() => {
        document.documentElement.style.removeProperty("--primary-100");
        document.documentElement.style.removeProperty("--theme-cover-url");
        document.documentElement.style.removeProperty("--theme-icon-url");
        setCounter(0);
    }, []);
    return (_jsxs("div", { className: "p-6 space-y-6", children: [_jsxs("div", { className: "space-y-4", children: [_jsx("h2", { className: "text-xl font-semibold", children: "CSS Custom Property Watcher Demo" }), _jsx("p", { className: "text-foreground-300", children: "This demo shows how the `useCSSCustomProperty` hook reactively updates when CSS custom properties change." })] }), _jsxs("div", { className: "flex gap-4", children: [_jsxs(Button, { onClick: updateProperties, children: ["Update Properties (", counter, ")"] }), _jsx(Button, { variant: "secondary", onClick: resetProperties, children: "Reset to Default" })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "bg-background-200 p-4 rounded-lg", children: [_jsx("h3", { className: "font-medium mb-2", children: "Cover URL" }), _jsx("p", { className: "text-xs text-foreground-400 break-all", children: coverUrl || "not set" }), _jsx("div", { className: "mt-2 h-20 bg-center bg-cover rounded", style: { backgroundImage: coverUrl || "none" } })] }), _jsxs("div", { className: "bg-background-200 p-4 rounded-lg", children: [_jsx("h3", { className: "font-medium mb-2", children: "Icon URL" }), _jsx("p", { className: "text-xs text-foreground-400 break-all", children: iconUrl || "not set" }), _jsx("div", { className: "mt-2 h-20 w-20 bg-center bg-cover rounded", style: { backgroundImage: iconUrl || "none" } })] }), _jsxs("div", { className: "bg-background-200 p-4 rounded-lg", children: [_jsx("h3", { className: "font-medium mb-2", children: "Primary Color" }), _jsx("p", { className: "text-xs text-foreground-400", children: primaryColor || "default" }), _jsx("div", { className: "mt-2 h-20 rounded", style: { backgroundColor: primaryColor || "var(--primary-100)" } })] })] }), _jsxs("div", { className: "bg-background-300 p-4 rounded-lg", children: [_jsx("h3", { className: "font-medium mb-2", children: "Usage Example" }), _jsx("pre", { className: "text-xs text-foreground-300 overflow-x-auto", children: `const coverUrl = useCSSCustomProperty("--theme-cover-url");
const iconUrl = useCSSCustomProperty("--theme-icon-url");
const primaryColor = useCSSCustomProperty("--primary-100");

// These values will automatically update when CSS properties change!` })] })] }));
}
export const InteractiveDemo = {
    render: () => _jsx(CSSPropertyDemo, {}),
    parameters: {
        docs: {
            description: {
                story: "Interactive demo showing the `useCSSCustomProperty` hook in action. " +
                    "Click 'Update Properties' to see how the hook automatically detects and responds to changes in CSS custom properties. " +
                    "The displayed values and visual elements update in real-time as the underlying CSS properties change.",
            },
        },
    },
};
//# sourceMappingURL=css-custom-property-demo.stories.js.map