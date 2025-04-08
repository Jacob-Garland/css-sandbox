import { create } from 'zustand';
import { Framework } from '../types';

interface FrameworkState {
  currentFramework: Framework | null;
  setFramework: (framework: Framework) => void;
}

export const useFrameworkStore = create<FrameworkState>((set) => ({
  currentFramework: null,
  setFramework: (framework) => set({ currentFramework: framework }),
}));