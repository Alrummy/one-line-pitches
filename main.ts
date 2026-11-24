const fs = require('fs');
const path = require('path');

// Angle: the agent is so fast and self-sufficient it does the whole job — coding, entering the bounty, and paying you out — before your coffee cools.
const text = 'Build your first AI agent this weekend: it writes the code, enters the bounty itself, and sends you the winnings before your coffee gets cold.';
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), text + '\n');
