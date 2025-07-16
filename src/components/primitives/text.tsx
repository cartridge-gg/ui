import * as Slot from "@rn-primitives/slot";
import * as React from "react";
import { Text as RNText } from "react-native";
import { cn } from "@/utils";

export const TextClassContext = React.createContext<string | undefined>(
  undefined,
);

export function Text({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<typeof RNText> & {
  ref?: React.Ref<RNText>;
  asChild?: boolean;
}) {
  const textClass = React.useContext(TextClassContext);
  const Component = asChild ? Slot.Text : RNText;
  return (
    <Component
      className={cn(
        "text-base text-foreground web:select-text font-sans",
        textClass,
        className,
      )}
      {...props}
    />
  );
}
