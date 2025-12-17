import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PLACEHOLDER } from "../../../../assets";
import { CollectibleTag, StackDiamondIcon, TagIcon } from "../../../../index";
import { cn, formatNumber } from "../../../../utils";
import { cva } from "class-variance-authority";
import { useEffect, useState } from "react";
const collectiblePreviewVariants = cva("relative flex items-center justify-center overflow-hidden shrink-0", {
    variants: {
        variant: {
            default: "",
        },
        size: {
            sm: "p-2 h-[128px]",
            md: "p-2 h-[128px]",
            lg: "p-2 h-[200px] rounded-lg",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "md",
    },
});
export const CollectiblePreview = ({ images, totalCount, listingCount, variant, size, className, onError, ...props }) => {
    const [currentSrcIndex, setCurrentSrcIndex] = useState(0);
    const [data, setData] = useState(null);
    const currentSrc = images && images.length > 0 ? images[currentSrcIndex] : PLACEHOLDER;
    useEffect(() => {
        const fetchData = async () => {
            if (!currentSrc)
                return;
            try {
                const res = await fetch(currentSrc);
                if (!res.ok)
                    return;
                const text = await res.text();
                if (!text.includes('width="100width="100%"'))
                    return;
                const match = text.match(/data:image\/png;base64,[^)"]+/);
                if (match && match.length > 0)
                    setData(match[0]);
            }
            catch (error) {
                console.error("Error fetching image:", error);
            }
        };
        fetchData();
    }, [currentSrc]);
    const handleImageError = (e) => {
        if (currentSrcIndex < images.length - 1 && !!images[currentSrcIndex + 1]) {
            setCurrentSrcIndex(currentSrcIndex + 1);
        }
        else {
            e.currentTarget.src = PLACEHOLDER;
            if (onError)
                onError(e);
        }
    };
    return (_jsxs("div", { className: cn(collectiblePreviewVariants({ variant, size }), className), ...props, children: [_jsxs("div", { className: "absolute grow inset-0 blur-[8px] transition-opacity duration-150 opacity-75 group-hover:opacity-100", children: [_jsx("img", { src: data || currentSrc, className: "object-cover absolute inset-0 w-full h-full image-pixelated", onError: handleImageError }), _jsx("div", { className: "bg-center bg-cover h-full w-full relative", style: {
                            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.64))`,
                        } })] }), _jsx("img", { className: "object-contain h-full w-full relative transition duration-150 ease-in-out group-hover:scale-[1.02]", style: { imageRendering: "pixelated" }, draggable: false, src: data || currentSrc, onError: handleImageError }), _jsxs("div", { className: "flex gap-1 items-center flex-wrap justify-start absolute bottom-1.5 left-1.5", children: [!!totalCount && (_jsx(CollectibleTag, { label: `${formatNumber(totalCount)}`, children: _jsx(StackDiamondIcon, { variant: "solid", size: "sm" }) })), !!listingCount && (_jsx(CollectibleTag, { label: `${formatNumber(listingCount)}`, children: _jsx(TagIcon, { variant: "solid", size: "sm" }) }))] })] }));
};
export default CollectiblePreview;
//# sourceMappingURL=preview.js.map