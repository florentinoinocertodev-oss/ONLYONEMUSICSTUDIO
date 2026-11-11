/**
 * Public contracts for a future browser audio engine.
 *
 * These types describe the boundary only. No audio engine implementation is
 * available in F0.1, and the studio UI must not treat this contract as a
 * playable engine.
 */

export type AudioEngineState =
  | "uninitialized"
  | "ready"
  | "running"
  | "suspended"
  | "stopped"
  | "error";

export interface TimeSignature {
  readonly numerator: number;
  readonly denominator: number;
}

export interface AudioTrackDescriptor {
  readonly id: string;
  readonly name: string;
}

export interface AudioTrackSnapshot extends AudioTrackDescriptor {
  /** Linear gain in the inclusive range [0, 1]. */
  readonly gain: number;
  readonly muted: boolean;
}

export interface ScheduledMusicEvent {
  readonly id: string;
  readonly trackId: string;
  /** Position and length are expressed in quarter-note beats. */
  readonly beat: number;
  readonly durationBeats: number;
  readonly sourceNode: AudioNode;
}

export interface AudioEngineSnapshot {
  readonly state: AudioEngineState;
  readonly tempoBpm: number;
  readonly timeSignature: TimeSignature;
  readonly tracks: readonly AudioTrackSnapshot[];
}

export type AudioEngineErrorCode =
  | "unsupported"
  | "permission-denied"
  | "initialization-failed"
  | "invalid-state"
  | "invalid-track"
  | "scheduling-failed";

export class AudioEngineError extends Error {
  constructor(
    readonly code: AudioEngineErrorCode,
    message: string,
    options?: ErrorOptions,
  ) {
    super(message, options);
    this.name = "AudioEngineError";
  }
}

/**
 * UI-independent lifecycle and routing boundary for the future audio engine.
 * Implementations must be created and controlled from explicit user actions.
 */
export interface AudioEngine {
  initialize(): Promise<void>;
  start(): Promise<void>;
  stop(): Promise<void>;
  dispose(): Promise<void>;

  setTempo(bpm: number): void;
  setTimeSignature(signature: TimeSignature): void;
  addTrack(track: AudioTrackDescriptor): void;
  removeTrack(trackId: string): void;
  setTrackGain(trackId: string, gain: number): void;
  setTrackMuted(trackId: string, muted: boolean): void;

  schedule(event: ScheduledMusicEvent): void;
  cancelScheduledEvents(trackId?: string): void;

  connectSource(trackId: string, source: AudioNode): void;
  connectEffect(trackId: string, effect: AudioNode): void;
  connectOutput(trackId: string, destination: AudioNode): void;

  getSnapshot(): AudioEngineSnapshot;
}
