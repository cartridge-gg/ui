export type ValidationState = {
    status: "idle" | "validating" | "valid" | "invalid";
    error?: Error;
    exists?: boolean;
};
interface StatusProps {
    username: string;
    validation: ValidationState;
    error?: Error;
    className?: string;
}
export declare function Status({ username, validation, error, className, }: StatusProps): import("react/jsx-runtime").JSX.Element;
export {};
