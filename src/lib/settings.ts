import { useState } from "react";

export function useSettings() {
  const [settings, setSettings] = useState({
    theme: "dark",
    volume: 1,
  });

  return {
    settings,
    setSettings,
    useSettings: () => settings,
  };
}

export default useSettings;
