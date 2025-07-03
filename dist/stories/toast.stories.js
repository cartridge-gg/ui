import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from "../components/primitives/button";
import { useToast } from "../components/primitives/toast/use-toast";
const meta = {
    title: "Primitives/Toast",
    component: Toast,
    tags: ["autodocs"],
};
export default meta;
export const Default = {};
function Toast() {
    const { toast } = useToast();
    return (_jsx(Button, { onClick: () => {
            toast({
                title: "Scheduled: Catch up",
                description: "Friday, February 10, 2023 at 5:57 PM",
            });
        }, children: "Show Toast" }));
}
//# sourceMappingURL=toast.stories.js.map