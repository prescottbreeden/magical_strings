# Repository Guidelines

## Project Structure & Module Organization

- `src/` houses the React client; group UI building blocks in `components/`, route screens in `pages/`, shared wrappers in `layouts/`, and helper logic in `utilities/`.
- `src/sass/` is the source of the compiled CSS; `yarn watch:sass` syncs changes into `src/index.css`.
- `src/assets/` and `public/` store static media and favicons; avoid importing from `public/` unless the asset must resolve at runtime.
- `tomls/` contains event data; keep schema changes mirrored in `tomls/update-json.js`.
- Tests live beside the code (`App.test.js`)—add new `*.test.js` files next to the module under test.

## Build, Test, and Development Commands

- `yarn install` bootstraps dependencies; rerun after pulling lockfile updates.
- `yarn start` launches `react-scripts` dev server with HashRouter paths.
- `yarn build` emits production assets into `build/`.
- `yarn test` runs Jest in watch mode; press `a` for all suites in CI-style runs.
- `yarn watch:sass` watches `src/sass/main.scss` and regenerates `src/index.css`.
- `yarn update-data` rebuilds JSON payloads from the TOML sources.

## Coding Style & Naming Conventions

- Use 2-space indentation and single quotes as enforced across `src/*.js`.
- Components remain PascalCase, hooks camelCase, SCSS partials kebab-case.
- Run `yarn prettier` before committing if Husky is unavailable; respect `printWidth: 80` and `trailingComma: es5`.

## Testing Guidelines

- Prefer Jest with React Testing Library helpers already bundled via `react-scripts test`.
- Mirror component names (`Header.test.js`) and focus on rendering plus behavior regressions.
- For coverage snapshots use `yarn test --coverage`; keep UI-critical paths above 80% statements.

## Commit & Pull Request Guidelines

- Follow the concise, imperative subject style seen in history (`build`, `updated events`); limit to ~60 chars.
- Reference linked issues in the body when applicable; detail user-facing impacts and screenshots for visual changes.
- Ensure Prettier and Jest pass locally before opening the PR; include steps for verifying SASS outputs if styles changed.

## Content & Data Updates

- When editing TOML schedules, regenerate JSON via `yarn update-data` and include both TOML and derived files in the diff.
- Document any new asset locations so marketing pages stay in sync with `public/` URLs.
