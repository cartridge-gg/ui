export declare function useDisclosure(): {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
};
export declare function useUI(): {
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
