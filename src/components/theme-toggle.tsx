import * as React from "react";
import { Button } from "./primitives/button";
import { cn } from "@/utils";
import { toggleTheme, useTheme } from "@/utils/theme";

interface ThemeToggleProps {
  className?: string;
  size?: "default" | "icon" | "tall" | "thumbnail";
  variant?: "primary" | "secondary" | "tertiary" | "icon" | "link" | "destructive" | "outline" | "ghost";
}

export function ThemeToggle({ 
  className, 
  size = "icon", 
  variant = "ghost" 
}: ThemeToggleProps) {
  const [mounted, setMounted] = React.useState(false);
  const { isDark } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button 
        variant={variant} 
        size={size} 
        className={cn("w-10 h-10", className)}
        disabled
      >
        <span className="sr-only">Toggle theme</span>
        <div className="w-4 h-4" />
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleTheme}
      className={cn("w-10 h-10", className)}
    >
      <span className="sr-only">Toggle theme</span>
      {isDark ? (
        <SunIcon className="w-4 h-4" />
      ) : (
        <MoonIcon className="w-4 h-4" />
      )}
    </Button>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41-1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}