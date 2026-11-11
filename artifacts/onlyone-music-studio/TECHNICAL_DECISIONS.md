# Decisões técnicas

## React, TypeScript e Vite

Manter a estrutura React/Vite existente e o TypeScript em modo rigoroso. A
F0.1-A não altera a configuração nem introduz uma segunda framework.

## Contratos sem motores operacionais

Os contratos definem fronteiras futuras, não funcionalidades. O registo de
módulos mantém todos os motores indisponíveis e separa o estado do contrato do
estado da implementação.

O contrato de áudio permanece independente da interface. Não deve instanciar
AudioContext nem sugerir que o processamento de áudio está disponível.

## Sem novas dependências

Não foram adicionadas dependências na F0.1-A. A configuração e as dependências
existentes foram preservadas.

## Sem alterações visuais

A homepage, os estilos, os componentes visuais e a estrutura da página foram
mantidos sem alterações. A identidade visual será tratada numa fase própria.

## Fases independentes

A F0.1-A não autoriza a F0.1-B nem outras fases. A validação efectiva do modelo
de projecto pertence à F0.1-C e não foi iniciada nesta entrega.

## Restrições das APIs do navegador

A reprodução de áudio requer uma acção explícita do utilizador, a captação de
microfone depende de permissões e a latência varia conforme o navegador e o
dispositivo. Estas restrições serão tratadas quando as funcionalidades forem
especificadas e autorizadas; não são funcionalidades da F0.1-A.
