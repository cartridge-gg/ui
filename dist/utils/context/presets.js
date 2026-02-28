import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useMemo } from "react";
import { useEffect, useState } from "react";
import { loadAllConfigs } from "@cartridge/presets";
const ControllerPresetContext = createContext({
    configs: {},
});
export function ControllerPresetProvider({ children, }) {
    const [configs, setConfigs] = useState({});
    useEffect(() => {
        const loadConfigs = async () => {
            const configs = await loadAllConfigs();
            setConfigs(configs);
        };
        loadConfigs();
    }, []);
    return (_jsx(ControllerPresetContext.Provider, { value: { configs }, children: children }));
}
export const usePresetColor = (configName) => {
    const { configs } = useContext(ControllerPresetContext);
    const color = useMemo(() => {
        const config = configs[configName ?? ""];
        return config?.theme?.colors?.primary?.toString() ?? null;
    }, [configs, configName]);
    return color;
};
//# sourceMappingURL=presets.js.map