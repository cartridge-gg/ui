import { createContext } from "react";
import PostHog from "posthog-js-lite";
export class PostHogWrapper extends PostHog {
    isLocal = false &&
        typeof window !== "undefined" &&
        window.location.hostname.includes("localhost");
    capture(eventName, properties) {
        if (this.isLocal) {
            console.log("[PostHog Event]", {
                event: eventName,
                properties,
            });
            return;
        }
        super.capture(eventName, properties);
    }
    identify(distinctId, properties) {
        if (this.isLocal) {
            console.log("[PostHog Identify]", {
                distinctId,
                properties,
            });
            return;
        }
        super.identify(distinctId, properties);
    }
    group(groupType, groupKey, properties) {
        if (this.isLocal) {
            console.log("[PostHog Group]", {
                groupType,
                groupKey,
                properties,
            });
            return;
        }
        super.group(groupType, groupKey, properties);
    }
    reset() {
        if (this.isLocal) {
            console.log("[PostHog Reset]");
            return;
        }
        super.reset();
    }
    debug() {
        if (this.isLocal) {
            console.log("[PostHog Debug Mode Enabled]");
            return;
        }
        super.debug();
    }
    captureException(error, additionalProperties) {
        const properties = {
            $exception_level: "error",
            $exception_list: [
                {
                    type: error.name,
                    value: error.message,
                    mechanism: {
                        handled: true,
                        synthetic: false,
                    },
                },
            ],
            ...additionalProperties,
        };
        this.capture("$exception", properties);
    }
}
export const PostHogContext = createContext(undefined);
//# sourceMappingURL=posthog.js.map