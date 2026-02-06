import PostHog from "posthog-js-lite";
type Properties = Record<string, any>;
export declare class PostHogWrapper extends PostHog {
    isLocal: boolean;
    capture(eventName: string, properties?: Properties): void;
    identify(distinctId: string, properties?: Properties): void;
    group(groupType: string, groupKey: string, properties?: Properties): void;
    reset(): void;
    debug(): void;
    captureException(error: Error, additionalProperties?: Properties): void;
}
interface PostHogContextType {
    posthog: PostHogWrapper;
}
export declare const PostHogContext: import("react").Context<PostHogContextType | undefined>;
export {};
