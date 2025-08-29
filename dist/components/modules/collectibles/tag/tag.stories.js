import { jsx as _jsx } from "react/jsx-runtime";
import { CollectibleTag } from "./tag";
import { TagIcon } from "../../../../components/icons";
const meta = {
    title: "Modules/Collectibles/Tag",
    component: CollectibleTag,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
};
export default meta;
export const Default = {
    render: () => (_jsx(CollectibleTag, { label: "100", children: _jsx(TagIcon, { variant: "solid", size: "sm" }) })),
};
//# sourceMappingURL=tag.stories.js.map