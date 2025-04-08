import { create } from 'zustand';

interface ColorStore {
  selectedElement: string | null;
  elementColors: Record<string, string>; // key = component ID/type, value = hex color
  setSelectedElement: (id: string) => void;
  setElementColor: (id: string, color: string) => void;
  resetColors: () => void;
}

export const useColorStore = create<ColorStore>((set) => ({
  selectedElement: null,
  elementColors: {},
  setSelectedElement: (id) => set({ selectedElement: id }),
  setElementColor: (id, color) =>
    set((state) => ({
      elementColors: { ...state.elementColors, [id]: color },
    })),
  resetColors: () => set({ elementColors: {}, selectedElement: null }),
}));