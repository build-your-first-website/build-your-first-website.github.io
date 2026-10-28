# Places I want to visit

My website, published at https://build-your-first-website.github.io/.

This is the example website built in the book *Build your first website*. Each chapter's
finished state is tagged, from `part1-first-page` to `part7-a-site-you-can-look-after`.

## Where things are

- `src/pages`: one file for each page, plus templates for notes and recommendations
- `src/layouts` and `src/components`: the shared layout, header, footer and link card
- `src/content`: notes and recommendations, written in Markdown
- `src/scripts`: JavaScript and TypeScript for the browser
- `public`: the stylesheet, icon and sharing picture

## Commands

- `npm install`: install the tools, after cloning
- `npm run dev`: preview while editing
- `npm run build`: check and build the website into `dist`
- `npm run preview`: check the built website

Pushing to `main` publishes the website through GitHub Actions.

## Still to check

- The wishlist's status messages with a screen reader on Windows (Narrator)
