import os
from pathlib import Path

POEM = """The question is a hand held open.
Nothing is given till it is.
I knock. You answer.
Neither of us holds the latch alone—
it turns between us.
A no keeps the door shut
but leaves the asking mine."""

out = Path(os.environ.get("MAKEFUN_OUTPUT_DIR", "/output")) / "entry.txt"
out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(POEM, encoding="utf-8")
