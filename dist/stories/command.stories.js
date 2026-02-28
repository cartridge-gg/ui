import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Command as UICommand, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, } from "../components/primitives/command";
const meta = {
    title: "Primitives/Command",
    component: Command,
    tags: ["autodocs"],
};
export default meta;
export const Default = {};
function Command() {
    return (_jsxs(UICommand, { children: [_jsx(CommandInput, { placeholder: "Type a command or search..." }), _jsxs(CommandList, { children: [_jsx(CommandEmpty, { children: "No results found." }), _jsxs(CommandGroup, { heading: "Suggestions", children: [_jsx(CommandItem, { children: "Calendar" }), _jsx(CommandItem, { children: "Search Emoji" }), _jsx(CommandItem, { children: "Calculator" })] }), _jsx(CommandSeparator, {}), _jsxs(CommandGroup, { heading: "Settings", children: [_jsx(CommandItem, { children: "Profile" }), _jsx(CommandItem, { children: "Billing" }), _jsx(CommandItem, { children: "Settings" })] })] })] }));
}
//# sourceMappingURL=command.stories.js.map