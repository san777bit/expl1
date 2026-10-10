import { theme, seed } from '../theme.js';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="watermark" id="watermark">{theme.watermark}</p>
      <p className="muted">
        Seed: Hue={seed.hue}, Accent={seed.accent} · Niche 18: Accessibility issues reporter (campus)
      </p>
    </footer>
  );
}
