interface ReceivingProps {
    title?: string;
    items: StarterItemData[];
}
export interface StarterItemData {
    title: string;
    description: string;
    image: string;
}
export declare function StarterpackContains({ title, items }: ReceivingProps): import("react/jsx-runtime").JSX.Element;
export {};
