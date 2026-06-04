# Open4U Online

Multi-attorney portfolio platform. One shared layout, per-attorney content folders, and branch-based deployment.

## Architecture

```
src/
├── config/active-attorney.ts   ← changes per git branch (deploy target)
├── attorneys/
│   ├── registry.ts             ← all registered attorneys
│   ├── pages.ts                ← maps slug → custom page component
│   ├── jay-gellhaus/
│   │   ├── profile.ts          ← attorney data
│   │   └── page.tsx            ← optional custom layout
│   └── jay-wang/
│       ├── profile.ts
│       └── page.tsx
├── components/
│   ├── layout/                 ← shared Navbar, Footer, ThemeProvider
│   ├── sections/               ← shared Hero, About, Practice, etc.
│   └── dev/AttorneySwitch.tsx  ← dev-only profile switcher
└── lib/attorney.ts             ← resolves active attorney
```

## Branch workflow (50+ attorneys)

Each attorney gets their own branch. To deploy person A's site, merge their branch into `release`.

```bash
# Create attorney branch from main
git checkout main
git checkout -b attorney/jay-gellhaus
npm run set-attorney -- jay-gellhaus
git add src/config/active-attorney.ts
git commit -m "Set active attorney: jay-gellhaus"

# Deploy Jay Gellhaus
git checkout release
git merge attorney/jay-gellhaus
git push origin release

# Deploy Jay Wang instead
git checkout release
git merge attorney/jay-wang
git push origin release
```

Only `src/config/active-attorney.ts` (and attorney-specific content on that branch) differs between attorney branches. Shared layout code stays identical.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000. Use the **Dev switcher** (bottom-right) or URL param:

- `/?attorney=jay-gellhaus`
- `/?attorney=jay-wang`

The switcher persists your choice in a cookie during development.

## Adding a new attorney

1. Create folder `src/attorneys/{slug}/`
2. Add `profile.ts` with attorney data
3. Add `page.tsx` (copy from an existing attorney, customize if needed)
4. Register in `src/attorneys/registry.ts` and `src/attorneys/pages.ts`
5. Create branch: `git checkout -b attorney/{slug}` and run `npm run set-attorney -- {slug}`

## Test attorneys

| Slug | Name | Firm |
|------|------|------|
| `jay-gellhaus` | Jay R. Gellhaus | Gellhaus & Gellhaus Attorneys at Law |
| `jay-wang` | Jay Wang | Hixson Nagatani LLP |

Profile data sourced from [gellhauslaw.com](https://www.gellhauslaw.com/about) and [hnemploymentlaw.com/jay-wang](https://hnemploymentlaw.com/jay-wang/).

## Environment variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_ACTIVE_ATTORNEY` | Override active slug at build/runtime (optional) |

Production builds use `src/config/active-attorney.ts` from the merged branch.
