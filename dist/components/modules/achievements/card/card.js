import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AchievementBit, AchievementBits, AchievementContent, AchievementPagination, AchievementPin, AchievementShare, Card, CardHeader, CardTitle, } from "../../../../index";
import { cn } from "../../../../utils";
import { useCallback, useEffect, useMemo, useState } from "react";
export const AchievementCard = ({ name, achievements, }) => {
    const [page, setPage] = useState(0);
    const [pages, setPages] = useState([]);
    const visibles = useMemo(() => {
        return achievements.filter((a) => a.index === page || (a.content.hidden && !a.completed));
    }, [achievements, page]);
    const handleNext = useCallback(() => {
        const index = pages.indexOf(page);
        const next = pages[index + 1];
        if (!next)
            return;
        setPage(next);
    }, [page, pages]);
    const handlePrevious = useCallback(() => {
        const index = pages.indexOf(page);
        if (index === 0)
            return;
        setPage(pages[index - 1]);
    }, [page, pages]);
    useEffect(() => {
        // Set the page to the first uncompleted achievement or 0 if there are none
        const filtereds = achievements.filter((a) => !a.content.hidden || a.completed);
        // Get the unique list of indexes for the achievements in this group
        const pages = filtereds.length > 0 ? [...new Set(filtereds.map((a) => a.index))] : [0];
        setPages(pages);
        const page = filtereds.find((a) => !a.completed);
        setPage(page ? page.index : pages[pages.length - 1]);
    }, [achievements]);
    if (visibles.length === 0)
        return null;
    return (_jsxs(Card, { children: [_jsxs("div", { className: "flex flex-row gap-x-px", children: [_jsx(CardHeader, { className: "grow", children: _jsx(CardTitle, { className: "capitalize", children: name.toLowerCase() }) }), pages.length > 1 && (_jsx(AchievementPagination, { direction: "left", onClick: handlePrevious, disabled: page === pages[0] })), pages.length > 1 && (_jsx(AchievementPagination, { direction: "right", onClick: handleNext, disabled: page === pages[pages.length - 1] })), pages.length > 1 && (_jsx(CardHeader, { children: _jsx(AchievementBits, { children: pages.map((p) => (_jsx(AchievementBit, { completed: achievements
                                    .filter((a) => a.index === p)
                                    .every((a) => a.completed), active: p === page, onClick: () => setPage(p) }, p))) }) }))] }), visibles.map((achievement) => (_jsxs("div", { className: "flex gap-x-px", children: [_jsx(AchievementContent, { ...achievement.content }), _jsxs("div", { className: cn("flex flex-col gap-y-px", !achievement.pin && !achievement.share && "hidden"), children: [achievement.pin && _jsx(AchievementPin, { ...achievement.pin }), achievement.share && _jsx(AchievementShare, { ...achievement.share })] })] }, achievement.id)))] }));
};
export default AchievementCard;
//# sourceMappingURL=card.js.map