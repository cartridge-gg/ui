import { jsx as _jsx } from "react/jsx-runtime";
import { AccountSearchResultItem } from "../../../index";
const meta = {
    title: "Modules/Create Account/Account Search Result Item",
    component: AccountSearchResultItem,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    args: {
        result: {
            id: "create-new-shin",
            type: "create-new",
            username: "shin",
        },
        className: "min-w-0 w-96",
    },
};
export default meta;
export const Default = {};
export const ExistingUser = {
    args: {
        result: {
            id: "existing-shinobi",
            type: "existing",
            username: "shinobi",
            points: 20800,
            lastOnline: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
        },
    },
};
export const ExistingUserWithNoPoints = {
    args: {
        result: {
            id: "existing-shinobi",
            type: "existing",
            username: "shinobi",
            points: 0,
            lastOnline: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
        },
    },
};
export const NewUser = {
    args: {
        result: {
            id: "create-new-shin",
            type: "create-new",
            username: "shin",
        },
    },
};
export const MultipleResult = {
    render: function MultipleResult() {
        const mockResults = [
            {
                id: "create-new-shin",
                type: "create-new",
                username: "shin",
            },
            {
                id: "existing-shinto",
                type: "existing",
                username: "shinto",
                points: 0,
            },
            {
                id: "existing-shints",
                type: "existing",
                username: "shints",
                points: 20800,
            },
            {
                id: "existing-shinobi",
                type: "existing",
                username: "shinobi",
                points: 20800,
            },
        ];
        return (_jsx("div", { className: "min-w-0 w-96 divide-y divide-spacer-100", children: mockResults.map((result) => (_jsx(AccountSearchResultItem, { result: result }, result.id))) }));
    },
};
//# sourceMappingURL=account-search-result.stories.js.map