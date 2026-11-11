# ONLYONE MUSIC STUDIO

An extensible browser-based music studio; F0.1 establishes the studio interface and audio-engine contracts without claiming unfinished playback or recording features.

## Run & Operate

- `pnpm --filter @workspace/onlyone-music-studio run dev` — run the studio web app
- `pnpm --filter @workspace/onlyone-music-studio run typecheck` — strict TypeScript check
- `pnpm --filter @workspace/onlyone-music-studio run test` — run audio-domain unit tests
- `pnpm --filter @workspace/onlyone-music-studio run build` — build the studio web app
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- The studio currently has no backend or database dependency.

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Studio: React, Vite, strict TypeScript, Vitest
- Shared API server: Express 5 (not used by the studio in F0.1)

## Where things live

- `artifacts/onlyone-music-studio/` — studio app and F0.1 technical documents
- `artifacts/onlyone-music-studio/src/modules/audio/` — audio contracts and validation

## Architecture decisions

- The future audio engine is defined by a UI-independent contract; there is no audio implementation yet.
- No backend, authentication, payments, or external AI service is part of F0.1.
- Future music capabilities are not represented as working modules until implemented and tested.

## Product

The studio will let creators compose, record, organize, transform, and produce music while keeping control of the creative process. F0.1 provides the honest workspace shell and technical base only.

## User preferences

Follow the attached F0.1 scope: do not add unnecessary dependencies or claim unavailable audio/AI functionality.

## Gotchas

- Browser playback needs an explicit user gesture; microphone access requires browser permission.
- Check `artifacts/onlyone-music-studio/TESTING.md` for the F0.1 test boundaries.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
