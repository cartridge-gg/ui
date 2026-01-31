import { createContext, ReactNode, useContext, useMemo } from "react";
import { useEffect, useState } from "react";
import { loadAllConfigs, type ControllerConfig } from "@cartridge/presets";

type ControllerPresetContextType = {
  configs: Record<string, ControllerConfig>;
};

const ControllerPresetContext = createContext<ControllerPresetContextType>({
  configs: {},
});

export function ControllerPresetProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [configs, setConfigs] = useState<Record<string, ControllerConfig>>({});
  useEffect(() => {
    const loadConfigs = async () => {
      const configs = await loadAllConfigs();
      setConfigs(configs);
    };
    loadConfigs();
  }, []);
  return (
    <ControllerPresetContext.Provider value={{ configs }}>
      {children}
    </ControllerPresetContext.Provider>
  );
}

export const usePresetColor = (configName: string | null | undefined) => {
  const { configs } = useContext(ControllerPresetContext);
  const color = useMemo(() => {
    const config = configs[configName ?? ""];
    return config?.theme?.colors?.primary?.toString() ?? null;
  }, [configs, configName]);
  return color;
};
