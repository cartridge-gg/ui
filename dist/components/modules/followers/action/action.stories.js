import { jsx as _jsx } from "react/jsx-runtime";
import { FollowerAction } from "./action";
import FollowerFollow from "./follow";
import FollowerUnfollow from "./unfollow";
import FollowerFollowing from "./following";
const meta = {
    title: "Modules/Followers/Action",
    component: FollowerAction,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
};
export default meta;
export const Follow = {
    render: () => _jsx(FollowerFollow, { loading: false, disabled: false }),
};
export const Following = {
    render: () => _jsx(FollowerFollowing, {}),
};
export const Unfollow = {
    render: () => _jsx(FollowerUnfollow, { loading: false, disabled: false }),
};
//# sourceMappingURL=action.stories.js.map