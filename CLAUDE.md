### Tech Stack

**Core**
- Next.js 16.4.2 — App Router, RSC, `cacheComponents`, `partialPrefetching`, Turbopack
- React 19.3.0
- TypeScript 5 — strict mode

**Styling**
- Tailwind CSS v4 — `@import "tailwindcss"` syntax
- tw-animate-css — animations
- shadcn/ui 4.22.1 — style `base-nova`, base color `neutral`, CSS variables
- @base-ui/react 1.9.0 — headless UI (shadcn nova base)
- class-variance-authority — CVA for component variants
- lucide-react — icons

**Fonts** (via `next/font/google`)
- Geist / Geist Mono — default font (`--font-sans`, `--font-mono`)
- Poppins (`--font-poppins`)
- Roboto (`--font-roboto`)

**Folder structure**
```
src/
  app/                          → pages (App Router)
  components/
    my-components/              → custom components
    ui/                         → shadcn components
  lib/                          → utils, fonts
```

**Path alias:** `@/` → `./src/`