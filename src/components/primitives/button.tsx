import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { Pressable } from "react-native";
import { ExternalIcon, Spinner, TextClassContext } from "@/components";
import { cn } from "@/utils";

export const buttonVariants = cva(
  "select-none flex-row justify-center items-center gap-1.5 whitespace-nowrap rounded-md uppercase font-mono font-semibold web:ring-offset-background web:transition-colors web:transition-opacity web:focus-visible:outline-none web:focus-visible:ring-1 web:focus-visible:ring-primary web:focus-visible:ring-offset-1",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground web:hover:opacity-80 active:opacity-80 web:focus-visible:ring-foreground",
        secondary:
          "bg-background-200 text-foreground-100 web:hover:bg-background-300 active:bg-background-300",
        tertiary:
          "bg-background-200 text-foreground-300 font-medium web:hover:bg-background-300 web:hover:text-foreground-200 active:bg-background-300 active:text-foreground-200",
        icon: "bg-background-200 text-foreground-100 web:hover:bg-background-300 active:bg-background-300",
        link: "normal-case tracking-normal font-sans font-normal bg-background-100 border border-background-200 text-foreground-300 web:hover:border-background-300 active:border-background-300",
        // Legacy variants for compatibility
        destructive:
          "bg-destructive-100 text-destructive-foreground shadow-sm web:hover:bg-destructive-100 active:bg-destructive-100",
        outline:
          "border border-input bg-background shadow-sm web:hover:bg-background-500 web:hover:text-foreground-200 active:bg-background-500 active:text-foreground-200",
        ghost:
          "web:hover:bg-background-500 web:hover:text-foreground-200 active:bg-background-500 active:text-foreground-200",
      },
      size: {
        default: "h-10 px-6 py-2.5 text-base/[20px] tracking-wide",
        tall: "h-full w-9 rounded-none p-2",
        icon: "h-10 w-10 items-center",
        thumbnail: "h-10 px-3",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
      status: {
        active:
          "bg-background-300 text-foreground-100 font-medium web:hover:bg-background-300 web:hover:text-foreground-100 active:bg-background-300 active:text-foreground-100",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export const buttonTextVariants = cva(
  "web:whitespace-nowrap text-sm font-medium text-foreground web:transition-colors",
  {
    variants: {
      variant: {
        primary: "text-primary-foreground",
        secondary: "text-foreground-100",
        tertiary: "text-foreground-300",
        icon: "text-foreground-100",
        link: "text-foreground-300",
        destructive: "text-destructive-foreground",
        outline: "text-foreground",
        ghost: "text-foreground",
      },
      size: {
        default: "text-base/[20px] tracking-wide",
        tall: "",
        icon: "",
        thumbnail: "",
        sm: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ComponentProps<typeof Pressable>,
  VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  isActive?: boolean;
  textClassName?: string;
}

export function Button({
  ref,
  className,
  textClassName,
  variant,
  size,
  isLoading,
  isActive,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <TextClassContext.Provider
      value={buttonTextVariants({
        variant,
        size,
        className: cn("web:pointer-events-none", textClassName),
      })}
    >
      <Pressable
        className={cn(
          (disabled || isLoading) && "opacity-50 web:pointer-events-none",
          buttonVariants({
            variant,
            size,
            status: isActive ? "active" : undefined,
            className,
          }),
        )}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {(state) => (
          <>
            {isLoading ? (
              <Spinner />
            ) : typeof children === "function" ? (
              children(state)
            ) : (
              children
            )}
            {variant === "link" && !isLoading && <ExternalIcon size="sm" />}
          </>
        )}
      </Pressable>
    </TextClassContext.Provider>
  );
}
