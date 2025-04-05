import { useState } from 'react';
import { AppContext } from './AppContext';
import { Framework } from '../types';

export function AppContextProvider({ children }: { children: React.ReactNode }) {
    const [framework, setFramework] = useState<Framework>('chakra');
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <AppContext.Provider value={{ framework, setFramework, theme, toggleTheme }}>
            {children}
        </AppContext.Provider>
    );
}