# ONLYONE MUSIC STUDIO

O ONLYONE MUSIC STUDIO é um projecto de estúdio musical no navegador,
concebido para manter o controlo criativo nas mãos de quem compõe.

Esta entrega está limitada à F0.1-A: estrutura técnica, contratos TypeScript,
registo de módulos e documentação. Não disponibiliza reprodução ou gravação de
áudio, instrumentos, assistência de IA, persistência de projectos ou exportação.
A interface e os estilos existentes não foram alterados nesta fase.

## Requisitos

- Node.js 24 (disponibilizado pelo workspace)
- pnpm (disponibilizado pelo workspace)

## Executar

O workflow do Replit inicia o servidor Vite com a porta e o caminho necessários.
Para executar através do workspace:

```sh
pnpm --filter @workspace/onlyone-music-studio run dev
```

## Verificar

```sh
pnpm --filter @workspace/onlyone-music-studio run typecheck
pnpm --filter @workspace/onlyone-music-studio run test
pnpm --filter @workspace/onlyone-music-studio run build
```

## Estado actual

- O contrato TypeScript do futuro AudioEngine está definido, mas o motor está
  indisponível.
- O registo identifica os oito módulos planeados como indisponíveis.
- Existem testes para o registo e para validadores de parâmetros de áudio já
  presentes; não há validação do modelo de projecto nesta fase.
- Não foram adicionadas dependências nesta entrega.

Consulte [ARCHITECTURE.md](./ARCHITECTURE.md), o roteiro oficial
[ROADMAP.md](./ROADMAP.md), [TECHNICAL_DECISIONS.md](./TECHNICAL_DECISIONS.md)
e [TESTING.md](./TESTING.md).
