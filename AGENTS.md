# Agent guide

Read [README.md](README.md) once at the start of a task to understand this generated app, available commands, and where version-locked WireJS docs live.

Do not rely on WireJS knowledge from another project, branch, npm version, or web search unless the user asks. Prefer the installed package READMEs under `node_modules`, especially:

- `node_modules/wirejs-resources/README.md`
- `node_modules/wirejs-dom/README.md`
- `node_modules/wirejs-scripts/README.md`

If a README is not at the expected path, locate it with `require.resolve`, for example:

```sh
node -e "console.log(require.resolve('wirejs-resources/package.json').replace(/package\.json$/, 'README.md'))"
node -e "console.log(require.resolve('wirejs-dom/package.json').replace(/package\.json$/, 'README.md'))"
node -e "console.log(require.resolve('wirejs-scripts/package.json').replace(/package\.json$/, 'README.md'))"
```

When testing with `npm run start` or `npm run start:public`, run the process in the background and explicitly stop it afterwards.

For normal app changes, start in:

- `src/ssg/` for static routes
- `src/ssr/` for server-rendered routes
- `src/components/` and `src/layouts/` for shared DOM/layout code
- `api/` for API/resources code
- `static/` for public static assets
