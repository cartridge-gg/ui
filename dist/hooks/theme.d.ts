export declare function useThemeEffect({ theme, assetUrl, }: {
    theme: ControllerTheme;
    assetUrl: string;
}): void;
export type ControllerThemeOption = string | ControllerTheme;
export type ControllerTheme = {
    name: string;
    icon: string;
    cover?: ThemeValue<string>;
    colors?: ControllerColors;
};
export type ControllerColors = {
    primary?: ControllerColor;
    primaryForeground?: ControllerColor;
};
export type ControllerColor = ThemeValue<string>;
export type ThemeValue<T> = T | {
    dark: T;
    light: T;
};
/**
 * Custom hook to reactively watch CSS custom property changes
 *
 * This hook will automatically re-render the component when the specified CSS custom property changes.
 * It watches for changes to the document element's style and class attributes, as well as
 * dynamic stylesheet additions/removals.
 *
 * @param propertyName - The CSS custom property name (e.g., "--theme-cover-url")
 * @returns The current value of the CSS custom property
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const coverUrl = useCSSCustomProperty("--theme-cover-url");
 *   const iconUrl = useCSSCustomProperty("--theme-icon-url");
 *
 *   return <div style={{ backgroundImage: coverUrl }} />;
 * }
 * ```
 */
export declare function useCSSCustomProperty(propertyName: string): string;
