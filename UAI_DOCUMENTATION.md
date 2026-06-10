# UAI Workspace Documentation

This workspace follows a UAI-friendly project layout designed for maintainability, independent script organization, and clear documentation.

## Goals

- Keep scripts in `src/` separated as independent units.
- Provide a clear entrypoint for new contributors.
- Maintain a lightweight project with minimal dependencies.

## Conventions

- Each file in `src/` should include a top-level header comment describing:
  - Purpose
  - Usage
  - Expected inputs/outputs
- Scripts should not rely on shared internal state unless explicitly intended.
- Add any new utility or shared code only when multiple scripts require it.
- Subprojects should document their own purpose, usage, and script layout.
- If the root workspace includes a nested Git repository, register it as a submodule-style gitlink. Track file-level changes inside the nested repository, then update the root workspace pointer when the nested repository commit changes.
- Files under `src/backup/` are source references. Keep them tracked, but do not reformat or rewrite them unless the task explicitly calls for changing the source reference.

## Adding Scripts

1. Create a new file under `src/`.
2. Add a descriptive comment header.
3. Keep dependencies explicit.
4. If a script is unrelated to others, do not force a shared module.
5. If a script is derived from a backup or source reference, make changes in the active script and leave the reference file untouched.

## Documentation Style

- Use plain language with actionable instructions.
- Keep examples short and precise.
- Avoid project-specific jargon when possible.
- Document the workspace in both `README.md` and `UAI_DOCUMENTATION.md`.
