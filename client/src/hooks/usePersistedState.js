import { useState } from "react";

export default function usePersistedState(stateKey, initialState) {
  const [state, setState] = useState(() => {
    const persistedStateJson = localStorage.getItem(stateKey);
    if (!persistedStateJson) {
      return typeof initialState === "function" ? initialState() : initialState;
    }
    const persistedStateData = JSON.parse(persistedStateJson);
    return persistedStateData;
  });

  const setPersistedState = (input) => {
    const userData = typeof input === "function" ? input(state) : input;
    const persistedData = JSON.stringify(userData);
    localStorage.setItem(stateKey, persistedData);
    setState(userData);
  };

  return [state, setPersistedState];
}
