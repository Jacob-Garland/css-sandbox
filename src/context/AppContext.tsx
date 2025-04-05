import { createContext } from 'react';
import { Framework } from '../types';

interface AppContextType {
    framework: Framework;
    setFramework: (fw: Framework) => void;
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);