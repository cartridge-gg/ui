type UIContextValue = {
    account?: {
        username: string;
        address: string;
    };
    chainId?: string;
    followers?: number;
    followings?: number;
    onFollowersClick?: () => void;
    onFollowingsClick?: () => void;
    closeModal?: () => void;
    openSettings?: () => void;
    showQrCode?: (show: boolean) => void;
    onLogout?: () => void;
};
export declare const UIContext: import("react").Context<UIContextValue>;
export declare const UIProvider: import("react").Provider<UIContextValue>;
export {};
