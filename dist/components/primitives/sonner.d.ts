import { Toaster as SonnerToster } from "sonner";
type SonnerToasterProps = React.ComponentProps<typeof SonnerToster> & {
    toasterId?: string;
};
declare const SonnerToaster: ({ toasterId, ...props }: SonnerToasterProps) => import("react/jsx-runtime").JSX.Element;
export { SonnerToaster };
