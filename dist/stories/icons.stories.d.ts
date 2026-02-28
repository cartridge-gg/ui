import { badgeIcons, brandColorIcons, brandIcons, directionalIcons, stateIcons, utilityIcons } from "../components/icons";
import { DirectionalIconProps, IconProps, StateIconProps } from "../components/icons/types";
import { Meta, StoryObj } from "@storybook/react";
declare const iconsByCategory: {
    badge: typeof badgeIcons;
    brand: typeof brandIcons;
    "brand-color": typeof brandColorIcons;
    directional: typeof directionalIcons;
    state: typeof stateIcons;
    utility: typeof utilityIcons;
};
declare const meta: Meta<typeof Icons>;
export default meta;
type Story = StoryObj<typeof Icons>;
export declare const Badge: Story;
export declare const Brand: Story;
export declare const BrandColor: Story;
export declare const Directional: Story;
export declare const State: Story;
export declare const Utility: Story;
declare function Icons({ className, category, size, directionalVariant, stateVariant, }: {
    className: string;
    category: keyof typeof iconsByCategory;
    size?: IconProps["size"];
    directionalVariant: DirectionalIconProps["variant"];
    stateVariant: StateIconProps["variant"];
}): import("react/jsx-runtime").JSX.Element;
