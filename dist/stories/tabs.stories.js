import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tabs as UITabs, TabsContent, TabsList, TabsTrigger, } from "../components/primitives/tabs";
const meta = {
    title: "Primitives/Tabs",
    component: Tabs,
    tags: ["autodocs"],
};
export default meta;
export const Default = {};
function Tabs() {
    return (_jsxs(UITabs, { defaultValue: "account", className: "w-[400px]", children: [_jsxs(TabsList, { children: [_jsx(TabsTrigger, { value: "account", children: "Account" }), _jsx(TabsTrigger, { value: "password", children: "Password" })] }), _jsx(TabsContent, { value: "account", children: "Make changes to your account here." }), _jsx(TabsContent, { value: "password", children: "Change your password here." })] }));
}
//# sourceMappingURL=tabs.stories.js.map