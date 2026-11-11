# Roadmap

## F0.1 — Technical foundation

- Establish the React, Vite, and strict TypeScript application.
- Build the studio workspace shell and identify unavailable features honestly.
- Define the UI-independent audio-engine contract and test its input validation.
- Document architecture, decisions, and test instructions.

## F0.2 — Audio lifecycle

- Implement browser audio initialization and explicit start/stop behavior.
- Handle suspended contexts, browser support, lifecycle errors, and cleanup.
- Add focused browser-level tests before claiming reliable playback.

## F0.3 — Composition model

- Define notes, rhythm, tempo, time signatures, bars, and track data.
- Build a timeline from real composition state rather than sample data.
- Add editing and playback scheduling with measurable test coverage.

## F0.4 — Voice capture

- Add microphone permission and capture through MediaDevices.
- Add recording through MediaRecorder and clear permission/error states.
- Verify capture and cleanup behavior on supported browsers.

## F0.5 — Instruments and live interaction

- Add instruments and synthesizers as independently testable modules.
- Route track sources through effects and output.
- Support live changes without making UI updates the timing source.

## F0.6 — Projects and export

- Add local project persistence with IndexedDB.
- Define project recovery and schema evolution.
- Implement and test mixing and export formats.

## Later — Optional AI assistance

AI assistance, harmonization, mastering, and voice-to-instrument conversion
remain out of scope until separately specified and validated. They must remain
optional and must not replace the creator's control.
