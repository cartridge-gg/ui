export interface CollectibleItemActionProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant?: "list" | "unlist" | "purchase";
}
export declare function CollectibleItemAction({ variant, className, ...props }: CollectibleItemActionProps): import("react/jsx-runtime").JSX.Element;
export default CollectibleItemAction;
