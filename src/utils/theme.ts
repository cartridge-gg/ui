export type Theme = "light" | "dark" | "system";

/**
 * Get the current theme from localStorage or default to dark
 */
export function getTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return (localStorage.getItem("theme") as Theme) || "dark";
}

/**
 * Set the theme in localStorage and apply it to the document
 */
export function setTheme(theme: Theme) {
  if (typeof window === "undefined") return;
  
  localStorage.setItem("theme", theme);
  applyTheme(theme);
}

/**
 * Apply the theme to the document element
 */
export function applyTheme(theme: Theme) {
  if (typeof window === "undefined") return;
  
  const root = document.documentElement;
  
  // Remove existing theme classes
  root.classList.remove("light", "dark");
  
  if (theme === "system") {
    // Use system preference
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.classList.add(systemPrefersDark ? "dark" : "light");
  } else {
    // Use explicit theme
    root.classList.add(theme);
  }
}

/**
 * Toggle between light and dark themes
 */
export function toggleTheme() {
  const currentTheme = getTheme();
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  return nextTheme;
}

/**
 * Initialize theme on application startup
 */
export function initializeTheme() {
  if (typeof window === "undefined") return;
  
  const theme = getTheme();
  applyTheme(theme);
  
  // Listen for system preference changes when using system theme
  if (theme === "system") {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => applyTheme("system");
    mediaQuery.addEventListener("change", handleChange);
    
    return () => mediaQuery.removeEventListener("change", handleChange);
  }
}

/**
 * Hook to get current theme state
 */
export function useTheme() {
  if (typeof window === "undefined") return { theme: "dark" as Theme, isDark: true };
  
  const theme = getTheme();
  const hasLightClass = document.documentElement.classList.contains("light");
  const hasDarkClass = document.documentElement.classList.contains("dark");
  
  // If no theme class is applied, default to dark mode (since :root has dark values)
  const isDark = hasDarkClass || (!hasLightClass && !hasDarkClass);
  
  return { theme, isDark };
}