# The Delta — your environmental journalism site

A fast, Google-friendly blog for your writing on Bangladeshi environmental
issues and policy. You write articles in a visual editor (like WordPress),
they publish automatically, and the whole thing is free to host.

**Built with:** Astro (static site, great for search engines) · Sveltia CMS
(the visual editor at `/admin`) · Netlify (free hosting + a free web address).

---

## What you need (all free)

1. A **GitHub** account → https://github.com/signup
2. A **Netlify** account → https://app.netlify.com/signup (sign up *with GitHub* — easiest)

That's it. No monthly cost.

---

## Step 1 — Put the project on GitHub

1. Create a new, empty repository on GitHub (e.g. named `the-delta`). Keep it
   **public** or private — either works.
2. Upload this whole folder to that repository. The simplest way:
   - On your new repo's page, click **“uploading an existing file”**.
   - Drag in everything **except** the `node_modules` and `dist` folders
     (you don't have those yet unless you ran the site locally — if you see
     them, skip them).
   - Commit.

> Prefer the command line? From inside this folder:
> ```
> git init && git add . && git commit -m "first commit"
> git branch -M main
> git remote add origin https://github.com/YOUR_USERNAME/the-delta.git
> git push -u origin main
> ```

---

## Step 2 — Deploy on Netlify (free site + free address)

1. Go to https://app.netlify.com → **Add new site** → **Import an existing project**.
2. Choose **GitHub**, authorise it, and pick your `the-delta` repository.
3. Netlify auto-detects the settings (it reads `netlify.toml`). Just click
   **Deploy**.
4. In about a minute you'll have a live site at something like
   `https://random-name-12345.netlify.app`.
5. Rename it to something nicer: **Site configuration → Change site name**,
   e.g. `the-delta` → your site becomes `https://the-delta.netlify.app`.

Your site is now LIVE. 🎉

---

## Step 3 — Turn on the visual editor (one-time, ~5 minutes)

This lets you log in at `yoursite.netlify.app/admin` and write articles in a
nice editor. It uses your GitHub login — no separate password to manage.

**3a. Tell the editor which repo to use**

- Open `public/admin/config.yml` and change this line:
  ```
  repo: YOUR_GITHUB_USERNAME/YOUR_REPO_NAME
  ```
  to your real repo, e.g. `repo: yourname/the-delta`. Commit the change.

**3b. Create a GitHub OAuth app**

1. GitHub → click your avatar → **Settings** → **Developer settings**
   (bottom of the left menu) → **OAuth Apps** → **New OAuth App**.
2. Fill in:
   - **Application name:** `The Delta CMS` (anything)
   - **Homepage URL:** your site, e.g. `https://the-delta.netlify.app`
   - **Authorization callback URL:** `https://api.netlify.com/auth/done`
     *(type this exactly)*
3. **Register application.** Copy the **Client ID**, then click
   **Generate a new client secret** and copy that too.

**3c. Give the keys to Netlify**

1. Netlify → your site → **Site configuration** → **Access & security** →
   find the **OAuth** / **Authentication providers** section →
   **Install provider** → **GitHub**.
2. Paste the **Client ID** and **Client Secret** from step 3b. Save.

> Netlify's exact menu wording changes occasionally. Their official guide is
> here if you get lost:
> https://docs.netlify.com/security/secure-access-to-sites/oauth-provider-tokens/

**3d. Log in**

Go to `https://yoursite.netlify.app/admin`, click **Login with GitHub**,
authorise once, and you're in.

---

## Step 4 — Writing & publishing articles

1. Visit `yoursite.netlify.app/admin` and log in.
2. Click **Articles → New Article**.
3. Fill in the headline, summary, topic, date, an optional lead photo, and
   write your story in the body editor.
4. Hit **Publish** (or save as a draft first).

Behind the scenes this saves your article to GitHub, Netlify notices, and
rebuilds the site automatically. Your new piece is live in 1–2 minutes — no
technical steps from you.

The four sample articles are placeholders. Delete them from the editor (or
remove the files in `src/content/articles/`) whenever you like.

---

## Step 5 — Make it yours

| To change… | Edit this |
|---|---|
| Site name, tagline, topics, contact email | `src/consts.ts` |
| The About page text | `src/pages/about.astro` |
| Colours, fonts, overall look | `src/styles/global.css` |
| The favicon (browser-tab icon) | `public/favicon.svg` |

**Important — set your real web address in two places** so Google and link
previews work correctly. Replace `https://the-delta.netlify.app` with your
actual address in:

- `astro.config.mjs` (the `SITE_URL` line)
- `public/robots.txt` (the `Sitemap:` line)

Commit, and the site rebuilds.

---

## Getting found on Google

The site already outputs everything search engines want: clean URLs, a
`sitemap-index.xml`, page titles, descriptions, and social-preview tags. To
speed up indexing:

1. Make sure `SITE_URL` in `astro.config.mjs` is your real address (above).
2. Create a free **Google Search Console** account:
   https://search.google.com/search-console
3. Add your site, verify it (Netlify makes this easy), and submit your
   sitemap URL: `https://yoursite.netlify.app/sitemap-index.xml`.
4. Publish regularly — fresh, original writing is what actually ranks.

---

## Want your own domain later (e.g. thedelta.org)?

Buy one from any registrar (Namecheap, Cloudflare, etc.), then in Netlify:
**Domain management → Add a domain**, and follow the prompts. Netlify gives you
free HTTPS automatically. Remember to update `SITE_URL` and `robots.txt` again.

---

## Running it on your own computer (optional)

You don't need to, but if you want to preview locally:

```
npm install
npm run dev      # opens a local preview, usually http://localhost:4321
npm run build    # makes the production version in /dist
```

Requires Node.js 20+ (https://nodejs.org).

---

## Folder map

```
the-delta/
├── public/
│   ├── admin/            ← the visual editor (Sveltia CMS)
│   │   ├── index.html
│   │   └── config.yml    ← set your GitHub repo here
│   ├── uploads/          ← photos you add in the editor land here
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── consts.ts         ← site name, tagline, topics  ← EDIT ME
│   ├── content.config.ts ← article fields/schema
│   ├── content/articles/ ← your articles (Markdown)
│   ├── layouts/          ← page shell + SEO tags
│   ├── components/        ← article card
│   ├── pages/            ← home, article, category, about, 404, RSS
│   ├── lib/              ← helpers (dates, reading time)
│   └── styles/           ← global.css (the design)
├── astro.config.mjs      ← set your live URL here
└── netlify.toml          ← Netlify build settings
```

Enjoy. Go tell the delta's stories.
