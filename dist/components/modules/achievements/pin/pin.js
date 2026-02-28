import { jsx as _jsx } from "react/jsx-runtime";
import { Button, TrackIcon } from "../../../../index";
import { useCallback, useState } from "react";
export function AchievementPin({ pinned, achievementId, disabled, onClick, }) {
    const [loading, setLoading] = useState(false);
    const handleClick = useCallback(() => {
        if (disabled)
            return;
        onClick?.(!!pinned, achievementId ?? "", setLoading);
    }, [disabled, onClick, pinned, achievementId, setLoading]);
    return (_jsx(Button, { variant: "tertiary", size: "tall", className: "grow", isLoading: loading, isActive: pinned, disabled: disabled, onClick: handleClick, children: _jsx(TrackIcon, { size: "sm", variant: pinned ? "solid" : "line" }) }));
}
export default AchievementPin;
//# sourceMappingURL=pin.js.map