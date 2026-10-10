// CSE8603 | Bidaulet Sanzhar | 080327554084 | niche-18
// Seed: ID2=84, M=3, L=B=2
// Hue    = (84*11 + 3*17) mod 360 = 975 mod 360 = 255
// Accent = (255 + 55 + 2) mod 360 = 312
export const seed = { hue: 255, accent: 312 };

export const theme = {
  primary: `hsl(${seed.hue}, 65%, 42%)`,
  primarySoft: `hsl(${seed.hue}, 70%, 95%)`,
  primaryDark: `hsl(${seed.hue}, 60%, 22%)`,
  accent: `hsl(${seed.accent}, 70%, 48%)`,
  accentSoft: `hsl(${seed.accent}, 80%, 95%)`,
  watermark: 'CSE8603 | Bidaulet Sanzhar | 080327554084 | niche-18',
};

// Copies the seed colors into CSS variables on :root, so every CSS file can use var(--primary)
export function applyTheme() {
  const root = document.documentElement;
  root.style.setProperty('--primary', theme.primary);
  root.style.setProperty('--primary-soft', theme.primarySoft);
  root.style.setProperty('--primary-dark', theme.primaryDark);
  root.style.setProperty('--accent', theme.accent);
  root.style.setProperty('--accent-soft', theme.accentSoft);
}
