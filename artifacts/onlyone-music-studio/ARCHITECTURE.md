# Arquitectura

## Limites da F0.1-A

A interface React existente é uma camada de apresentação e não executa nem
simula reprodução de áudio. A F0.1-A acrescenta apenas um registo declarativo
dos módulos planeados. Não cria motores funcionais, não altera a interface e
não implementa persistência.

```text
src/
  engines/
    module-registry.ts       Identificadores e disponibilidade dos módulos
    module-registry.test.ts  Verificação do registo
  modules/
    audio/
      audio-contracts.ts     Contrato independente da interface
      audio-validation.ts    Validadores de parâmetros de áudio existentes
      audio-validation.test.ts
```

## Registo dos módulos

`engines/module-registry.ts` identifica AudioEngine, VoiceEngine,
InstrumentEngine, MusicCompositionEngine, AIEngine, LiveInteractionEngine,
ProjectEngine e ExportEngine. Todos estão marcados como indisponíveis. O campo
de estado do contrato apenas indica se existe um contrato TypeScript; não
representa capacidade operacional.

Neste estado, só o AudioEngine tem um contrato TypeScript definido. Os restantes
módulos não têm contratos detalhados nem implementações. Não há imports de React
ou APIs do navegador em `src/engines/`.

## Contrato do motor de áudio

`modules/audio/audio-contracts.ts` descreve uma futura fronteira para ciclo de
vida, pistas, volume, silêncio, agendamento de eventos, BPM, compassos e
encaminhamento de fontes e efeitos. O contrato não instancia um motor. Uma
implementação futura deverá controlar o próprio ciclo de áudio e não depender
das actualizações React para reproduzir som.

Não foram implementados AudioContext, AudioWorklet, captação de microfone,
MediaRecorder, IndexedDB ou exportação de áudio. Os validadores de BPM, ganho e
compasso que já existiam não validam um modelo de projecto.

## Tratamento de erros

O contrato de áudio inclui `AudioEngineError` e um conjunto limitado de códigos
de erro. É uma definição de tipos, não um mecanismo operacional. Quando as
capacidades correspondentes forem implementadas, erros de suporte e permissões
do navegador deverão ser comunicados explicitamente.
