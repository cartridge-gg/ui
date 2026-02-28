import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { CollectibleImage, Skeleton, CollectibleFooter } from "../../../../index";
import { cva } from "class-variance-authority";
import { cn } from "../../../../utils";
const collectiblePreviewVariants = cva("relative flex items-center justify-center overflow-hidden shrink-0 rounded-[8px]", {
    variants: {
        variant: {
            default: "",
        },
        size: {
            sm: "p-[20px] h-[160px]",
            md: "p-[20px] h-[160px]",
            lg: "p-[20px] h-[200px] rounded-lg",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "md",
    },
});
export const CollectiblePreview = ({ title, icon, images, totalCount, listingCount, backgroundColor, variant, size, className, onError, ...props }) => {
    const [loaded, setLoaded] = useState(false);
    return (_jsxs("div", { className: cn(collectiblePreviewVariants({ variant, size }), className), ...props, children: [_jsx("div", { className: "absolute grow inset-0", children: _jsx("div", { className: "h-full w-full relative", style: {
                        backgroundColor: backgroundColor || `#000000`,
                    } }) }), !loaded && _jsx(Skeleton, { className: "absolute inset-0 full-w full-h" }), _jsx(CollectibleImage, { className: "transition duration-150 ease-in-out hover:scale-[1.1]", images: images, onLoaded: () => setLoaded(true) }), _jsx(CollectibleFooter, { className: "absolute bottom-0", title: title, icon: icon, totalCount: totalCount, listingCount: listingCount, variant: variant })] }));
};
export default CollectiblePreview;
//# sourceMappingURL=preview.js.map