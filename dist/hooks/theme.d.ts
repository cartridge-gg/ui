export declare function useThemeEffect({ theme, assetUrl, }: {
    theme: ControllerTheme;
    assetUrl: string;
}): void;
export type ControllerThemeOption = string | ControllerTheme;
export type ControllerTheme = {
    name: string;
    icon: string;
    cover: ThemeValue<string>;
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
