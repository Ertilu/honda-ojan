"use client";
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  GlobalContextDefaultValues,
  GlobalContextType,
} from "./globalContext.type";

export const GlobalContext = createContext<GlobalContextType>(
  GlobalContextDefaultValues
);

function GlobalProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState(null);

  const onSetData = useCallback((data: any) => {
    setData(data);
    if (typeof window !== "undefined") {
      localStorage.setItem("produk-data", JSON.stringify(data));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("produk-data")) {
        setData(JSON.parse(localStorage.getItem("produk-data") as string));
      }
    }
  }, []);

  return (
    <GlobalContext.Provider value={{ data, setData: onSetData }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
