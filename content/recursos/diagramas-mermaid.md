---
title: "🎨 Diagramas a partir de texto (Mermaid)"
tags:
  - recursos
  - obsidian
  - mermaid
---

# 🎨 Diagramas a partir de texto (Mermaid)

Você escreve **texto** e o Obsidian (e o site) transformam em **esquema**. É só abrir um bloco de código com a linguagem `mermaid`.

No Obsidian, use ` ```mermaid ` e escreva o diagrama. No site (Quartz) ele aparece igual.

> [!tip] Teste rápido
> Copie um exemplo abaixo, cole numa nota nova e veja o desenho aparecer.

## Fluxograma (flowchart)

```mermaid
flowchart TD
    A[Recebi uma sentença] --> B{É declarativa?}
    B -- Não --> C[Não é proposição]
    B -- Sim --> D{Admite só V ou F?}
    D -- Não --> C
    D -- Sim --> E[É proposição]
```

## Mapa mental (mindmap)

```mermaid
mindmap
  root((Raciocínio<br/>Lógico))
    Proposições
      Simples
      Composta
    Conectivos
      E / OU
      Negação
      Se... então
    Tabela-verdade
    Equivalências
      De Morgan
    Argumentação
      Válido
      Inválido
```

## Linha do tempo (timeline)

```mermaid
timeline
    title História da Lógica
    384 a.C. : Nasce Aristóteles
    300 a.C. : Formalização da lógica proposicional
    1854 : Boole e a álgebra booleana
    1879 : Frege e a lógica de 1ª ordem
```

## Sequência (argumento)

```mermaid
sequenceDiagram
    participant P as Premissas
    participant C as Conclusão
    P->>C: Todo A é B
    P->>C: Todo B é C
    C-->>P: Logo, todo A é C (válido)
```

## Estados (fluxo de revisão)

```mermaid
stateDiagram-v2
    [*] --> Rascunho
    Rascunho --> Estudando
    Estudando --> Revisado
    Revisado --> Estudando : revisão falhou
```

## Pizza e Gantt

```mermaid
pie title Onde cai mais em RLM
    "Lógica Proposicional" : 80
    "Análise Combinatória" : 15
    "Outros" : 5
```

```mermaid
gantt
    title Cronograma de revisão
    dateFormat  YYYY-MM-DD
    section RLM
    Proposições      :a1, 2026-10-05, 3d
    Tabela-verdade   :after a1, 3d
    Equivalências    : 5d
```

## Dicas

- Site para montar/testar Mermaid: <https://mermaid.live>
- **Excalidraw:** dá pra converter um bloco Mermaid em desenho à mão livre — paleta de comandos → **Excalidraw: Mermaid to Excalidraw**.
- Tipos suportados: fluxograma, mapa mental, linha do tempo, sequência, estados, classe (ER), pizza, Gantt, quadrantes e mais.

## 🔗 Veja também

- [[atalhos-e-plugins|⚙️ Atalhos e plugins]]
