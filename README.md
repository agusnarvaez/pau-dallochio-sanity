# paula-dallochio-sanity

[![QA](https://github.com/agusnarvaez/paula-dallochio-sanity/actions/workflows/qa.yml/badge.svg)](https://github.com/agusnarvaez/paula-dallochio-sanity/actions/workflows/qa.yml)
[![Node.js](https://img.shields.io/badge/Node.js-22%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Sanity](https://img.shields.io/badge/Sanity-Studio-F03E2F?logo=sanity&logoColor=white)](https://www.sanity.io/)

Sanity Studio used to manage property content for the Paula Dallochio project.

Studio de Sanity usado para gestionar el contenido de propiedades del proyecto Paula Dallochio.

## Overview

### ES

El repositorio tiene una estructura contenedora. La aplicacion real del Studio vive en `paula-dallochio-admin/`, mientras que la raiz concentra documentacion y workflow de QA.

### EN

This repository uses a container layout. The actual Studio application lives in `paula-dallochio-admin/`, while the repository root hosts documentation and QA workflow metadata.

## Stack

- Sanity Studio 3
- React 18
- TypeScript
- ESLint
- GitHub Actions

## Getting Started

```bash
cd paula-dallochio-admin
npm install
npm run dev
```

## Main Commands

```bash
cd paula-dallochio-admin
npm run dev
npm run lint
npm run build
npm run build:ci
```

Sanity auto-updates are disabled in `paula-dallochio-admin/sanity.cli.ts` so local and CI builds stay deterministic and non-interactive.

## Repository Structure

```text
.
├── .github/workflows/qa.yml
├── paula-dallochio-admin/
│   ├── schemas/
│   ├── sanity.config.ts
│   ├── sanity.cli.ts
│   └── package.json
└── README.md
```

## Content Model

The current schema centers on real-estate content: properties, property types, currencies, operation types, and portable text blocks.

## Quality

- ESLint validates the Studio source.
- GitHub Actions is configured to run lint and build in the Studio folder.
- There are currently no automated tests, so schema changes should be verified manually in the Studio UI after build verification.

## License

MIT. See [LICENSE](./LICENSE).
