# CSE8603 - Bidaulet Sanzhar - 080327554084
Niche: 18 Accessibility issues reporter (campus)
Seed: Hue=255, Accent=312
Watermark: CSE8603 | Bidaulet Sanzhar | 080327554084 | niche-18

## Seed arithmetic
ID2 = 84, M = 3 (March), L = B = 2

- Hue = (84 × 11 + 3 × 17) mod 360 = (924 + 51) mod 360 = 975 mod 360 = **255**
- Accent = (255 + 55 + 2) mod 360 = **312**
- Niche index = (84 × 3 + 3 + 2) mod 24 = 257 mod 24 = 17 → niche **18**

Theme tokens: `client/src/theme.js` → CSS variables `--primary` / `--accent` (see `client/src/index.css`).

## Run client
cd client && npm install && npm run dev

## Run server (Att2)
Not started yet (server will be Express + PostgreSQL/SQLite).

## API
See API.md and AUTH_NOTES.md (later weeks).

## Progress
| Week | Task | Where |
|---|---|---|
| 1-2 | Vite/React hello, niche claim, repo + README (TSIS-1) | `client/`, this README |
| 3 | SIS-1: landing — Header, Hero, FeatureGrid, Footer, seed theme | `client/src/components/` |
| 5 | TSIS-2: props + useState widget | `BarrierTagPicker.jsx` |
| 6 | SIS-2: report list with add / delete / filter, controlled form, empty state | `IssueBoard.jsx`, `IssueForm.jsx`, `IssueList.jsx` |

## Folder structure
```
cse8603-bidaulet/
  README.md
  screenshots/
  client/            # Vite React
    src/components   # Header, Hero, FeatureGrid, FeatureCard, BarrierTagPicker,
                     # IssueBoard, IssueForm, IssueList, IssueItem, Footer
    src/data         # mock data (features, issues)
    src/theme.js     # seed colors + watermark
  server/            # Express (Att2, later)
```
