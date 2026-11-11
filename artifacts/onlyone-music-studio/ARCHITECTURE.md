# Architecture

## F0.1 boundary

The React interface is a presentation layer. It does not own or simulate audio
playback. The `modules/audio` directory contains the public TypeScript contract
and input validation only; it contains no engine implementation or browser
audio side effects.

```text
src/
  App.tsx                     Application entry and studio workspace
  modules/
    audio/
      audio-contracts.ts      UI-independent future engine boundary
      audio-validation.ts     Pure validation of audio-domain inputs
      audio-validation.test.ts
```

## Planned responsibility boundaries

These are future architectural areas, not implemented modules in F0.1:

- **AudioEngine** — browser audio lifecycle, track graph, event scheduling,
  effects routing, and output.
- **VoiceEngine** — microphone permission, capture, monitoring, and vocal
  processing.
- **InstrumentEngine** — virtual instruments and synthesizers.
- **MusicCompositionEngine** — notes, rhythm, bars, and composition data.
- **AIEngine** — optional creative assistance, isolated from the audio runtime.
- **LiveInteractionEngine** — safe parameter changes during playback.
- **ProjectEngine** — project state, versioning, and persistence.
- **ExportEngine** — mix rendering and file export.

Each future area should be added only with working behavior and tests. A UI
placeholder or a type declaration is not evidence that a capability exists.

## Audio engine contract

`AudioEngine` is defined without React dependencies. Implementations must own
their audio lifecycle, expose snapshots rather than requiring React renders to
drive playback, and be started from explicit user actions. Audio nodes and
scheduled musical events enter through a narrow interface.

F0.1 does not implement an `AudioContext`, microphone capture, `AudioWorklet`,
MediaRecorder, IndexedDB, or audio export.

## Error handling

The audio boundary defines `AudioEngineError` with a finite error-code union so
future engine failures can be distinguished without depending on UI-specific
error types. Browser permission and support failures must be surfaced to the UI
explicitly when those capabilities are implemented.
