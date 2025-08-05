import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { AchievementPinIcon } from "../pin-icon";
const achievementPinsVariants = cva("flex items-center gap-1.5", {
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
        size: {
            xs: "",
            default: "",
            md: "",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
export const AchievementPinIcons = ({ pins, theme, variant, size, className, color, }) => {
    return (_jsxs("div", { className: achievementPinsVariants({ variant, size }), children: [pins.map((value) => (_jsx(AchievementPinIcon, { icon: value.icon, variant: variant, size: size, theme: theme, className: className, color: color }, value.id))), Array.from({ length: 3 - pins.length }).map((_, index) => (_jsx(AchievementPinIcon, { empty: true, variant: variant, size: size, theme: false, className: className }, index)))] }));
};
export default AchievementPinIcons;
//# sourceMappingURL=pin-icons.js.map