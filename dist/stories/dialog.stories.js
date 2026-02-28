import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AlertDialog as UIAlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "../components/primitives/alert-dialog";
import { Dialog as UIDialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "../components/primitives/dialog";
const meta = {
    title: "Primitives/Dialog",
    component: Dialog,
    tags: ["autodocs"],
};
export default meta;
export const Default = {};
function Dialog() {
    return (_jsxs(UIDialog, { children: [_jsx(DialogTrigger, { children: "Open" }), _jsx(DialogContent, { children: _jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: "Are you absolutely sure?" }), _jsx(DialogDescription, { children: "This action cannot be undone. This will permanently delete your account and remove your data from our servers." })] }) })] }));
}
export function AlertDialog() {
    return (_jsxs(UIAlertDialog, { children: [_jsx(AlertDialogTrigger, { children: "Open" }), _jsxs(AlertDialogContent, { children: [_jsxs(AlertDialogHeader, { children: [_jsx(AlertDialogTitle, { children: "Are you absolutely sure?" }), _jsx(AlertDialogDescription, { children: "This action cannot be undone. This will permanently delete your account and remove your data from our servers." })] }), _jsxs(AlertDialogFooter, { children: [_jsx(AlertDialogCancel, { children: "Cancel" }), _jsx(AlertDialogAction, { children: "Continue" })] })] })] }));
}
//# sourceMappingURL=dialog.stories.js.map