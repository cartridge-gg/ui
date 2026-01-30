import { useEffect, useMemo, useState } from "react";
import { loadConfig, type ControllerConfig } from "@cartridge/presets";

let configs: Record<string, ControllerConfig | null> = {
  "": null,
};

export const useConfig = (configName: string) => {
  const [config, setConfig] = useState<ControllerConfig | null | undefined>(
    configs[configName],
  );
  useEffect(() => {
    const load = async () => {
      configs[configName] = null;
      configs[configName] = await loadConfig(configName);
      setConfig(configs[configName]);
    };
    if (configs[configName] === undefined) {
      load();
    }
  }, [configName]);
  return config;
};

export const usePresetColor = (configName?: string | null) => {
  const config = useConfig(configName ?? "");
  const color = useMemo(
    () => config?.theme?.colors?.primary?.toString() ?? null,
    [config],
  );
  return color;
};
