# CLAUDE.md

## Project Snapshot

`paula-dallochio-sanity` is a Sanity Studio repository used to manage property content for the Paula Dallochio project.

The repository root is a container layer. The actual Studio application lives in `paula-dallochio-admin/`.

## Stack

- Sanity Studio 3
- React 18
- TypeScript
- ESLint
- GitHub Actions

## Important Paths

- `paula-dallochio-admin/sanity.config.ts` Studio configuration and plugin setup
- `paula-dallochio-admin/sanity.cli.ts` CLI configuration with deterministic build policy
- `paula-dallochio-admin/schemas/` property-related schemas
- `.github/workflows/qa.yml` unattended lint and build validation

## Commands

Run all application commands from `paula-dallochio-admin/`:

```bash
cd paula-dallochio-admin
npm install
npm run dev
npm run lint
npm run build
npm run build:ci
```

## Working Rules

- Do not run `npm` commands from the repository root; use the `paula-dallochio-admin/` subdirectory.
- Sanity auto-updates are intentionally disabled in `paula-dallochio-admin/sanity.cli.ts` so builds stay deterministic.
- Keep schema changes small and validate them in both lint/build and the Studio UI.
