# Portfolio

Personal portfolio site — landing, project showcase, and a short
"about me" page.

**Live:** https://jakub-jurkian-portfolio.vercel.app

---

## Stack

- **Framework:** Next.js 16 (App Router, React Server Components)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (`text-balance`, `text-pretty`,
  responsive type scale)
- **Font:** Inter via `next/font` (`latin` + `latin-ext` for Polish
  diacritics)
- **Hosting:** Vercel

---

## Notes on the build

- Typography follows a modular scale tuned for `clamp()`-based hero
  headings, denser body text (17–18px), and tabular numerals on the
  timeline dates.
- No client-side state — every page is a Server Component.
- Images are local `.webp` assets served through `next/image` with
  blur placeholders.

---

## Local development

```bash
git clone https://github.com/jakub-jurkian/portfolio.git
cd portfolio
npm install
npm run dev
```

Open http://localhost:3000.

---

## License

MIT
