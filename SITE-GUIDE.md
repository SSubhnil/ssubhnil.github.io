# Site guide

How this site is built, how it should look, and how to change it. Written for anyone (or any coding agent) working on the repo.

## Stack

- [Astro](https://astro.build) static site, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.
- Blog posts are Markdown or MDX in `src/content/blog/`. Maths uses KaTeX (`$...$` inline, `$$...$$` display). Code blocks are highlighted by Shiki in both themes.
- No CSS framework. All styles are in `src/styles/global.css` plus a scoped `<style>` block in each component.

## Commands

```sh
npm install        # once
npm run dev        # local preview at http://localhost:4321, hot reload
npm run build      # production build into dist/ (drafts excluded)
npm run drafts     # build including drafts, to check a draft post
```

## Files you will edit most

| What | Where |
|---|---|
| Name, description, open-to-roles line, social links (GitHub, LinkedIn, Google Scholar, Hugging Face, email) | `src/config.ts` |
| Research and project entries (home page "Selected work" and the research page) | `src/data/research.ts` |
| CV page content | `src/pages/cv.astro` (the arrays at the top) |
| Blog posts | `src/content/blog/*.mdx` |
| "Coming soon" entries under Writing | `src/data/upcoming.ts` (remove an entry once its post is published) |
| Blog images | `public/images/blog/<post-name>/` |
| Profile photo | `public/images/profile.jpg`, portrait 4:5 (currently 800×1000). Shown beside the intro on the home page. |
| CV PDF (optional) | `public/cv.pdf`. A "Download PDF" link appears on the CV page automatically. |

A link in `src/config.ts` with an empty `url` is hidden everywhere.

## Writing a post

1. Write drafts in `src/content/blog/_drafts/` (git-ignored, so drafts never reach the public repo). To publish, move the file up to `src/content/blog/my-post-slug.mdx`; the file name becomes the URL `/blog/my-post-slug/`.
2. Front matter:

   ```yaml
   ---
   title: "Post title"
   description: "One or two sentences shown in the post list and in search results."
   date: 2026-12-01
   tags: [world models, RL]
   draft: true
   ---
   ```

3. Keep `draft: true` while writing. Drafts never appear on the site, not even in `npm run dev`. To check one, run `npm run drafts` then `npx astro preview`.
4. Figures:

   ```html
   <figure>
     <img src="/images/blog/my-post-slug/figure.png" alt="What the figure shows" />
     <figcaption>Caption text.</figcaption>
   </figure>
   ```

   Figures get a white backing so matplotlib PNGs read well in dark mode. Export at 2x width (about 1600 px).
5. Set `draft: false`, remove its entry from `src/data/upcoming.ts`, and push to `main` to publish. The RSS feed (`/rss.xml`) and sitemap update on their own.

## Design

The look is dark by default with a light theme on a switch in the header. The choice is saved in the browser.

**Colour.** Defined once as CSS variables in `global.css`.

| Token | Dark | Light | Use |
|---|---|---|---|
| `--bg` | `#0f1626` | `#f5f7fa` | Page background (deep ink blue, not black) |
| `--surface` | `#151e31` | `#ffffff` | Raised areas, if ever needed |
| `--rule` | `#253149` | `#dbe1ea` | Hairlines between items |
| `--text` | `#e3e7ef` | `#18202f` | Body text |
| `--muted` | `#98a3b7` | `#586378` | Dates, venues, captions |
| `--teal` | `#6fd0c3` | `#16796e` | Links; continuations that reach the answer |
| `--amber` | `#f0a257` | `#b25f17` | The failing step only; used very sparingly |

Teal and amber carry meaning from the rollout plots in the probes paper. Keep amber for "this is where it fails" and draft markers; don't use it as decoration.

**Type.**
- Literata (serif) for body text and long reading. It sits well next to KaTeX maths.
- Schibsted Grotesk (sans) for headings, navigation, dates, captions and other interface text.
- JetBrains Mono only inside code.
- Body is 18 px with line height 1.7. Text columns are capped at 40rem (about 70 characters).

**Layout.** Single column, left aligned, generous white space. The page container is 60rem; text inside it stays at 40rem. Items are separated by hairlines, not cards or shadows.

**The one bold element** is the rollout-tree illustration on the home page (`src/components/RolloutTree.astro`): a reasoning trace with continuations sampled from each step, drawn once on page load. Everything else stays quiet. It is generated at build time from a fixed seed, so it is identical on every build. To change its shape, edit `STEPS`, `PIT` and `K` at the top of the component.

**Rules that keep it neat.**
- No all-caps labels, no icon rows, no badges, no stat cards, no gradients.
- No animation other than the hero drawing in (and it is off for people who set reduced motion).
- Links are plain text with an underline.
- No em dashes in copy.
- Every page must work at 375 px wide and in both themes. Check before pushing.

## Pages

| URL | File |
|---|---|
| `/` | `src/pages/index.astro` |
| `/research/` | `src/pages/research.astro` |
| `/blog/` and `/blog/<slug>/` | `src/pages/blog/` |
| `/cv/` | `src/pages/cv.astro` (has a print stylesheet; "Print this page" saves a clean PDF) |
| `/rss.xml` | `src/pages/rss.xml.ts` |

## GitHub profile README

`github-profile/README.md` is a draft for the profile page at github.com/SSubhnil. To use it, create a public repository named exactly `SSubhnil` and put this file in it as `README.md`. It isn't part of the website build.

## One-time GitHub settings

- Repository Settings → Pages → Source must be **GitHub Actions**.
