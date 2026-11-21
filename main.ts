import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const POEM = `The question is a hand held open.
Nothing is given till it is.
I knock. You answer.
Neither of us holds the latch alone\u2014
it turns between us.
A no keeps the door shut,
and that is why a yes opens it.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), POEM, 'utf8');
