# Testes e verificações

## Comandos automatizados

Executar a partir da raiz do workspace:

```sh
pnpm --filter @workspace/onlyone-music-studio run typecheck
pnpm --filter @workspace/onlyone-music-studio run test
pnpm --filter @workspace/onlyone-music-studio run build
pnpm run typecheck
```

Os testes do registo verificam a lista de módulos, a indisponibilidade de todos
os motores e a distinção entre contrato definido e implementação disponível. Os
testes de validadores de BPM, ganho e compasso já existiam; não validam o modelo
de projecto.

## Limites dos testes

Estes comandos não verificam reprodução de áudio, permissões do microfone,
gravação, persistência, exportação ou latência em tempo real. A validação do
modelo de projecto pertence à F0.1-C e não foi iniciada.

## Resultados desta entrega

- `pnpm --filter @workspace/onlyone-music-studio run typecheck` — passou.
- `pnpm --filter @workspace/onlyone-music-studio run test` — passou; 2 ficheiros
  de teste e 17 testes.
- `PORT=18113 BASE_PATH=/ pnpm --filter @workspace/onlyone-music-studio run build`
  — passou; Vite 7.3.7.
- `pnpm run typecheck` — passou para as bibliotecas e os artefactos do
  workspace.
- Pesquisa de imports de React e APIs do navegador em `src/engines/` — sem
  ocorrências.
- Pesquisa de uso de Zod em `src/` — sem ocorrências.
- Pré-visualização no navegador — carregou sem erros da aplicação; a homepage
  foi mantida sem alterações.

Estes resultados não validam reprodução de áudio, gravação, persistência,
exportação nem o modelo de projecto. A F0.1-B não foi iniciada.
