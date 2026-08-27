import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";

const SCHEMA_PATH = join(
	import.meta.dirname,
	"node_modules/@earendil-works/pi-coding-agent/dist/modes/interactive/theme/theme-schema.json",
);
const THEMES_DIR = join(import.meta.dirname, "themes");
const HEX = /^#[0-9a-f]{6}$/;

const schema = JSON.parse(readFileSync(SCHEMA_PATH, "utf-8"));
const required: string[] = schema.properties.colors.required;
const known = new Set<string>(Object.keys(schema.properties.colors.properties));
const themeFiles = readdirSync(THEMES_DIR).filter((f) => f.endsWith(".json"));

test("themes directory is not empty", () => {
	assert.ok(themeFiles.length > 0);
});

for (const file of themeFiles) {
	const theme = JSON.parse(readFileSync(join(THEMES_DIR, file), "utf-8"));
	const vars: Record<string, string | number> = theme.vars ?? {};

	test(`${file} names itself after the file`, () => {
		assert.equal(theme.name, file.replace(/\.json$/, ""));
		assert.ok(!theme.name.includes("/"));
	});

	test(`${file} defines every required color token`, () => {
		for (const token of required)
			assert.ok(token in theme.colors, `missing ${token}`);
	});

	test(`${file} defines no unknown color token`, () => {
		for (const token of Object.keys(theme.colors))
			assert.ok(known.has(token), `unknown ${token}`);
	});

	test(`${file} resolves every color value`, () => {
		const resolve = (value: string | number, source: string) => {
			if (typeof value === "number")
				return assert.ok(value >= 0 && value <= 255, source);
			if (value === "" || HEX.test(value)) return;
			assert.ok(value in vars, `${source} references undefined var "${value}"`);
			assert.ok(
				typeof vars[value] === "number" || HEX.test(vars[value] as string),
				source,
			);
		};
		for (const [token, value] of Object.entries(theme.colors))
			resolve(value as string, token);
		for (const [name, value] of Object.entries(vars))
			resolve(value, `vars.${name}`);
	});

	test(`${file} uses hex colors for the export section`, () => {
		for (const [key, value] of Object.entries(theme.export ?? {})) {
			assert.ok(HEX.test(value as string), `export.${key}`);
		}
	});
}
