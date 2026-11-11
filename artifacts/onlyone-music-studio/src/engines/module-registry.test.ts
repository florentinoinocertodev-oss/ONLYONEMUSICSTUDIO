import { describe, expect, it } from "vitest";
import { ENGINE_MODULE_REGISTRY } from "./module-registry";

describe("registo de módulos", () => {
  it("identifica os oito módulos previstos", () => {
    expect(ENGINE_MODULE_REGISTRY.map(({ id }) => id)).toEqual([
      "audio",
      "voice",
      "instrument",
      "composition",
      "ai",
      "live-interaction",
      "project",
      "export",
    ]);
  });

  it("não apresenta módulos sem implementação como disponíveis", () => {
    expect(
      ENGINE_MODULE_REGISTRY.every(
        ({ availability }) => availability === "unavailable",
      ),
    ).toBe(true);
  });

  it("distingue a existência do contrato da implementação do motor", () => {
    expect(
      ENGINE_MODULE_REGISTRY.find(({ id }) => id === "audio")?.contractStatus,
    ).toBe("defined");
    expect(
      ENGINE_MODULE_REGISTRY
        .filter(({ id }) => id !== "audio")
        .every(({ contractStatus }) => contractStatus === "not-defined"),
    ).toBe(true);
  });
});
