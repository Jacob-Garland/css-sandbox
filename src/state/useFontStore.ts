import { create } from 'zustand';

interface FontOption {
  label: string;
  family: string;
  link?: string;
}

interface FontStore {
  selectedFont: FontOption;
  setFont: (font: FontOption) => void;
}

const defaultFont: FontOption = {
  label: 'System Default',
  family: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
};

export const fontOptions: FontOption[] = [
  defaultFont,
  {
    label: 'Inter',
    family: "'Inter', sans-serif",
    link: 'https://fonts.googleapis.com/css2?family=Inter&display=swap',
  },
  {
    label: 'Roboto',
    family: "'Roboto', sans-serif",
    link: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
  },
  {
    label: 'Lora',
    family: "'Lora', serif",
    link: 'https://fonts.googleapis.com/css2?family=Lora&display=swap',
  },
  {
    label: 'Poppins',
    family: "'Poppins', sans-serif",
    link: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap',
  },
  {
    label: 'Merriweather',
    family: "'Merriweather', serif",
    link: 'https://fonts.googleapis.com/css2?family=Merriweather&display=swap',
  },
];

export const useFontStore = create<FontStore>((set) => ({
  selectedFont: defaultFont,
  setFont: (font) => {
    if (font.link) {
      const existing = document.querySelector(`link[data-font="${font.label}"]`);
      if (!existing) {
        const link = document.createElement('link');
        link.href = font.link;
        link.rel = 'stylesheet';
        link.setAttribute('data-font', font.label);
        document.head.appendChild(link);
      }
    }
    set({ selectedFont: font });
  },
}));