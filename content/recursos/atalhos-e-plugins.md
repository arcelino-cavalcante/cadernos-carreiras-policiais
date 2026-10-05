---
title: "⚙️ Atalhos e plugins"
tags:
  - recursos
  - obsidian
---

# ⚙️ Atalhos e plugins

Este vault do **Obsidian** está configurado para escrever rápido e manter o padrão das notas. Abra a pasta `content/` como vault.

## ⌨️ Atalhos principais

| Atalho | Ação |
| --- | --- |
| `Ctrl/Cmd + N` | **Nova nota a partir do template** (já vem com o padrão) |
| `Ctrl/Cmd + O` | Buscar/abrir nota rapidamente (Quick switcher) |
| `Ctrl/Cmd + P` | Paleta de comandos (tudo do Obsidian) |
| `Ctrl/Cmd + Shift + F` | Busca global em todas as notas |
| `Ctrl/Cmd + Shift + Q` | QuickAdd (captura rápida) |
| `Ctrl/Cmd + Shift + R` | Revisar flashcards (revisão espaçada) |
| `Ctrl/Cmd + E` | Alternar edição / leitura |
| `Ctrl/Cmd + ,` | Configurações |

> [!tip] Novo em pastas de disciplina
> Ao criar uma nota **dentro de uma pasta de disciplina**, o **Templater** aplica o padrão automaticamente (via “Folder Templates”). É só começar a escrever.

## 🧩 Plugins instalados

| Plugin | Para que serve |
| --- | --- |
| **Templater** | Aplica o modelo padrão sozinho, com data e matéria automáticas. |
| **Excalidraw** | Desenhar esquemas à mão e converter Mermaid em desenho. |
| **Obsidian Git** | Sincronizar e publicar o site de dentro do Obsidian. |
| **Spaced Repetition** | Flashcards e revisão espaçada. |
| **Dataview** | Painéis e listas automáticas (ex.: notas por status). |
| **QuickAdd** | Captura rápida de ideias com um atalho. |
| **Linter** | Formata a nota no padrão (ative as regras em Configurações → Linter). |
| **Advanced Tables** | Editar tabelas usando `Tab` e `Enter`. |

## ✍️ Modelos disponíveis

- `templates/Gerar nota de estudo.md` — **automático** (usado pelas pastas de disciplina).
- `templates/Nova nota (com perguntas).md` — pergunta título, tag e matéria.
- `templates/modelo-de-nota.md` — versão “crua”, para copiar e colar.

## 🚀 Publicar o site pelo Obsidian

1. Abra a **paleta de comandos** (`Cmd + P`).
2. Rode **Git: Commit and sync**.
3. Em ~2 minutos o site atualiza sozinho.

> [!warning] Se o Obsidian Git não achar o repositório
> O Git fica na pasta **pai** (`cadernos-carreiras-policiais`). Se o plugin reclamar, mude a opção **Advanced → Custom base path** para `..` (ou abra o vault como a pasta do projeto).

## 🔗 Veja também

- [[diagramas-mermaid|🎨 Diagramas a partir de texto (Mermaid)]]
- [[como-usar|📖 Como usar o caderno]]
