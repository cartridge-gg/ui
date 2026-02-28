import { jsx as _jsx } from "react/jsx-runtime";
import { ActivityHeader } from ".";
import { PaperPlaneIcon, SparklesIcon, Thumbnail, ThumbnailCollectible, ThumbnailsSubIcon, } from "../../../../index";
const meta = {
    title: "Modules/Activities/Header",
    component: ActivityHeader,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
};
export default meta;
export const Collectible = {
    render: () => (_jsx(ActivityHeader, { title: "Minted", topic: "Onyx Bane Ogre", subTopic: "Beasts", Logo: _jsx(ThumbnailCollectible, { image: "https://raw.githubusercontent.com/cartridge-gg/presets/refs/heads/main/configs/loot-survivor/cover.png", subIcon: _jsx(ThumbnailsSubIcon, { Icon: _jsx(SparklesIcon, { variant: "solid" }), variant: "dark", size: "xl" }), variant: "default", size: "xl" }) })),
};
export const Token = {
    render: () => (_jsx(ActivityHeader, { title: "Sent", topic: "-0.01 ETH", subTopic: "-$32.78", Logo: _jsx(Thumbnail, { icon: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/e07829b7-0382-4e03-7ecd-a478c5aa9f00/logo", subIcon: _jsx(ThumbnailsSubIcon, { Icon: _jsx(PaperPlaneIcon, { variant: "solid" }), variant: "dark", size: "xl" }), variant: "default", size: "xl", rounded: true }) })),
};
export const Error = {
    render: () => (_jsx(ActivityHeader, { title: "Sent", topic: "-0.01 ETH", subTopic: "-$32.78", error: true, Logo: _jsx(Thumbnail, { icon: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/e07829b7-0382-4e03-7ecd-a478c5aa9f00/logo", subIcon: _jsx(ThumbnailsSubIcon, { Icon: _jsx(PaperPlaneIcon, { variant: "solid" }), variant: "dark", size: "xl" }), variant: "default", size: "xl", error: true, rounded: true }) })),
};
export const Loading = {
    render: () => (_jsx(ActivityHeader, { title: "Sending", topic: "-0.01 ETH", subTopic: "-$32.78", loading: true, Logo: _jsx(Thumbnail, { icon: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/e07829b7-0382-4e03-7ecd-a478c5aa9f00/logo", subIcon: _jsx(ThumbnailsSubIcon, { Icon: _jsx(PaperPlaneIcon, { variant: "solid" }), variant: "dark", size: "xl" }), variant: "default", size: "xl", loading: true, rounded: true }) })),
};
//# sourceMappingURL=header.stories.js.map