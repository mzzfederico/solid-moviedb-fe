# TMDB + SolidStart

Everything you need to build a Solid project, powered by [`solid-start`](https://start.solidjs.com);

## Notes during experimentation

- Went from using `routeData()` with a `createResource()` to using `createServerData$` as the former is run on both client and server, but we want to keep our API keys private.
- API keys are put in a .env file as usual, and Vite wants them prefixed with `VITE_`.

## Developing

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```