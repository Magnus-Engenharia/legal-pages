# Magnus Engineering Website

Static landing page and legal pages for Magnus Engineering apps, designed to deploy on Cloudflare Pages.

## Public URLs

Recommended production URLs:

- `https://magnusengineering.tech/`
- `https://magnusengineering.tech/legal/`
- `https://magnusengineering.tech/legal/recibo-facil/privacy/`
- `https://magnusengineering.tech/legal/recibo-facil/terms/`
- `https://magnusengineering.tech/legal/recibo-facil/support/`
- `https://magnusengineering.tech/legal/recibo-facil/delete-account/`
- `https://magnusengineering.tech/legal/nulev/privacy/`
- `https://magnusengineering.tech/legal/nulev/terms/`
- `https://magnusengineering.tech/legal/nulev/support/`
- `https://magnusengineering.tech/legal/nulev/delete-account/`

Portuguese Brazilian is the default language for legal documents. English and Spanish are available at:

- `https://magnusengineering.tech/legal/en/`
- `https://magnusengineering.tech/legal/es/`

Short redirects are included for:

- `/privacy`
- `/terms`
- `/support`
- `/delete-account`
- `/recibo-facil/privacy`
- `/recibo-facil/terms`
- `/recibo-facil/support`
- `/recibo-facil/delete-account`
- `/nulev/privacy`
- `/nulev/terms`
- `/nulev/support`
- `/nulev/delete-account`
- `/nulev-mobile/privacy`
- `/nulev-mobile/support`
- `/nulev-mobile/delete-account`

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

Pages are generated from `scripts/render-site.mjs` and share `styles.css`.

After editing copy or document structure, run:

```sh
node scripts/render-site.mjs
```

Before submitting app store metadata, confirm that all support and privacy contact emails are active.
