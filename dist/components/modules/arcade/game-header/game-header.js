import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CardTitle, DiscordIcon, DojoIcon, GitHubIcon, GlobeIcon, TelegramIcon, Thumbnail, XIcon, } from "../../../../index";
import { cn } from "../../../../utils";
import { cva } from "class-variance-authority";
import { useMemo } from "react";
import { AchievementPinIcons } from "../../../../components/modules/achievements/pin-icons";
export const arcadeGameHeaderVariants = cva("h-16 flex justify-between items-center px-4 py-3 gap-x-3", {
    variants: {
        variant: {
            darkest: "bg-background-100",
            darker: "bg-background-100",
            dark: "bg-background-100",
            default: "bg-background-200",
            light: "bg-background-200",
            lighter: "bg-background-200",
            lightest: "bg-background-200",
            ghost: "bg-transparent",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const ArcadeGameHeader = ({ achievements, metadata, socials, active, variant, className, color, }) => {
    const pins = useMemo(() => {
        if (!achievements)
            return [];
        return achievements
            .filter((a) => a.content.icon && a.pin?.pinned)
            .map((a) => ({
            id: a.id,
            icon: a.content.icon || "fa-trophy",
            name: a.content.title || "",
        }))
            .slice(0, 3);
    }, [achievements]);
    const style = useMemo(() => {
        const bgColor = !variant || variant === "default" || variant.includes("light")
            ? `var(--background-200)`
            : `var(--background-100)`;
        const opacity = metadata.cover ? "96%" : "50%";
        const image = metadata.cover
            ? `url(${metadata.cover})`
            : "var(--theme-cover-url)";
        return {
            backgroundImage: `linear-gradient(to right,${bgColor},color-mix(in srgb, ${bgColor} ${opacity}, transparent)),${image}`,
        };
    }, [metadata.cover, variant]);
    return (_jsxs("div", { className: cn(arcadeGameHeaderVariants({ variant }), "bg-top bg-cover bg-no-repeat select-none"), style: style, children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Thumbnail, { icon: metadata.logo ?? _jsx(DojoIcon, { className: "w-full h-full" }), variant: !variant || variant === "default" || variant?.includes("light")
                            ? "light"
                            : "default", size: "lg" }), _jsxs("div", { className: "flex flex-col gap-x-4 gap-y-0.5 sm:flex-row", children: [_jsx(CardTitle, { className: "text-foreground-100 text-sm font-medium tracking-normal flex items-center whitespace-nowrap", children: metadata.name }), pins.length > 0 && (_jsx(AchievementPinIcons, { theme: active, pins: pins, variant: variant, className: className, color: color }))] })] }), _jsxs("div", { className: "flex items-center justify-end gap-x-1 sm:gap-x-2 gap-y-0.5 flex-wrap", children: [socials?.website && (_jsx(AchievementSocialWebsite, { website: socials.website, variant: variant })), socials?.discord && (_jsx(AchievementSocialDiscord, { discord: socials.discord, variant: variant })), socials?.twitter && (_jsx(AchievementSocialTwitter, { twitter: socials.twitter, variant: variant })), socials?.telegram && (_jsx(AchievementSocialTelegram, { telegram: socials.telegram, variant: variant })), socials?.github && (_jsx(AchievementSocialGithub, { github: socials.github, variant: variant }))] })] }));
};
export const AchievementSocialWebsite = ({ website, variant, className, }) => {
    const label = useMemo(() => {
        return website.replace(/^.*https?:\/\//, "").replace(/\/$/, "");
    }, [website]);
    return (_jsx(AchievementSocial, { icon: _jsx(GlobeIcon, { variant: "line", size: "xs" }), href: website, label: label, variant: variant, className: className }));
};
const AchievementSocialDiscord = ({ discord, variant, }) => {
    return (_jsx(AchievementSocial, { icon: _jsx(DiscordIcon, { size: "xs" }), href: discord, variant: variant }));
};
const AchievementSocialTwitter = ({ twitter, variant, }) => {
    return (_jsx(AchievementSocial, { icon: _jsx(XIcon, { size: "xs" }), href: twitter, variant: variant }));
};
const AchievementSocialGithub = ({ github, variant, }) => {
    return (_jsx(AchievementSocial, { icon: _jsx(GitHubIcon, { size: "xs" }), href: github, variant: variant }));
};
const AchievementSocialTelegram = ({ telegram, variant, }) => {
    return (_jsx(AchievementSocial, { icon: _jsx(TelegramIcon, { size: "xs" }), href: telegram, variant: variant }));
};
const achievementSocialVariants = cva("flex items-center gap-x-1 rounded px-1.5 py-1 cursor-pointer text-foreground-100", {
    variants: {
        variant: {
            darkest: "bg-background-100 hover:bg-background-200",
            darker: "bg-background-100 hover:bg-background-200",
            dark: "bg-background-100 hover:bg-background-200",
            default: "bg-background-200 hover:bg-background-300",
            light: "bg-background-200 hover:bg-background-300",
            lighter: "bg-background-200 hover:bg-background-300",
            lightest: "bg-background-200 hover:bg-background-300",
            ghost: "",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
export const AchievementSocial = ({ icon, href, label, variant, className, }) => {
    return (_jsxs("a", { href: href, draggable: false, target: "_blank", className: cn(achievementSocialVariants({ variant }), className), children: [icon, label && (_jsx("p", { className: "px-0.5 text-xs font-medium tracking-normal hidden sm:block", children: label }))] }));
};
export default ArcadeGameHeader;
//# sourceMappingURL=game-header.js.map