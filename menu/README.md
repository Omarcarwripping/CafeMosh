# Café mosh web menu

`index.html` is the finished menu: one self-contained file (fonts from Google Fonts, all images inlined). Open it in any browser or host it as-is.

It is built from the printed cards (`20261009_HerbstKarte_2.ai` and `20260601_Menukarte_3.ai`).

## Change prices or items

1. Edit `src/data.py` (one line per item: name, price, description).
2. Run `python3 src/build.py`. It rewrites `index.html`.

`src/template.html` holds the layout, styles and script. `src/assets/` holds the logo and drawings taken from the print files.
