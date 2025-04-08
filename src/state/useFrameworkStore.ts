import { create } from 'zustand';
import { Framework } from '../types';

interface FrameworkState {
  currentFramework: Framework;
  setFramework: (framework: Framework) => void;
}

export const useFrameworkStore = create<FrameworkState>((set) => ({
  currentFramework: 'chakra',
  setFramework: (framework) => set({ currentFramework: framework }),
}));