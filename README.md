# Celigo Scripts Workspace

A lightweight JavaScript workspace for independent script files, organized for UAI-style maintenance and documentation.

## Project Structure

- `src/` — independent JavaScript scripts, each self-contained and unrelated to the others.
- `scripts/` — lightweight workspace helper commands.
- `setup_woo_export_for_ns_sales_order/` — tracked WooCommerce-to-NetSuite setup subproject.
- `README.md` — workspace overview and usage guidance.
- `UAI_DOCUMENTATION.md` — UAI documentation conventions and workspace rules.
- `.gitignore` — standard ignore patterns.
- `package.json` — project metadata and helper commands.

## How to Use

1. Add a new script file under `src/`, for example `src/my-script.js`.
2. Keep each file self-contained and unrelated when appropriate.
3. Document the purpose and usage in the header comment of each script.
4. Run a script with `node src/<script-name>.js`.
5. Run subproject scripts from their own directory when a script has subproject-specific context.

## Example Commands

- `npm run start` — runs `src/example-script.js`
- `npm run list` — lists JavaScript files under workspace `src/` folders

## Subprojects

The `setup_woo_export_for_ns_sales_order/` directory is also a standalone Git repository and is registered from the root workspace as a submodule-style gitlink. Make code and documentation changes inside the subproject repo, then update the root workspace pointer when the subproject commit changes.

## UAI Documentation

See `UAI_DOCUMENTATION.md` for documentation conventions, source organization, and naming guidelines.
