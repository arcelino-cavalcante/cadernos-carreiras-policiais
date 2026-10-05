#!/usr/bin/env bash
#
# Configura o Obsidian para o vault "content/" deste projeto:
#   - baixa os plugins comunitários
#   - escreve as configurações, atalhos e templates automáticos
#
# Uso:  bash scripts/configurar-obsidian.sh
#
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
VAULT="$ROOT/content"
OBS="$VAULT/.obsidian"
PLUGINS_DIR="$OBS/plugins"
mkdir -p "$PLUGINS_DIR"
echo "Vault: $VAULT"

echo "==> Baixando plugins comunitários..."
python3 - <<'PY'
import json, os, subprocess, urllib.request
PLUGINS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)) if "__file__" in dir() else os.getcwd(), "")
PY

python3 - "$PLUGINS_DIR" <<'PY'
import json, os, subprocess, sys, urllib.request
plugins_dir = sys.argv[1]
repos = [
    "SilentVoid13/Templater",
    "zsviczian/obsidian-excalidraw-plugin",
    "Vinzent03/obsidian-git",
    "st3v3nmw/obsidian-spaced-repetition",
    "blacksmithgu/obsidian-dataview",
    "chhoumann/quickadd",
    "platers/obsidian-linter",
    "tgrosinger/advanced-tables-obsidian",
]
try:
    token = subprocess.check_output(["gh", "auth", "token"]).decode().strip()
except Exception:
    token = ""
headers = {"Accept": "application/vnd.github+json", "User-Agent": "obsidian-setup"}
if token:
    headers["Authorization"] = "Bearer " + token

def get(url):
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, timeout=120) as r:
        return r.read()

for repo in repos:
    try:
        rel = json.loads(get(f"https://api.github.com/repos/{repo}/releases/latest").decode())
        wanted = [a for a in rel["assets"] if a["name"] in ("manifest.json", "main.js", "styles.css") or a["name"].endswith(".css")]
        if not any(a["name"] == "manifest.json" for a in wanted):
            print("  pular (sem assets):", repo); continue
        tmp = "/tmp/obs_pl_" + repo.replace("/", "__")
        os.makedirs(tmp, exist_ok=True)
        for a in wanted:
            with open(os.path.join(tmp, a["name"]), "wb") as f:
                f.write(get(a["browser_download_url"]))
        pid = json.load(open(os.path.join(tmp, "manifest.json"), encoding="utf-8"))["id"]
        dest = os.path.join(plugins_dir, pid)
        os.makedirs(dest, exist_ok=True)
        for fn in os.listdir(tmp):
            os.replace(os.path.join(tmp, fn), os.path.join(dest, fn))
        print("  ok:", pid)
    except Exception as e:
        print("  FALHOU:", repo, e)
PY

echo "==> Escrevendo configurações..."

cat > "$OBS/community-plugins.json" <<'JSON'
[
  "templater-obsidian",
  "dataview",
  "quickadd",
  "obsidian-excalidraw-plugin",
  "obsidian-git",
  "obsidian-spaced-repetition",
  "obsidian-linter",
  "table-editor-obsidian"
]
JSON

cat > "$OBS/core-plugins.json" <<'JSON'
{
  "file-explorer": true, "global-search": true, "switcher": true, "graph": true,
  "backlink": true, "canvas": true, "outgoing-link": true, "tag-pane": true,
  "footnotes": false, "properties": true, "page-preview": true, "daily-notes": true,
  "templates": true, "note-composer": true, "command-palette": true, "slash-command": true,
  "editor-status": true, "bookmarks": true, "markdown-importer": false, "zk-prefixer": false,
  "random-note": false, "outline": true, "word-count": true, "slides": false,
  "audio-recorder": false, "workspaces": true, "file-recovery": true, "publish": false,
  "sync": false, "bases": true, "webviewer": false
}
JSON

cat > "$OBS/app.json" <<'JSON'
{
  "alwaysUpdateLinks": true, "newFileLocation": "current", "attachmentFolderPath": "anexos",
  "useMarkdownLinks": false, "showLineNumber": true, "readableLineLength": true,
  "strictLineBreaks": false, "showFrontmatter": true, "foldHeading": true, "foldIndent": true,
  "defaultViewMode": "source", "livePreview": true, "promptDelete": true, "trashOption": "local",
  "spellcheck": true, "spellcheckLanguages": ["pt-BR"]
}
JSON

cat > "$OBS/appearance.json" <<'JSON'
{ "accentColor": "#84a59d", "baseFontSize": 16, "theme": "obsidian" }
JSON

cat > "$OBS/templates.json" <<'JSON'
{ "folder": "templates" }
JSON

cat > "$OBS/hotkeys.json" <<'JSON'
{
  "templater-obsidian:create-new-note-from-template": [{ "modifiers": ["Mod"], "key": "N" }],
  "quickadd:runQuickAdd": [{ "modifiers": ["Mod", "Shift"], "key": "Q" }],
  "obsidian-spaced-repetition:srs-review-flashcards": [{ "modifiers": ["Mod", "Shift"], "key": "R" }],
  "global-search:open": [{ "modifiers": ["Mod", "Shift"], "key": "F" }],
  "switcher:open": [{ "modifiers": ["Mod"], "key": "O" }],
  "command-palette:open": [{ "modifiers": ["Mod"], "key": "P" }]
}
JSON

mkdir -p "$PLUGINS_DIR/templater-obsidian" "$PLUGINS_DIR/obsidian-git"

cat > "$PLUGINS_DIR/templater-obsidian/data.json" <<'JSON'
{
  "templates_folder": "templates",
  "templates_pairs": [["", ""]],
  "trigger_on_file_creation": true,
  "enable_system_commands": false,
  "user_scripts_folder": "",
  "enable_folder_templates": true,
  "folder_templates": [
    { "folder": "concursos", "template": "templates/Gerar nota de estudo.md" },
    { "folder": "concursos/pmpe-2026-soldado/lingua-portuguesa", "template": "templates/Gerar nota de estudo.md" },
    { "folder": "concursos/pmpe-2026-soldado/historia-de-pernambuco", "template": "templates/Gerar nota de estudo.md" },
    { "folder": "concursos/pmpe-2026-soldado/raciocinio-logico", "template": "templates/Gerar nota de estudo.md" },
    { "folder": "concursos/pmpe-2026-soldado/informatica", "template": "templates/Gerar nota de estudo.md" },
    { "folder": "concursos/pmpe-2026-soldado/direito-constitucional", "template": "templates/Gerar nota de estudo.md" },
    { "folder": "concursos/pmpe-2026-soldado/direitos-humanos-e-legislacao-extravagante", "template": "templates/Gerar nota de estudo.md" },
    { "folder": "concursos/pmpe-2026-soldado/redacao", "template": "templates/Gerar nota de estudo.md" }
  ],
  "enable_file_templates": false,
  "file_templates": [{ "regex": ".*", "template": "" }],
  "syntax_highlighting": true,
  "syntax_highlighting_mobile": false,
  "enabled_templates_hotkeys": [""],
  "startup_templates": [""]
}
JSON

cat > "$PLUGINS_DIR/obsidian-git/data.json" <<'JSON'
{
  "commitMessage": "caderno: {{date}}",
  "commitDateFormat": "YYYY-MM-DD HH:mm",
  "autoSaveInterval": 0, "autoPushInterval": 0, "autoPullInterval": 0,
  "autoPullOnBoot": true, "disablePush": false, "pullBeforePush": true,
  "syncMethod": "merge", "showStatusBar": true, "changedFilesInStatusBar": true,
  "refreshSourceControl": true
}
JSON

echo ""
echo "Pronto! Abra a pasta 'content/' como vault no Obsidian e, se pedir, ative os plugins comunitários."
