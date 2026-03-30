import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { loadConfig } from "@cartridge/presets";
export const usePresetColor = (configName) => {
    const [color, setColor] = useState(null);
    useEffect(() => {
        if (!configName) {
            setColor(null);
            return;
        }
        loadConfig(configName).then((config) => {
            setColor(config?.theme?.colors?.primary?.toString() ?? null);
        });
    }, [configName]);
    return color;
};
/**
 * @deprecated No longer needed. usePresetColor now loads configs on demand.
 */
export function ControllerPresetProvider({ children, }) {
    return _jsx(_Fragment, { children: children });
}
//# sourceMappingURL=presets.js.map