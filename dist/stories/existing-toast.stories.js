import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../components/primitives/button";
import { useToast } from "../components/primitives/toast/use-toast";
import { Toaster } from "../components/primitives/toast/toaster";
const meta = {
    title: "Primitives/Toast/Existing Toast System",
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
};
export default meta;
function ExistingToastDemo() {
    const { toast } = useToast();
    const showBasicToast = () => {
        toast({
            title: "Basic Toast",
            description: "This is a basic toast notification using the existing system.",
        });
    };
    const showDestructiveToast = () => {
        toast({
            title: "Error Occurred",
            description: "Something went wrong with your request.",
            variant: "destructive",
        });
    };
    const showToastWithAction = () => {
        toast({
            title: "Update Available",
            description: "A new version is available for download.",
            action: (_jsx(Button, { variant: "outline", size: "default", children: "Update" })),
        });
    };
    return (_jsxs("div", { className: "space-y-4", children: [_jsx("div", { className: "text-white text-lg font-semibold mb-4", children: "Existing Toast System" }), _jsxs("div", { className: "space-y-2", children: [_jsx(Button, { onClick: showBasicToast, className: "w-full", children: "Show Basic Toast" }), _jsx(Button, { onClick: showDestructiveToast, variant: "destructive", className: "w-full", children: "Show Error Toast" }), _jsx(Button, { onClick: showToastWithAction, variant: "outline", className: "w-full", children: "Show Toast with Action" })] }), _jsx("div", { className: "text-xs text-gray-400 mt-4", children: "These are the existing toast notifications using the original Radix-based system" }), _jsx(Toaster, {})] }));
}
export const ExistingToasts = {
    render: () => _jsx(ExistingToastDemo, {}),
};
export const ComparisonDemo = {
    render: () => (_jsxs("div", { className: "space-y-4 text-white", children: [_jsx("h2", { className: "text-lg font-semibold", children: "Toast System Comparison" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-3", children: [_jsx("h3", { className: "font-medium text-blue-400", children: "Existing Toast System" }), _jsxs("div", { className: "text-sm space-y-2", children: [_jsx("p", { children: "\u2705 Simple title + description format" }), _jsx("p", { children: "\u2705 Basic styling variants (default, destructive)" }), _jsx("p", { children: "\u2705 Action button support" }), _jsx("p", { children: "\u2705 Auto-dismiss functionality" }), _jsx("p", { children: "\u2705 Swipe to dismiss" })] }), _jsx("pre", { className: "bg-gray-800 p-2 rounded text-xs", children: `toast({
  title: "Success",
  description: "Operation completed",
  variant: "default"
});` })] }), _jsxs("div", { className: "space-y-3", children: [_jsx("h3", { className: "font-medium text-green-400", children: "Specialized Toast Components" }), _jsxs("div", { className: "text-sm space-y-2", children: [_jsx("p", { children: "\u2705 Rich visual components with icons" }), _jsx("p", { children: "\u2705 Animated progress bars" }), _jsx("p", { children: "\u2705 XP rewards and game-specific data" }), _jsx("p", { children: "\u2705 Network switching notifications" }), _jsx("p", { children: "\u2705 Transaction status tracking" }), _jsx("p", { children: "\u2705 Built on existing toast system" })] }), _jsx("pre", { className: "bg-gray-800 p-2 rounded text-xs", children: `toast(showAchievementToast({
  title: "Quest Complete",
  xpAmount: 150,
  progress: 100
}));` })] })] }), _jsxs("div", { className: "mt-6 p-4 bg-gray-800 rounded", children: [_jsx("h4", { className: "font-medium text-yellow-400 mb-2", children: "Best Practices" }), _jsxs("ul", { className: "text-sm space-y-1", children: [_jsxs("li", { children: ["\u2022 Use ", _jsx("strong", { children: "existing toasts" }), " for simple notifications and confirmations"] }), _jsxs("li", { children: ["\u2022 Use ", _jsx("strong", { children: "specialized toasts" }), " for game events, achievements, and rich interactions"] }), _jsx("li", { children: "\u2022 Both systems work together seamlessly through the same useToast hook" }), _jsx("li", { children: "\u2022 All toasts appear in the same viewport with consistent positioning" })] })] })] })),
};
//# sourceMappingURL=existing-toast.stories.js.map