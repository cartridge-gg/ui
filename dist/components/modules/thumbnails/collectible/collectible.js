import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Thumbnail } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import { PLACEHOLDER } from "../../../../assets";
const thumbnailCollectibleVariants = cva("border-transparent", {
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
            xxs: "border-[2px] p-px",
            xs: "border-[2px] p-px",
            sm: "border-[2px] p-px",
            md: "border-[2px] p-0.5",
            lg: "border-[3px] p-0.5",
            xl: "border-[3px] p-0.5",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "md",
    },
});
export const ThumbnailCollectible = ({ image, subIcon, error, loading, variant, size, className, }) => {
    return (_jsx(Thumbnail, { icon: _jsxs("div", { className: "relative h-full w-full flex items-center justify-center overflow-hidden rounded-sm", children: [_jsx("div", { className: "absolute inset-0 blur-[1px]", children: _jsx("img", { src: image, className: cn("object-cover w-full h-full"), onError: (e) => {
                            e.currentTarget.src = PLACEHOLDER;
                        } }) }), _jsx("div", { className: "absolute inset-0 bg-center bg-cover h-full w-full bg-translucent-dark-300" }), _jsx("img", { className: cn(thumbnailCollectibleVariants({ size }), "object-contain max-h-full max-w-full z-10 relative border-0"), draggable: false, src: image, onError: (e) => {
                        e.currentTarget.src = PLACEHOLDER;
                    } })] }), subIcon: subIcon, error: error, loading: loading, variant: variant, size: size, className: cn(thumbnailCollectibleVariants({ variant, size }), (loading || error) && "border-0", className) }));
};
export default ThumbnailCollectible;
//# sourceMappingURL=collectible.js.map