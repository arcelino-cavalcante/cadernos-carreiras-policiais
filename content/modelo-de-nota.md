---
title: "📝 Modelo de nota"
tags:
  - modelo
---

Copie o bloco abaixo (a partir do `---`) para criar uma nota nova. Troque os campos em `MAIÚSCULO`.

> [!info] Dica
> Depois de criar a nota, adicione o link dela no **caderno-mestre** da disciplina (seção “Notas que eu criei”).

```markdown
---
title: "TÍTULO DO ASSUNTO"
tags:
  - NOME-DA-DISCIPLINA
  - TEMA
materia: "NOME DA DISCIPLINA"
concurso: "PMPE 2026 (Soldado)"
topico: "TÓPICO DO EDITAL"
status: estudando
dificuldade: 1
fonte: "Aula XX - NOME DA AULA"
criado: AAAA-MM-DD
atualizado: AAAA-MM-DD
---

# TÍTULO DO ASSUNTO

> [!abstract] Resumo em uma frase
> Escreva em uma frase o que este assunto resolve/ensina.

## 🎯 Objetivo
- O que eu preciso saber ao terminar este estudo.

## 📌 Conceitos-chave
- **Termo** — definição curta.

## 🧠 Explicação
Explique com as **suas palavras**. Use listas, tabelas e diagramas simples.

## 🔑 Regras / Fórmulas
- Regra ou fórmula 1
- Regra ou fórmula 2

## 🧩 Exemplos
**Exemplo 1.** (enunciado)
- Resolução passo a passo.

## ⚠️ Pegadinhas
- Erro comum / o que a banca costuma cobrar.

## ❓ Dúvidas
- [ ] Dúvida a resolver.

## 🔁 Revisão espaçada
| Data | Acertos | Observações |
| ---- | ------- | ----------- |
|      |         |             |

## 🔗 Ligações
- [[index|📕 Caderno da disciplina]]
- [[modelo-de-nota|📝 Modelo]]
```

## Campos do cabeçalho

| Campo | Obrigatório | Explicação |
| --- | --- | --- |
| `title` | sim | Título com acentuação correta. |
| `tags` | sim | Primeira tag = disciplina; demais = assuntos. |
| `materia` | sim | Nome da disciplina. |
| `concurso` | sim | Concurso a que pertence. |
| `topico` | não | Tópico do edital. |
| `status` | sim | `rascunho`, `estudando` ou `revisado`. |
| `dificuldade` | não | `1` a `5`. |
| `fonte` | não | Aula/PDF de origem. |
| `criado` / `atualizado` | não | Datas `AAAA-MM-DD`. |
