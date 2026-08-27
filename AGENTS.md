# pi-theme-lumon

## Commands

- `npm run check` — types and lint.
- `npm test` — validates every file in `themes/` against the theme schema shipped
  by `@earendil-works/pi-coding-agent`.

## Rules

- A theme file name must match its `name` field. `npm test` enforces it.
- Every color token in `themes/*.json` must resolve to a hex value, a `vars`
  entry, a 256-color index, or `""`. `npm test` enforces it.
- Keep the palette anchored to the omarchy-lumon-theme colors in `README.md`.
  Only the wellness, alarm, and kier hues may fall outside the blue range.
- Verify a color change in a live pi session (`pi --theme themes/lumon.json
  --use-theme lumon`) before pushing. Tests check structure, not looks.
- Never switch branches in this checkout. Create a worktree under `_worktrees/`.
