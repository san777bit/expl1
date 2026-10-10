export const seed = {
  hue: 255,
  accent: 312,
  niche: 18,
};

export const theme = {
  primary: `hsl(${seed.hue}, 65%, 42%)`,
  primarySoft: `hsl(${seed.hue}, 70%, 95%)`,
  primaryDark: `hsl(${seed.hue}, 60%, 22%)`,
  accent: `hsl(${seed.accent}, 70%, 48%)`,
  accentSoft: `hsl(${seed.accent}, 80%, 95%)`,
  watermark: 'CSE8603 | Bidaulet Sanzhar | 080327554084 | niche-18',
};

export function applyTheme() {
  const root = document.documentElement;
  root.style.setProperty('--primary', theme.primary);
  root.style.setProperty('--primary-soft', theme.primarySoft);
  root.style.setProperty('--primary-dark', theme.primaryDark);
  root.style.setProperty('--accent', theme.accent);
  root.style.setProperty('--accent-soft', theme.accentSoft);
}
