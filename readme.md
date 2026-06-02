# Andiamo Ristorante — Website

A fast, custom, single-page website for Andiamo Ristorante (Bellevue, WA).
Built with plain HTML, CSS, and JavaScript — no build tools, no dependencies.
Just three files, ready to host for free on GitHub Pages.

```
index.html      → all the page content
styles.css      → all the styling / design
script.js       → menu tabs, mobile nav, scroll animations, review carousel
images/         → drop your own photos here
```

---

## Quick local preview

Double-click `index.html` to open it in your browser. That's it — there's
nothing to install.

---

## Step-by-step: put it on GitHub (free hosting)

You'll create a free GitHub account, upload these files, and turn on GitHub
Pages. No command line required.

### 1. Create a GitHub account
Go to <https://github.com> and sign up (free) if you don't already have one.

### 2. Create a new repository
1. Click the **+** in the top-right → **New repository**.
2. **Repository name:** `andiamo` (or anything you like).
3. Set it to **Public**.
4. Leave everything else unchecked and click **Create repository**.

### 3. Upload the website files
1. On the new repo page, click **uploading an existing file**
   (the link in the "Quick setup" box).
2. Drag in **index.html**, **styles.css**, **script.js**, and the
   **images** folder.
3. Scroll down and click **Commit changes**.

### 4. Turn on GitHub Pages
1. In your repo, go to **Settings** (top menu).
2. In the left sidebar, click **Pages**.
3. Under **Branch**, choose **main** and **/ (root)**, then click **Save**.
4. Wait ~1 minute. The page will show your live URL, something like:
   `https://YOUR-USERNAME.github.io/andiamo/`

That link is your live website. 🎉

### 5. (Optional) Use your real domain — andiamobellevue.com
1. Create a file named **CNAME** in the repo (Add file → Create new file),
   with a single line: `www.andiamobellevue.com`
2. At your domain registrar (wherever andiamobellevue.com is managed), add a
   **CNAME record** for `www` pointing to `YOUR-USERNAME.github.io`.
3. Back in **Settings → Pages**, type `www.andiamobellevue.com` in the
   **Custom domain** box and save. Tick **Enforce HTTPS** once it's available.

> Note: your current domain is managed by SpotHopper. You'd need to move DNS
> to a registrar you control (e.g. Cloudflare, GoDaddy, Namecheap) before
> pointing it at GitHub. Happy to walk you through that separately.

---

## How to update content later

Everything is plain text you can edit right inside GitHub (click any file →
the pencil icon → edit → **Commit changes**). The site updates in under a minute.

- **Prices / dishes** — edit the `<article class="dish">` blocks in `index.html`.
- **Hours / address / phone** — search `index.html` for the "VISIT" section.
- **Reviews** — edit the `<blockquote class="review">` blocks.
- **Colors** — change the variables at the very top of `styles.css`
  (`--wine`, `--terracotta`, `--gold`, `--cream`).

### Adding your own photos
1. Put your images in the `images/` folder (e.g. `images/carbonara.jpg`).
2. To use a photo in the gallery, find a `.gtile` in `index.html` and add a
   background. The easiest way: in `styles.css`, target a tile, e.g.

   ```css
   .gtile[style*="--i:1"]{
     background-image: linear-gradient(rgba(61,14,22,.35), rgba(61,14,22,.55)),
                       url('images/bread.jpg');
     background-size: cover;
     background-position: center;
   }
   ```
3. For the social-share preview image, add `images/og-image.jpg`
   (recommended size 1200×630).

---

## What changed vs. the old SpotHopper site
- Custom, brand-forward design (Fraunces + Hanken Grotesk typography).
- Loads almost instantly — three static files, zero third-party page builder.
- Tabbed, easy-to-scan menu with all current dishes and prices.
- Mobile-first navigation and scroll animations.
- You own and control 100% of the code and content.
- All existing links preserved: Yelp reservations, catering, private parties,
  gift cards, phone, email, and social profiles.
