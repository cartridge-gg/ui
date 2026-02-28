import { useEffect, useState } from "react";
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
            else {
                document.documentElement.style.removeProperty("--theme-cover-url");
            }
            // Set colors if they exist
            if (theme.colors?.primary) {
                const val = typeof theme.colors.primary === "string"
                    ? theme.colors.primary
                    : theme.colors.primary[colorMode];
                document.documentElement.style.setProperty("--primary-100", val);
            }
            else {
                document.documentElement.style.removeProperty("--primary-100");
            }
            if (theme.colors?.primaryForeground) {
                const val = typeof theme.colors.primaryForeground === "string"
                    ? theme.colors.primaryForeground
                    : theme.colors.primaryForeground[colorMode];
                document.documentElement.style.setProperty("--primary-foreground-100", val);
            }
            else {
                document.documentElement.style.removeProperty("--primary-foreground-100");
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
export function useCSSCustomProperty(propertyName) {
    const [value, setValue] = useState(() => {
        // Get initial value, with fallback for SSR/testing environments
        if (typeof document === "undefined")
            return "";
        return getComputedStyle(document.documentElement).getPropertyValue(propertyName);
    });
    useEffect(() => {
        // Skip if we're in SSR/testing environment
        if (typeof document === "undefined")
            return;
        // Function to update the value
        const updateValue = () => {
            try {
                const newValue = getComputedStyle(document.documentElement).getPropertyValue(propertyName);
                setValue(newValue);
            }
            catch (error) {
                console.warn(`Failed to get CSS custom property ${propertyName}:`, error);
            }
        };
        // Create a MutationObserver to watch for changes to the document element
        // This will catch style attribute changes and class changes that might affect CSS custom properties
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                // Check for attribute changes (style, class) that might affect CSS custom properties
                if (mutation.type === "attributes" &&
                    (mutation.attributeName === "style" ||
                        mutation.attributeName === "class")) {
                    updateValue();
                }
            });
        });
        // Watch for changes to the document element's attributes
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["style", "class"],
        });
        // Cleanup function
        return () => {
            observer.disconnect();
        };
    }, [propertyName]);
    return value;
}
//# sourceMappingURL=theme.js.map