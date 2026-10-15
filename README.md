# CafeMosh

The Café mosh menu as a React + Vite web app, in the style of the printed menus (Herbst & Winter, Coffee & More, Drinks, Classics, Delights), with search and a dark version.

## Run

```sh
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run preview  # serve the build
```

## Change items or prices

Everything on the menu lives in `src/data/menu.ts`. Edit a name, price or description there and the page updates.

- Layout and behaviour: `src/App.tsx`
- Styles and colors: `src/index.css`
- Logo and drawings (taken from the print files): `src/assets/`
