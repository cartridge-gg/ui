import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
declare const TooltipProvider: {
    ({ delayDuration, ...props }: React.ComponentProps<typeof TooltipPrimitive.Provider>): import("react/jsx-runtime").JSX.Element;
    displayName: string | undefined;
};
declare const Tooltip: React.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipTrigger: React.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const TooltipContent: React.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
