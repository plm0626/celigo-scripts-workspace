/**
 * list-scripts.js
 *
 * Purpose:
 *   Lists JavaScript files that live under workspace `src/` folders.
 *
 * Usage:
 *   node scripts/list-scripts.js
 *
 * Expected inputs:
 *   Reads the local workspace tree and skips Git metadata and dependencies.
 *
 * Expected outputs:
 *   Prints one relative script path per line.
 */

import { readdirSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

const SKIPPED_DIRECTORIES = new Set(['.git', 'node_modules'])
const scripts = []

const isWorkspaceScript = (path) => {
  return path.endsWith('.js') && path.split(sep).includes('src')
}

const walk = (directory) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!SKIPPED_DIRECTORIES.has(entry.name)) {
        walk(join(directory, entry.name))
      }
      continue
    }

    if (entry.isFile()) {
      const path = join(directory, entry.name)
      if (isWorkspaceScript(path)) {
        scripts.push(relative(process.cwd(), path))
      }
    }
  }
}

walk(process.cwd())

for (const script of scripts.sort()) {
  console.log(script)
}
