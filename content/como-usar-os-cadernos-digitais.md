---
title: "Como usar os cadernos digitais"
description: "Como navegar, estudar e criar suas notas no caderno digital."
tags: [guia, inicio]
publish: true
---

O site foi organizado para você chegar ao conteúdo em três passos:

1. **Escolha um concurso** na seção [[concursos/index|Concursos]].
2. **Escolha uma disciplina** na página do concurso. Cada matéria abre seu próprio caderno.
3. **Estude pelo caderno da disciplina**: siga os assuntos na ordem e escreva suas anotações sob cada título.

> [!tip] Começar agora
> [[concursos/index|Ver concursos →]]

## Seu fluxo de estudo

1. Abra o caderno da disciplina e siga os assuntos na ordem.
2. Escreva suas anotações sob cada título: conceito, regra, exemplo, dúvida.
3. Quando um caso isolado precisar de nota própria, crie uma **nota separada** e linke aqui no caderno.
4. Na revisão, registre o que ainda precisa de atenção.

> [!tip] Captura rápida no Obsidian
> Dentro da pasta da disciplina, pressione `Cmd/Ctrl + N`. O Templater escolhe o modelo da matéria; o nome do arquivo vira o título da nota.

## Modelos por disciplina

- **Direito Constitucional / Direitos Humanos:** regra, aplicação, exceção e questão.
- **História de Pernambuco:** sequência, contexto e consequência.
- **Português / Redação:** aplicação, exemplo e erro a evitar.
- **Raciocínio Lógico / Informática:** explicação livre e exercício resolvido.

Você não precisa preencher todas as seções. Uma nota curta que ajude a lembrar é melhor que uma nota vazia e perfeita.

## Revisão espaçada

Use as caixas como lembretes para rever no dia seguinte, em 7 dias e em 30 dias. O campo `status` pode ser `estudando`, `revisar` ou `dominado`.

## 🎨 Código de cores das notas

Use sempre as **mesmas cores** para o cérebro fixar mais rápido. A caixa é escrita assim: `> [!tipo] Título`.

| Cor | Tipo | Use para | Digite |
| --- | --- | --- | --- |
| 🔵 Azul | `info` | informação, definição | `> [!info]` |
| 🟦 Ciano | `abstract` | resumo do assunto | `> [!abstract]` |
| 🟢 Verde | `tip` | dica, macete, bizu | `> [!tip]` |
| 🟡 Âmbar | `warning` | atenção, cuidado | `> [!warning]` |
| 🔴 Vermelho | `danger` | pegadinha, erro comum | `> [!danger]` |
| 🟣 Roxo | `example` | exemplo, questão resolvida | `> [!example]` |
| ⚪ Cinza | `quote` | citação de lei, fonte | `> [!quote]` |

> [!tip] Macete de revisão
> Quanto mais consistente você for com as cores, mais o padrão "salta aos olhos" na hora de revisar.

## Publicar

O vault é `content/`. O Quartz publica as notas depois que as mudanças chegam ao GitHub. As pastas `.obsidian`, `templates/` e `recursos/` ficam **fora do site** (só no seu Obsidian).
