import { describe, expect, it } from "vitest";

import {
  validateTempoBpm,
  validateTimeSignature,
  validateTrackGain,
} from "./audio-validation";

describe("audio contract validation", () => {
  it("accepts any finite positive tempo without imposing a product-specific range", () => {
    expect(() => validateTempoBpm(0.5)).not.toThrow();
    expect(() => validateTempoBpm(120)).not.toThrow();
  });

  it.each([0, -1, Number.NaN, Number.POSITIVE_INFINITY])(
    "rejects invalid tempo %s",
    (bpm) => {
      expect(() => validateTempoBpm(bpm)).toThrow(RangeError);
    },
  );

  it("accepts normalized track gain boundaries", () => {
    expect(() => validateTrackGain(0)).not.toThrow();
    expect(() => validateTrackGain(1)).not.toThrow();
  });

  it.each([-0.01, 1.01, Number.NaN])("rejects invalid track gain %s", (gain) => {
    expect(() => validateTrackGain(gain)).toThrow(RangeError);
  });

  it("accepts a standard time signature", () => {
    expect(() =>
      validateTimeSignature({ numerator: 4, denominator: 4 }),
    ).not.toThrow();
  });

  it.each([
    { numerator: 0, denominator: 4 },
    { numerator: 3.5, denominator: 4 },
    { numerator: 4, denominator: 3 },
    { numerator: 4, denominator: 0 },
  ])("rejects invalid time signature %o", (signature) => {
    expect(() => validateTimeSignature(signature)).toThrow(RangeError);
  });
});
