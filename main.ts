import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

// The best advice I ever got, in one sentence.
const ENTRY = "Bea, the librarian who caught me slipping a book into my jacket, said if I wanted it that badly it was mine to borrow, not to steal, and thirty years on I have never kept one past its due date.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, ENTRY, "utf8");
chmodSync(target, 0o644);
// One sentence, 193 characters, no trailing newline.
