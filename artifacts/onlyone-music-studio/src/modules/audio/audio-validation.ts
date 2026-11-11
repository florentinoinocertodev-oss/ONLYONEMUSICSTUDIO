import type { TimeSignature } from "./audio-contracts";

export function validateTempoBpm(bpm: number): void {
  if (!Number.isFinite(bpm) || bpm <= 0) {
    throw new RangeError("Tempo must be a finite number greater than zero.");
  }
}

export function validateTrackGain(gain: number): void {
  if (!Number.isFinite(gain) || gain < 0 || gain > 1) {
    throw new RangeError("Track gain must be a finite number between 0 and 1.");
  }
}

export function validateTimeSignature(signature: TimeSignature): void {
  const { numerator, denominator } = signature;
  const isPowerOfTwo =
    Number.isInteger(denominator) &&
    denominator > 0 &&
    Number.isInteger(Math.log2(denominator));

  if (!Number.isInteger(numerator) || numerator <= 0 || !isPowerOfTwo) {
    throw new RangeError(
      "Time signature needs a positive integer numerator and a positive power-of-two denominator.",
    );
  }
}
