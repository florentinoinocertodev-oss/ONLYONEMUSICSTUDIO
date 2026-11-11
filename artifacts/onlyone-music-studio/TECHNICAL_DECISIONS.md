# Technical decisions

## React, TypeScript, and Vite

Use the workspace's existing React/Vite artifact scaffold with TypeScript
strictness enabled. This keeps the first phase within the existing toolchain and
avoids adding a second application framework.

## No backend or account system in F0.1

The approved scope is a local browser studio foundation, with no user accounts,
payments, AI services, or shared project data. The existing API and database
workspace packages are not used by this artifact.

## Audio boundary without an implementation

Define the engine contract independently of React, but do not instantiate
`AudioContext` or imply that audio processing is available. This makes the
future engine boundary explicit while keeping the current product honest.

## Minimal added test dependency

Vitest is the only dependency added for F0.1. It provides an automated runner for
the pure domain-input validation tests; no component-testing or audio framework
is added before there is behavior that needs it.

## Browser API constraints

Audio playback must begin from a user gesture, microphone access requires
permission, and low-latency behavior varies by browser and device. These
constraints belong in the implementation and validation of later audio phases,
not in claims about the F0.1 interface.
