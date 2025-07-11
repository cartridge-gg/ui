import { useEffect } from "react";
export function useThemeEffect({ theme, assetUrl, }) {
    useEffect(() => {
        if (!theme)
            return;
        // Helper function to update theme properties
        const updateThemeProperties = (colorMode) => {
            // Set icon
            document.documentElement.style.setProperty("--theme-icon-url", theme.icon.startsWith("http")
                ? `url("${theme.icon}")`
                : `url("${assetUrl}${theme.icon}")`);
            // Set cover
            if (theme.cover) {
                const coverValue = typeof theme.cover === "string" ? theme.cover : theme.cover["dark"];
                const coverUrl = coverValue.startsWith("http")
                    ? `url("${coverValue}")`
                    : `url("${assetUrl}${coverValue}")`;
                document.documentElement.style.setProperty("--theme-cover-url", coverUrl);
            }
            // Set colors if they exist
            if (theme.colors) {
                if (theme.colors.primary) {
                    const val = typeof theme.colors.primary === "string"
                        ? theme.colors.primary
                        : theme.colors.primary[colorMode];
                    document.documentElement.style.setProperty("--primary-100", val);
                }
                if (theme.colors.primaryForeground) {
                    const val = typeof theme.colors.primaryForeground === "string"
                        ? theme.colors.primaryForeground
                        : theme.colors.primaryForeground[colorMode];
                    document.documentElement.style.setProperty("--primary-foreground-100", val);
                }
            }
        };
        // Set initial values based on current color mode
        const initialColorMode = document.documentElement.classList.contains("dark")
            ? "dark"
            : "light";
        updateThemeProperties(initialColorMode);
        // Watch for changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                const colorMode = mutation.target.classList.contains("dark")
                    ? "dark"
                    : "light";
                updateThemeProperties(colorMode);
            });
        });
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });
        return () => {
            observer.disconnect();
        };
    }, [theme, assetUrl]);
}
//# sourceMappingURL=theme.js.map