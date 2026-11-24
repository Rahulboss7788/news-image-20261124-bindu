// news-image-20261124 — entrypoint (Node 22, standard library only).
//
// Writes the front-page image for Tuesday 24 November 2026 to the output
// directory. The image is shipped in this repository as entry.png, rendered
// from page.html; the program reads it and writes it out, so it needs no
// network and every run produces byte-identical output.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const image = readFileSync(join(here, "entry.png"));
writeFileSync(join(outDir, "entry.png"), image);
// Read-back self-check: the output must be the same valid PNG, within the
// competition's size cap, or the run fails loudly instead of passing on a
// broken copy.
const written = readFileSync(join(outDir, "entry.png"));
const pngSig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!written.equals(image)) throw new Error("self-check failed: output differs from entry.png");
if (!written.subarray(0, 8).equals(pngSig)) throw new Error("self-check failed: not a PNG");
if (written.length > 1048576) throw new Error("self-check failed: over 1 MiB");
console.log(`Wrote ${image.length} bytes to ${join(outDir, "entry.png")} (self-check passed)`);
