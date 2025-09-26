import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Breadcrumb as UIBreadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis, } from "../components/primitives/breadcrumb";
import { SlashIcon } from "../components/icons";
const meta = {
    title: "Primitives/Breadcrumb",
    component: Breadcrumb,
    tags: ["autodocs"],
};
export default meta;
export const Default = {};
function Breadcrumb() {
    return (_jsx(UIBreadcrumb, { children: _jsxs(BreadcrumbList, { children: [_jsx(BreadcrumbItem, { children: _jsx(BreadcrumbLink, { href: "/", children: "Home" }) }), _jsx(BreadcrumbSeparator, {}), _jsx(BreadcrumbItem, { children: _jsx(BreadcrumbLink, { href: "/components", children: "Components" }) }), _jsx(BreadcrumbSeparator, {}), _jsx(BreadcrumbItem, { children: _jsx(BreadcrumbPage, { children: "Breadcrumb" }) })] }) }));
}
export function CustomSeparator() {
    return (_jsx(UIBreadcrumb, { children: _jsxs(BreadcrumbList, { children: [_jsx(BreadcrumbItem, { children: _jsx(BreadcrumbLink, { href: "/", children: "Home" }) }), _jsx(BreadcrumbSeparator, { children: _jsx(SlashIcon, {}) }), _jsx(BreadcrumbItem, { children: _jsx(BreadcrumbLink, { href: "/components", children: "Components" }) }), _jsx(BreadcrumbSeparator, { children: _jsx(SlashIcon, {}) }), _jsx(BreadcrumbItem, { children: _jsx(BreadcrumbPage, { children: "Breadcrumb" }) })] }) }));
}
export function Ellipsis() {
    return (_jsx(UIBreadcrumb, { children: _jsxs(BreadcrumbList, { children: [_jsx(BreadcrumbItem, { children: _jsx(BreadcrumbLink, { href: "/", children: "Home" }) }), _jsx(BreadcrumbSeparator, {}), _jsx(BreadcrumbItem, { children: _jsx(BreadcrumbPage, { children: "Breadcrumb" }) }), _jsx(BreadcrumbSeparator, {}), _jsx(BreadcrumbEllipsis, {}), _jsx(BreadcrumbSeparator, {}), _jsx(BreadcrumbItem, { children: _jsx(BreadcrumbLink, { href: "/components", children: "Breadcrumb N" }) })] }) }));
}
//# sourceMappingURL=breadcrumb.stories.js.map