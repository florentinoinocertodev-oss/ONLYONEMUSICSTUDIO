# ONLYONE MUSIC STUDIO

ONLYONE MUSIC STUDIO is a browser-based music-studio project focused on giving
creators control over composition, recording, organization, and production.
F0.1 establishes the application structure and audio boundary; it does not
provide playable audio, recording, instruments, AI assistance, or project
persistence.

## Requirements

- Node.js 24 (provided by the workspace)
- pnpm (provided by the workspace)

## Run

The Replit workflow starts the Vite development server with its required port
and path settings. To run it through the workspace workflow, use:

```sh
pnpm --filter @workspace/onlyone-music-studio run dev
```

## Validate

```sh
pnpm --filter @workspace/onlyone-music-studio run typecheck
pnpm --filter @workspace/onlyone-music-studio run test
pnpm --filter @workspace/onlyone-music-studio run build
```

## Current scope

- Studio workspace UI with unavailable future operations clearly identified.
- Strict TypeScript contracts for the future audio engine.
- Validation for tempo, track gain, and time-signature inputs.
- Architecture, technical decisions, testing, and roadmap documentation.

See [ARCHITECTURE.md](./ARCHITECTURE.md), [ROADMAP.md](./ROADMAP.md),
[TECHNICAL_DECISIONS.md](./TECHNICAL_DECISIONS.md), and [TESTING.md](./TESTING.md).
