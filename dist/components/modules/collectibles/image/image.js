import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { PLACEHOLDER } from "../../../../assets";
import { Skeleton, SpinnerIcon } from "../../../../index";
import { cva } from "class-variance-authority";
import { cn } from "../../../../utils";
const collectibleImageVariants = cva("relative h-full w-full object-contain", {
    variants: {
        variant: {
            default: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const CollectibleImage = ({ title, images, loadingSpinner = false, loadingSkeleton = false, onLoaded, variant, className, onError, ...props }) => {
    const [displayImage, setDisplayImage] = useState(undefined);
    useEffect(() => {
        if (onLoaded && displayImage !== undefined) {
            onLoaded();
        }
    }, [displayImage]);
    useEffect(() => {
        let isMounted = true;
        let imageIndex = 0;
        const fixBeastDataUri = async (image) => {
            let data = image;
            if (data.startsWith("http")) {
                const res = await fetch(image);
                if (res.ok) {
                    data = await res.text();
                }
            }
            if (data.includes('width="100width="100%"')) {
                const match = data.match(/data:image\/png;base64,[^)"]+/);
                if (match && match.length > 0) {
                    return match[0];
                }
            }
            throw new Error("continue");
        };
        const loadNextImage = () => {
            if (!isMounted) {
                return;
            }
            // end of images list
            if (imageIndex >= images.length) {
                setDisplayImage(PLACEHOLDER);
                return;
            }
            // get current image
            let image = images[imageIndex++];
            if (!image) {
                loadNextImage();
                return;
            }
            if (image.startsWith("ipfs://")) {
                image = image.replace("ipfs://", "https://ipfs.io/ipfs/");
            }
            const loader = new window.Image();
            loader.onload = () => {
                if (isMounted) {
                    setDisplayImage(image);
                }
            };
            loader.onerror = () => {
                // console.warn('CollectibleImage: Error loading image', image);
                fixBeastDataUri(image)
                    .then((data) => {
                    if (isMounted) {
                        setDisplayImage(data);
                    }
                })
                    .catch((_) => {
                    loadNextImage();
                });
            };
            // start loader
            loader.src = image;
        };
        loadNextImage();
        return () => {
            isMounted = false;
        };
    }, [images.join(",")]);
    return (_jsxs("div", { className: cn(collectibleImageVariants({ variant }), className), ...props, children: [displayImage === undefined && loadingSpinner && (_jsx(SpinnerIcon, { size: "xl", className: "absolute inset-0 m-auto animate-spin" })), displayImage === undefined && loadingSkeleton && (_jsx(Skeleton, { className: "absolute inset-0 full-w full-h" })), displayImage !== undefined && (_jsx("img", { className: "absolute inset-0 object-contain h-full w-full", style: { imageRendering: "pixelated" }, draggable: false, src: displayImage }))] }));
};
export default CollectibleImage;
//# sourceMappingURL=image.js.map