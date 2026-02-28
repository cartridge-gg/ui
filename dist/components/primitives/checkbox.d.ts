import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { size } from "../icons/utils";
declare const Checkbox: React.ForwardRefExoticComponent<Omit<CheckboxPrimitive.CheckboxProps & React.RefAttributes<HTMLButtonElement>, "ref"> & {
    variant?: "line" | "solid" | "minus-solid" | "minus-line" | "plus-solid" | "plus-line" | "unchecked-solid" | "unchecked-line";
    size?: keyof typeof size;
} & React.RefAttributes<HTMLButtonElement>>;
export { Checkbox };
