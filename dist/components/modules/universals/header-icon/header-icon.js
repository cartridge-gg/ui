import { jsx as _jsx } from "react/jsx-runtime";
import { SpaceInvaderIcon } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
const headerIconVariants = cva("flex items-center justify-center rounded", {
    variants: {
        variant: {
            default: "bg-background-200 text-foreground-100",
            ghost: "",
        },
        size: {
            default: "w-11 h-11",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
export const UniversalHeaderIcon = ({ icon, variant, size, className, }) => {
    return (_jsx("div", { className: cn(headerIconVariants({ variant, size }), className), children: typeof icon === "string" ? (icon.includes("fa-") ? (_jsx("div", { className: cn("w-6 h-6 fa-solid", icon) })) : (_jsx("img", { src: icon, alt: "icon", className: "w-9 h-9" }))) : icon ? (icon) : (_jsx(SpaceInvaderIcon, { variant: "solid", size: "lg" })) }));
};
export default UniversalHeaderIcon;
//# sourceMappingURL=header-icon.js.map