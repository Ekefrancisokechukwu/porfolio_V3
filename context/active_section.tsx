"use client";

import {
  ReactNode,
  useState,
  createContext,
  SetStateAction,
  useContext,
} from "react";

type ActiveProviderProps = {
  children: ReactNode;
};

type ActiveSectionType = {
  activeSection: string;
  setActiveSection: React.Dispatch<SetStateAction<string>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<SetStateAction<number>>;
  setIsMenuOpen: React.Dispatch<SetStateAction<boolean>>;
  IsMenuOpen: boolean;
};

const ActiveContext = createContext<ActiveSectionType | null>(null);

const ActiveProvider = ({ children }: ActiveProviderProps) => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  const [IsMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <ActiveContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
        IsMenuOpen,
        setIsMenuOpen,
      }}
    >
      {children}
    </ActiveContext.Provider>
  );
};

export const useActiveContext = () => {
  const context = useContext(ActiveContext);
  if (context === null) {
    throw new Error("useActive must be used within an ActiveSectionProvider");
  }
  return context;
};

export default ActiveProvider;
