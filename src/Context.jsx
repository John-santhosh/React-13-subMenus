import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

// custom hook
export const useGlobalContext = () => useContext(GlobalContext);

export function AppGlobalContext({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);

  function openSidebar() {
    setIsSidebarOpen(true);
  }
  function closeSidebar() {
    setIsSidebarOpen(false);
  }
  return (
    <GlobalContext.Provider
      value={{ openSidebar, closeSidebar, isSidebarOpen, pageId, setPageId }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
