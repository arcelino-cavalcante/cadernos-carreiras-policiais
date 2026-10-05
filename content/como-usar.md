---
title: "📖 Como usar o caderno"
tags:
  - guia
---

Este guia define o **padrão** dos seus cadernos. Siga sempre ele para que todo o material fique organizado, pesquisável e fácil de revisar.

## 1. Como o site está organizado

```
content/
├── index.md                      ← página inicial do site
├── como-usar.md                  ← este guia
├── modelo-de-nota.md             ← modelo (copie para criar notas)
├── concursos/
│   └── pmpe-2026-soldado/        ← um concurso
│       ├── index.md              ← página do concurso
│       ├── raciocinio-logico/
│       │   └── index.md          ← CADERNO-MESTRE da disciplina
│       ├── lingua-portuguesa/
│       │   └── index.md          ← CADERNO-MESTRE da disciplina
│       └── ... (informática, constitucional, etc.)
└── templates/                    ← modelos do Obsidian (não vão para o site)
```

- **Cada concurso** tem uma pasta dentro de `concursos/`.
- **Cada disciplina** tem uma pasta com um `index.md`: esse é o **caderno-mestre**.
- As **notas de assunto** ficam **na mesma pasta da disciplina**, ao lado do `index.md`.

## 2. O que é o caderno-mestre

O `index.md` de cada disciplina é o **caderno que serve para tudo**:

- Guarda o **mapa completo** do conteúdo (todas as aulas/tópicos, com caixinhas `- [ ]`).
- Marque `- [x]` conforme for concluindo o estudo.
- A seção **“🗂️ Notas que eu criei”** é o índice das suas notas. Cada nota nova entra lá como um link `[[nome-da-nota]]`.

## 3. O padrão de uma nota (sempre igual)

Toda nota segue a **mesma estrutura**, para você bater o olho e saber onde está cada coisa:

1. **Cabeçalho (`---`)** com os metadados — é o que alimenta a busca, as tags e as datas.
2. **Resumo em uma frase** — o essencial já no topo.
3. **Seções fixas** (abaixo), na ordem.

Use o [[modelo-de-nota|Modelo de nota]] como ponto de partida. As seções são:

| Seção | Para que serve |
| --- | --- |
| 🎯 Objetivo | O que você precisa dominar neste assunto |
| 📌 Conceitos-chave | Definições curtas (termo — significado) |
| 🧠 Explicação | Seu resumo com suas palavras |
| 🔑 Regras / Fórmulas | O que decorar / aplicar |
| 🧩 Exemplos | Exemplos resolvidos |
| ⚠️ Pegadinhas | Erros comuns e o que a banca cobra |
| ❓ Dúvidas | Pendências para resolver |
| 🔁 Revisão espaçada | Registro dos seus acertos por data |
| 🔗 Ligações | Links para outras notas e para o caderno-mestre |

## 4. Como criar uma nota nova (passo a passo)

> [!tip] Automático no Obsidian
> Dentro de uma pasta de disciplina, é só criar uma nota nova (`Cmd + N`): o **Templater** já aplica o padrão (data, matéria e seções). Veja [[atalhos-e-plugins]].

1. Vá até a pasta da disciplina (ex.: `raciocinio-logico/`).
2. Crie um arquivo `.md` com **nome curto e descritivo** (ex.: `equivalencias-logicas.md`).
3. Cole o conteúdo do [[modelo-de-nota|Modelo de nota]] e preencha o cabeçalho.
4. Escreva o conteúdo.
5. Abra o `index.md` da disciplina e adicione `- [[equivalencias-logicas|Equivalências Lógicas]]` na seção **“🗂️ Notas que eu criei”**.

> [!tip] Atalho no Obsidian
> Com o Obsidian aberto na pasta `content/`, você pode usar o modelo em `templates/` e a extensão **Templater** (ou o plugin nativo de Templates) para criar notas já formatadas com um atalho.

## 5. Convenções (para manter tudo padronizado)

- **Nomes de arquivo:** minúsculas, sem acento e com hífen. Ex.: `valor-logico-de-proposicoes-compostas.md`.
- **Título:** sempre com acentuação correta, dentro do cabeçalho (`title:`).
- **Tags:** use sempre a tag da disciplina (ex.: `raciocinio-logico`) + 1 ou 2 tags do assunto (ex.: `proposicoes`).
- **`status`:** `rascunho` → `estudando` → `revisado`.
- **`dificuldade`:** de `1` (fácil) a `5` (difícil).
- **`fonte`:** de onde veio (ex.: `Aula 03 - Proposição` ou `PDF - Tabela verdade`).
- **Datas:** formato `AAAA-MM-DD`.

## 6. Revisão espaçada (opcional, mas recomendado)

No fim de cada nota há uma tabela de revisões. Sugestão de intervalos: **1, 7 e 30 dias** após estudar.

| Data | Acertos | Observações |
| --- | --- | --- |
| 2026-10-05 | 8/10 | errei De Morgan |

## 7. Publicando (colocar no ar)

O site é reconstruído automaticamente ao enviar as mudanças para o GitHub:

```bash
cd ~/Documents/cadernos-carreiras-policiais
npx quartz sync
```

Depois de ~2 minutos, o site atualiza sozinho no endereço publicado.
