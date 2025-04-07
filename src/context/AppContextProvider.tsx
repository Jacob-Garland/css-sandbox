import { useState } from 'react';
import { AppContext } from './AppContext';
import { Framework } from '../types';

export function AppContextProvider({ children }: { children: React.ReactNode }) {
    const [framework, setFramework] = useState<Framework>('chakra');

    return (
        <AppContext.Provider value={{ framework, setFramework }}>
            {children}
        </AppContext.Provider>
    );
}