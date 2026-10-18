# Rag Day — Intake 26

Official Intake 26 Rag Day microsite for 13 November 2026 at Habib Resort, Savar.

The corrected production site is packaged in `site.zip`; the archive contains `index.html` and the local resort-photo assets. The archive is extracted to `public/` during the Vercel build so image URLs remain local and reliable.

All 16 resort photos are bundled in `assets/` as WebP payloads. The Vercel build decodes them and publishes `public/assets/`, so the gallery can load without depending on the original WhatsApp filenames.
