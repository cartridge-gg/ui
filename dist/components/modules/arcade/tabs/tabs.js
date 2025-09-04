import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArcadeMenuButton, ArcadeMenuItem, ArcadeTab, ChestIcon, LeaderboardIcon, LightbulbIcon, ListIcon, MetricsIcon, PulseIcon, ScrollIcon, Select, SelectContent, ShoppingCartIcon, SwordsIcon, Tabs, TabsList, TrophyIcon, UsersIcon, } from "../../../../index";
import { cn } from "../../../../utils";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { cva } from "class-variance-authority";
const arcadeTabsVariants = cva("flex justify-start items-end w-full p-0 px-4 border-b rounded-none", {
    variants: {
        variant: {
            default: "bg-background-100 border-background-200",
        },
        size: {
            default: "gap-3 h-10",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
export const ArcadeTabs = ({ defaultValue = "activity", order = [
    "activity",
    "leaderboard",
    "predict",
    "about",
    "metrics",
    "marketplace",
    "inventory",
    "achievements",
    "positions",
    "guilds",
    "items",
    "holders",
], onTabClick, variant, size, className, children, }) => {
    const [active, setActive] = useState(defaultValue);
    const [visibleTabs, setVisibleTabs] = useState(order);
    const [overflowTabs, setOverflowTabs] = useState([]);
    const containerRef = useRef(null);
    const hiddenRef = useRef(null);
    const tabRefs = useRef(new Map());
    useEffect(() => {
        if (!hiddenRef.current)
            return;
        const tabWidths = new Map();
        hiddenRef.current.childNodes.forEach((node) => {
            const element = node;
            const tab = element.textContent?.toLowerCase();
            if (tab) {
                const visible = order.includes(tab);
                tabWidths.set(tab, { width: element.offsetWidth, visible });
            }
        });
        tabRefs.current = tabWidths;
    }, [tabRefs, hiddenRef, order]);
    useEffect(() => {
        const observer = new ResizeObserver(() => {
            if (!containerRef.current)
                return;
            const gap = 12;
            const buttonWidth = 32;
            const availableWidth = containerRef.current.offsetWidth - buttonWidth - gap;
            let usedWidth = 32;
            const newVisibleTabs = [];
            const newOverflowTabs = [];
            order.forEach((tab) => {
                const { width, visible } = tabRefs.current.get(tab) || {
                    width: 0,
                    visible: false,
                };
                if (!visible)
                    return;
                if (usedWidth + width <= availableWidth &&
                    newOverflowTabs.length === 0) {
                    newVisibleTabs.push(tab);
                    usedWidth += width + gap;
                }
                else {
                    newOverflowTabs.push(tab);
                }
            });
            if (visibleTabs.join(",") !== newVisibleTabs.join(",")) {
                setVisibleTabs(newVisibleTabs);
            }
            if (overflowTabs.join(",") !== newOverflowTabs.join(",")) {
                setOverflowTabs(newOverflowTabs);
            }
        });
        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [order, containerRef.current, visibleTabs, overflowTabs, tabRefs]);
    const overflowActive = useMemo(() => overflowTabs.includes(active), [overflowTabs, active]);
    return (_jsxs(Tabs, { defaultValue: defaultValue, onValueChange: (value) => setActive(value), className: "h-full flex flex-col overflow-hidden", children: [_jsxs(TabsList, { ref: containerRef, className: cn(arcadeTabsVariants({ variant, size }), className), children: [_jsx("div", { ref: hiddenRef, className: "flex gap-2 absolute invisible", children: order.map((tab) => (_jsx(Tab, { tab: tab, value: active, size: size }, tab))) }), visibleTabs.map((tab) => (_jsx(Tab, { tab: tab, value: active, size: size, onTabClick: () => onTabClick?.(tab) }, tab))), _jsxs(Select, { children: [_jsx("div", { className: "grow flex justify-end items-center self-center", children: _jsx(ArcadeMenuButton, { active: overflowActive, className: cn(overflowTabs.length === 0 && "hidden") }) }), _jsx(SelectContent, { className: "bg-background-100", children: overflowTabs.map((tab) => (_jsx(Tab, { tab: tab, value: active, size: size, onTabClick: () => onTabClick?.(tab), item: true }, tab))) })] })] }), children] }));
};
const Tab = ({ tab, value, size, onTabClick, item, }) => {
    const props = {
        key: tab,
        value: tab,
        active: value === tab,
        size,
        onClick: onTabClick,
        item,
    };
    switch (tab) {
        case "inventory":
            return _jsx(InventoryNavButton, { ...props });
        case "achievements":
            return _jsx(AchievementsNavButton, { ...props });
        case "leaderboard":
            return _jsx(LeaderboardNavButton, { ...props });
        case "guilds":
            return _jsx(GuildsNavButton, { ...props });
        case "activity":
            return _jsx(ActivityNavButton, { ...props });
        case "metrics":
            return _jsx(MetricsNavButton, { ...props });
        case "about":
            return _jsx(AboutNavButton, { ...props });
        case "marketplace":
            return _jsx(MarketplaceNavButton, { ...props });
        case "items":
            return _jsx(ItemsNavButton, { ...props });
        case "holders":
            return _jsx(HoldersNavButton, { ...props });
        case "predict":
            return _jsx(PredictNavButton, { ...props });
        case "positions":
            return _jsx(PositionsNavButton, { ...props });
        default:
            return null;
    }
};
const InventoryNavButton = React.forwardRef(({ value, active, size, onClick, item, label = "Inventory" }, ref) => {
    if (item) {
        return (_jsx(ArcadeMenuItem, { ref: ref, value: value, Icon: _jsx(ChestIcon, { variant: "solid", size: "sm" }), label: label, active: active, size: size, onClick: onClick }));
    }
    return (_jsx(ArcadeTab, { ref: ref, value: value, Icon: _jsx(ChestIcon, { variant: "solid", size: "sm" }), label: label, active: active, size: size, onClick: onClick }));
});
const AchievementsNavButton = React.forwardRef(({ value, active, size, onClick, item, label = "Achievements" }, ref) => {
    if (item) {
        return (_jsx(ArcadeMenuItem, { ref: ref, value: value, Icon: _jsx(TrophyIcon, { variant: "solid", size: "sm" }), label: label, active: active, size: size, onClick: onClick }));
    }
    return (_jsx(ArcadeTab, { ref: ref, value: value, Icon: _jsx(TrophyIcon, { variant: "solid", size: "sm" }), label: label, active: active, size: size, onClick: onClick }));
});
const LeaderboardNavButton = React.forwardRef(({ value, active, size, onClick, item, label = "Leaderboard" }, ref) => {
    if (item) {
        return (_jsx(ArcadeMenuItem, { ref: ref, value: value, Icon: _jsx(LeaderboardIcon, { variant: "solid", size: "sm" }), label: label, active: active, size: size, onClick: onClick }));
    }
    return (_jsx(ArcadeTab, { ref: ref, value: value, Icon: _jsx(LeaderboardIcon, { variant: "solid", size: "sm" }), label: label, active: active, size: size, onClick: onClick }));
});
const GuildsNavButton = React.forwardRef(({ value, active, size, onClick, item, label = "Guilds" }, ref) => {
    if (item) {
        return (_jsx(ArcadeMenuItem, { ref: ref, value: value, Icon: _jsx(SwordsIcon, { variant: "solid", size: "sm" }), label: label, active: active, size: size, onClick: onClick }));
    }
    return (_jsx(ArcadeTab, { ref: ref, value: value, Icon: _jsx(SwordsIcon, { variant: "solid", size: "sm" }), label: label, active: active, size: size, onClick: onClick }));
});
const ActivityNavButton = React.forwardRef(({ value, active, size, onClick, item, label = "Activity" }, ref) => {
    if (item) {
        return (_jsx(ArcadeMenuItem, { ref: ref, value: value, Icon: _jsx(PulseIcon, { variant: "solid", size: "sm" }), label: label, active: active, size: size, onClick: onClick }));
    }
    return (_jsx(ArcadeTab, { ref: ref, value: value, Icon: _jsx(PulseIcon, { variant: "solid", size: "sm" }), label: label, active: active, size: size, onClick: onClick }));
});
const MetricsNavButton = React.forwardRef(({ value, active, size, onClick, item, label = "Metrics" }, ref) => {
    if (item) {
        return (_jsx(ArcadeMenuItem, { ref: ref, value: value, Icon: _jsx(MetricsIcon, { variant: "solid", size: "sm" }), label: label, active: active, size: size, onClick: onClick }));
    }
    return (_jsx(ArcadeTab, { ref: ref, value: value, Icon: _jsx(MetricsIcon, { variant: "solid", size: "sm" }), label: label, active: active, size: size, onClick: onClick }));
});
const AboutNavButton = React.forwardRef(({ value, active, size, onClick, item, label = "About" }, ref) => {
    if (item) {
        return (_jsx(ArcadeMenuItem, { ref: ref, value: value, Icon: _jsx(ListIcon, { variant: "solid", size: "sm" }), label: label, active: active, size: size, onClick: onClick }));
    }
    return (_jsx(ArcadeTab, { ref: ref, value: value, Icon: _jsx(ListIcon, { variant: "solid", size: "sm" }), label: label, active: active, size: size, onClick: onClick }));
});
const MarketplaceNavButton = React.forwardRef(({ value, active, size, onClick, item, label = "Shop" }, ref) => {
    if (item) {
        return (_jsx(ArcadeMenuItem, { ref: ref, value: value, Icon: _jsx(ShoppingCartIcon, { variant: "solid", size: "sm" }), label: label, active: active, size: size, onClick: onClick }));
    }
    return (_jsx(ArcadeTab, { ref: ref, value: value, Icon: _jsx(ShoppingCartIcon, { variant: "solid", size: "sm" }), label: label, active: active, size: size, onClick: onClick }));
});
const ItemsNavButton = React.forwardRef(({ value, active, size, onClick, item, label = "Items" }, ref) => {
    if (item) {
        return (_jsx(ArcadeMenuItem, { ref: ref, value: value, Icon: _jsx(ScrollIcon, { variant: "solid", size: "sm" }), label: label, active: active, size: size, onClick: onClick }));
    }
    return (_jsx(ArcadeTab, { ref: ref, value: value, Icon: _jsx(ScrollIcon, { variant: "solid", size: "sm" }), label: label, active: active, size: size, onClick: onClick }));
});
const HoldersNavButton = React.forwardRef(({ value, active, size, onClick, item, label = "Holders" }, ref) => {
    if (item) {
        return (_jsx(ArcadeMenuItem, { ref: ref, value: value, Icon: _jsx(UsersIcon, { variant: "solid", size: "sm" }), label: label, active: active, size: size, onClick: onClick }));
    }
    return (_jsx(ArcadeTab, { ref: ref, value: value, Icon: _jsx(UsersIcon, { variant: "solid", size: "sm" }), label: label, active: active, size: size, onClick: onClick }));
});
const PredictNavButton = React.forwardRef(({ value, active, size, onClick, item, label = "Predict" }, ref) => {
    if (item) {
        return (_jsx(ArcadeMenuItem, { ref: ref, value: value, Icon: _jsx(LightbulbIcon, { variant: "solid", size: "sm" }), label: label, active: active, size: size, onClick: onClick }));
    }
    return (_jsx(ArcadeTab, { ref: ref, value: value, Icon: _jsx(LightbulbIcon, { variant: "solid", size: "sm" }), label: label, active: active, size: size, onClick: onClick }));
});
const PositionsNavButton = React.forwardRef(({ value, active, size, onClick, item, label = "Positions" }, ref) => {
    if (item) {
        return (_jsx(ArcadeMenuItem, { ref: ref, value: value, Icon: _jsx(LightbulbIcon, { variant: "solid", size: "sm" }), label: label, active: active, size: size, onClick: onClick }));
    }
    return (_jsx(ArcadeTab, { ref: ref, value: value, Icon: _jsx(LightbulbIcon, { variant: "solid", size: "sm" }), label: label, active: active, size: size, onClick: onClick }));
});
export default ArcadeTabs;
//# sourceMappingURL=tabs.js.map