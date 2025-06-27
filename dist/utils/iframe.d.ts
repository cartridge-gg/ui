export declare function normalize<Promise>(fn: (origin: string) => Promise): (origin: string) => Promise;
/**
 * Converts a src value into an origin.
 */
export declare function normalizeOrigin(src: string): string;
export declare function isIframe(): boolean;
