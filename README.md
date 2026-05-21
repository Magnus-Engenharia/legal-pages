# Magnus Engineering Legal Pages

Static legal pages for Magnus Engineering apps, designed to deploy on Cloudflare Pages.

## Public URLs

Recommended production URLs:

- `https://magnusengineering.tech/legal/recibo-facil/privacy/`
- `https://magnusengineering.tech/legal/recibo-facil/terms/`
- `https://magnusengineering.tech/legal/recibo-facil/support/`
- `https://magnusengineering.tech/legal/recibo-facil/delete-account/`

Short redirects are included for:

- `/privacy`
- `/terms`
- `/support`
- `/delete-account`
- `/recibo-facil/privacy`
- `/recibo-facil/terms`
- `/recibo-facil/support`
- `/recibo-facil/delete-account`

## Cloudflare Pages

Use these settings when connecting this repository to Cloudflare Pages:

- Framework preset: `None`
- Build command: leave empty
- Build output directory: `/`
- Root directory: `/`

Then attach the custom domain in the Pages project:

- `magnusengineering.tech`
- `www.magnusengineering.tech`

If Cloudflare reports conflicting DNS records for `@` or `www`, remove only the conflicting `A`, `AAAA`, or `CNAME` records for those hostnames. Keep mail records such as `MX`.

## Editing

Each page is plain HTML and shares `styles.css`.

Before submitting app store metadata, confirm that all support and privacy contact emails are active.
