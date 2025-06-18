const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '..', 'movies.txt');
const outputPath = path.join(__dirname, '..', 'movies.ts');

const lines = fs.readFileSync(inputPath, 'utf-8').split(/\r?\n/);

const movies = [];
for (let i = 0; i < lines.length; i += 2) {
  const titleLine = lines[i];
  const detailLine = lines[i + 1];
  if (!titleLine || !detailLine) continue;
  const titleMatch = titleLine.match(/^(\d+)\.\s*(.+)$/);
  if (!titleMatch) continue;
  const id = parseInt(titleMatch[1], 10);
  const title = titleMatch[2].trim();

  const detailMatch = detailLine.match(/^\((\d{4}),\s*(.*?)\)(?:\s*\((.*)\))?$/);
  if (!detailMatch) continue;
  const year = parseInt(detailMatch[1], 10);
  const director = detailMatch[2].trim();
  const cast = detailMatch[3] ? detailMatch[3].split(/,\s*/) : [];

  movies.push({ id, title, year, director, cast });
}

if (movies.length < 500) {
  console.error(`Expected at least 500 movies, got ${movies.length}`);
  process.exit(1);
}

const out = `export interface Movie {\n` +
  `  id: number;\n` +
  `  title: string;\n` +
  `  year: number;\n` +
  `  director: string;\n` +
  `  cast: string[];\n` +
  `}\n\n` +
  `export const movies: Movie[] = ${JSON.stringify(movies, null, 2)};\n`;

fs.writeFileSync(outputPath, out);
console.log(`Wrote ${movies.length} movies to ${outputPath}`);
