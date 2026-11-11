/**
 * Registo des módulos planeados. Este ficheiro descreve disponibilidade;
 * não instancia nem executa qualquer motor.
 */
export type EngineModuleId =
  | "audio"
  | "voice"
  | "instrument"
  | "composition"
  | "ai"
  | "live-interaction"
  | "project"
  | "export";

export type EngineAvailability = "unavailable" | "available";
export type EngineContractStatus = "defined" | "not-defined";

export interface EngineModuleRegistration {
  readonly id: EngineModuleId;
  readonly name: string;
  readonly availability: EngineAvailability;
  /** Indica apenas se existe um contrato TypeScript, não uma implementação. */
  readonly contractStatus: EngineContractStatus;
}

export const ENGINE_MODULE_REGISTRY = [
  {
    id: "audio",
    name: "AudioEngine",
    availability: "unavailable",
    contractStatus: "defined",
  },
  {
    id: "voice",
    name: "VoiceEngine",
    availability: "unavailable",
    contractStatus: "not-defined",
  },
  {
    id: "instrument",
    name: "InstrumentEngine",
    availability: "unavailable",
    contractStatus: "not-defined",
  },
  {
    id: "composition",
    name: "MusicCompositionEngine",
    availability: "unavailable",
    contractStatus: "not-defined",
  },
  {
    id: "ai",
    name: "AIEngine",
    availability: "unavailable",
    contractStatus: "not-defined",
  },
  {
    id: "live-interaction",
    name: "LiveInteractionEngine",
    availability: "unavailable",
    contractStatus: "not-defined",
  },
  {
    id: "project",
    name: "ProjectEngine",
    availability: "unavailable",
    contractStatus: "not-defined",
  },
  {
    id: "export",
    name: "ExportEngine",
    availability: "unavailable",
    contractStatus: "not-defined",
  },
] as const satisfies readonly EngineModuleRegistration[];
