# Mohammadalmas & Tasmin — Wedding Invitation

A mobile-first Islamic royal wedding invitation built with Next.js, Tailwind CSS and Framer Motion.

## GitHub Pages deployment (repository: `demo-invite`)

This project is configured for GitHub Pages at `https://YOUR-GITHUB-USERNAME.github.io/demo-invite/`.

1. Upload/replace the project files in the **root** of the `demo-invite` repository. Make sure the `.github/workflows/deploy.yml` file is included. Do not upload the ZIP itself.
2. In GitHub, open the repository → **Settings** → **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab. The workflow named **Deploy wedding invitation to GitHub Pages** should start after the files are committed. If it does not, open that workflow and tap **Run workflow**.
5. Wait for both the Build and Deploy jobs to finish successfully. Then open `https://YOUR-GITHUB-USERNAME.github.io/demo-invite/`.

The first deployment can take a few minutes. If the old README view remains, refresh after the workflow succeeds.

## Local development

Requires Node.js 18.17 or newer.

```bash
npm install
npm run dev
```

## Invitation details to update before sharing

- Exact venue name and address
- Ceremony start time and any additional event schedule
- RSVP contact or a connected RSVP service
- Optional couple/family photos
- Optional background audio file and playback controls

The venue and timing are intentionally not invented; the page currently says they will be shared soon.

## Implementation notes

- Static export is enabled for GitHub Pages. The repository path `/demo-invite` is configured as the base path.
- The music control is currently a visual placeholder; no audio file is bundled.
- RSVP submission is not connected to a database or messaging service yet.
- The date is set to 1 January 2027, Ahmedabad time (Asia/Kolkata).
