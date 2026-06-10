# Celigo Scripts Workspace

A lightweight JavaScript workspace for independent script files, organized for UAI-style maintenance and documentation.

## Project Structure

- `src/` — independent JavaScript scripts, each self-contained and unrelated to the others.
- `README.md` — workspace overview and usage guidance.
- `UAI_DOCUMENTATION.md` — UAI documentation conventions and workspace rules.
- `.gitignore` — standard ignore patterns.
- `package.json` — project metadata and helper commands.

## How to Use

1. Add a new script file under `src/`, for example `src/my-script.js`.
2. Keep each file self-contained and unrelated when appropriate.
3. Document the purpose and usage in the header comment of each script.
4. Run a script with `node src/<script-name>.js`.

## Example Commands

- `npm run start` — runs `src/example-script.js`
- `npm run list` — placeholder list command for workspace scripts

## UAI Documentation

See `UAI_DOCUMENTATION.md` for documentation conventions, source organization, and naming guidelines.
