import { OlmechIcon } from "../../../../components/icons";
import { VariantProps } from "class-variance-authority";
export interface AchievementPlayerAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    username: string;
    size?: VariantProps<typeof OlmechIcon>["size"];
}
export declare const AchievementPlayerAvatar: ({ username, size, className, }: AchievementPlayerAvatarProps) => import("react/jsx-runtime").JSX.Element;
export default AchievementPlayerAvatar;
