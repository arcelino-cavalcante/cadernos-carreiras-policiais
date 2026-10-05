# 📚 Cadernos Digitais · Carreiras Policiais

Cadernos de estudo em Markdown (estilo Obsidian), publicados como site com o
[Quartz](https://quartz.jzhao.xyz). Feitos para estudar de qualquer lugar.

🌐 **Site publicado:** https://arcelino-cavalcante.github.io/cadernos-carreiras-policiais/

## Como está organizado

```
content/
├── index.md                  ← página inicial
├── como-usar.md              ← guia do PADRÃO das notas
├── modelo-de-nota.md         ← modelo para copiar
├── concursos/
│   └── pmpe-2026-soldado/
│       ├── index.md
│       ├── raciocinio-logico/
│       │   ├── index.md      ← CADERNO-MESTRE da disciplina
│       │   └── *.md          ← notas de assunto
│       └── ... (outras matérias)
└── templates/                ← modelo do Obsidian (fora do site)
```

- **Caderno-mestre** = o `index.md` de cada disciplina, com o mapa de todo o conteúdo.
- **Nota de assunto** = arquivo `.md` na pasta da disciplina, seguindo o padrão documentado em `content/como-usar.md`.
- **Nova matéria/concurso** = crie as pastas e um `index.md`.

## Como criar uma nota nova

1. Copie o conteúdo de `content/modelo-de-nota.md` (ou use o arquivo em `templates/` no Obsidian).
2. Salve na pasta da disciplina com nome curto, minúsculo e com hífen (ex.: `equivalencias-logicas.md`).
3. Preencha o cabeçalho e escreva.
4. Adicione o link da nota no caderno-mestre (`index.md`) na seção **“Notas que eu criei”**.

## Como testar localmente

```bash
npm ci
npx quartz build --serve
```

Abra http://localhost:8080

## Como publicar (colocar no ar)

```bash
npx quartz sync
```

O GitHub Actions reconstrói o site automaticamente a cada envio para a branch
`main` (veja `.github/workflows/deploy.yml`). Em ~2 minutos o site é atualizado.

## PDFs das aulas

Os PDFs baixados da plataforma ficam **na pasta local**, fora deste repositório
(`~/Documents/PMPE 2026 - Raciocinio Logico - PDFs`), e não são publicados.
