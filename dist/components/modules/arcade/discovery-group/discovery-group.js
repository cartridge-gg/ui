import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArcadeDiscoveryEvent, ArcadeGameHeader, } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
export const arcadeDiscoveryGroupVariants = cva("select-none flex flex-col gap-y-px data-[rounded=true]:rounded-lg data-[rounded=true]:overflow-hidden", {
    variants: {
        variant: {
            darkest: "",
            darker: "",
            dark: "",
            default: "",
            light: "",
            lighter: "",
            lightest: "",
            ghost: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const ArcadeDiscoveryGroup = ({ game, events, loading, rounded, variant, className, color, }) => {
    return (_jsxs("div", { "data-rounded": rounded, className: cn(arcadeDiscoveryGroupVariants({ variant }), className), children: [_jsx(ArcadeGameHeader, { variant: variant, ...game }), events.map((event, index) => (_jsx(ArcadeDiscoveryEvent, { loading: loading, className: className, variant: variant, color: color, ...event }, index)))] }));
};
//# sourceMappingURL=discovery-group.js.map