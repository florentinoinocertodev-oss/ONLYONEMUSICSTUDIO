# Testing

## Automated checks

Run these commands from the workspace root:

```sh
pnpm --filter @workspace/onlyone-music-studio run typecheck
pnpm --filter @workspace/onlyone-music-studio run test
pnpm --filter @workspace/onlyone-music-studio run build
```

The F0.1 unit tests cover valid and invalid tempo, normalized track gain, and
time-signature inputs. These are pure TypeScript checks and do not claim to test
browser audio, microphone permissions, recording, or real-time performance.

## Manual preview checks

- The root route opens the studio workspace.
- No audio or recording action is presented as operational in F0.1.
- Future capabilities are visibly marked unavailable.
- The interface remains usable at narrow and wide viewport sizes.

## F0.1 results

- `pnpm --filter @workspace/onlyone-music-studio run typecheck` — passed.
- `pnpm --filter @workspace/onlyone-music-studio run test` — passed; 14 tests.
- `PORT=18113 BASE_PATH=/ pnpm --filter @workspace/onlyone-music-studio run build` — passed.
- `pnpm run typecheck` — passed for all workspace packages.
- Preview checked at desktop and mobile viewport sizes.

These checks validate the F0.1 interface and pure input-validation code. They do
not validate real-time audio, microphone access, recording, or browser latency.
