# Orientation for future editors

This is the custom marketing site for **qeegcourses.com**.

## Hybrid with systeme.io

- This codebase is Home, Courses, Course Clips, About, Contact only.
- **Do not** add checkout, carts, or order forms.
- **Do not** add newsletter or “message us” input boxes — they are not connected to systeme.io.
- Every enroll CTA uses a full `salesLink` from `src/data/courses.ts` that points at a systeme.io page (example: `https://qeeg.systeme.io/earlymemberupgrade`).
- **Take me to my courses** opens `site.sales.memberLoginUrl` (`https://systeme.io/en/login`).
- Course support email is `joshua.moore@altbehtherapy.com` (`src/data/site.ts`).
- Authorized BeeMedic Training Partner badge: `public/images/beemedic-authorized-partner.png`. Copy must not say the manufacturer sets the training standard.
- Course clips: append to `src/data/clips.ts` (`youtubeId` only — no empty slots).

## Add a new class (the 15-course path)

1. Open `src/data/courses.ts`.
2. Append an object. Copy an existing one.
3. Unique `id`. Set `salesLink` to the systeme.io URL, or `null` for “Inquire”.
4. Put the image in `/public/images/` and set `imageSrc` / `imageAlt` / `imageNote`.
   Use `imageFit: "contain"` for software screenshots and maps.
5. `featured: true` also shows it on Home.

## Add a photo to the carousel

Append an object to `src/data/gallery.ts`. It appears on Home (hero) and About.

## Other common edits

| Change | File |
| --- | --- |
| Phone, email, clinic, member login URL | `src/data/site.ts` |
| FAQ copy | `src/data/faqs.ts` |
| Colors, fonts | `src/styles.css` (`@theme`) |
| Nav items | `src/components/layout/SiteHeader.tsx` |
| Carousel photos | `src/data/gallery.ts` |
| Course clips | `src/data/clips.ts` |

## SEO

Per-page titles and descriptions live in each route’s `head` via `src/lib/seo.ts`. JSON-LD is in `src/components/seo/JsonLd.tsx`.
