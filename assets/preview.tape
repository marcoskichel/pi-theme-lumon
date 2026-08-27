# Regenerate with: vhs assets/preview.tape  (needs vhs, ttyd, ffmpeg)
# Renders the committed demo session, so the screenshot never depends on a live model call.
# The GIF output is a scratch file: vhs only writes Screenshot frames while it is recording.

Output assets/.vhs-scratch.gif

Set Shell bash
Set FontSize 15
Set Width 1500
Set Height 1140
Set Padding 24
Set Margin 0
Set Theme { "name": "lumon", "background": "#12202e", "foreground": "#d6e2ee", "cursor": "#b4e4f6", "selection": "#2d4c64", "black": "#12202e", "red": "#e58080", "green": "#7fc8a9", "yellow": "#d9b477", "blue": "#6fb8e3", "magenta": "#8bc9eb", "cyan": "#b4e4f6", "white": "#d6e2ee", "brightBlack": "#4a6b80", "brightRed": "#efa0a0", "brightGreen": "#9ad9c0", "brightYellow": "#e8cd9a", "brightBlue": "#9dcae5", "brightMagenta": "#b1d8ee", "brightCyan": "#d1eef8", "brightWhite": "#f2fcff" }

Hide
Type "mkdir -p /tmp/lumon-macrodata && cp assets/demo-session.jsonl /tmp/lumon-demo.jsonl && clear" Enter
Sleep 1s
Type "pi --session /tmp/lumon-demo.jsonl --theme themes/lumon.json --use-theme lumon -ne -ns -np -nc" Enter
Sleep 10s
Show
Screenshot assets/preview.png
Sleep 3s
