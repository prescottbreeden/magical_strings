# Magical Strings

Website for [Magical Strings](https://magicalstrings.com), the Celtic music ensemble founded by Philip and Pam Boulding in 1978. Built with React and Vite.

## Getting Started

```bash
yarn install
yarn start
```

The dev server runs at [http://localhost:5173](http://localhost:5173).

## Scripts

| Command             | Description                                               |
| ------------------- | --------------------------------------------------------- |
| `yarn start`        | Start the Vite dev server                                 |
| `yarn build`        | Build production assets to `build/`                       |
| `yarn test`         | Run Vitest test suites                                    |
| `yarn watch:sass`   | Watch `src/sass/main.scss` and compile to `src/index.css` |
| `yarn compile:sass` | One-time SASS compile                                     |
| `yarn update-data`  | Rebuild JSON data files from TOML sources                 |
| `yarn prettier`     | Format all JS, JSX, JSON, and MD files                    |

## Project Structure

```
src/
├── assets/          # Images and static media
├── components/      # Reusable UI components
├── constants/       # Generated JSON data (from TOML)
├── layouts/         # Page layout wrappers (Header, Footer)
├── pages/           # Route screens (Events, Albums, etc.)
├── sass/            # SCSS source files
└── utilities/       # Helper functions

tomls/
├── config-files/    # TOML source data (events, albums, classes)
├── create-data.js   # JSON output writer
├── helpers.js       # TOML parsing utilities
└── update-json.js   # Entry point for data generation
```

## Updating Event Data

Event listings, album data, and class info are managed as TOML files in `tomls/config-files/`. After editing a `.toml` file, regenerate the JSON:

```bash
yarn update-data
```

Both the TOML source and the generated JSON in `src/constants/` should be committed together.

## Styles

Styles are authored in SCSS under `src/sass/` and compiled to `src/index.css`. To watch for changes during development:

```bash
yarn watch:sass
```
