# Pinhole Photography

A one-page, responsive website for **Pinhole Photography**, a small photography agency. Built for Web Dev Challenge 5 from the supplied brief, copy and brand assets.

## View it

Open `index.html` in any modern browser. There is no build step and no dependencies.

## Project structure

```
index.html          the page
css/styles.css      all styles (mobile-first)
js/main.js          mobile navigation + contact form validation
assets/fonts/       Montserrat Thin (headings), Open Sans (body)
assets/images/      logo, favicon, hero and portfolio photos
wireframes/         mobile and large-screen wireframes (HTML source + PDF)
tests/              in-browser test page for layout, menu and form behaviour
```

## Brief checklist

- [x] Review brief and brand assets
- [x] Wireframe: mobile ([PDF](wireframes/wireframe-mobile.pdf))
- [x] Wireframe: large screen ([PDF](wireframes/wireframe-desktop.pdf))
- [x] HTML structure
- [x] CSS styling: brand colour `#004156`, max 3 colours, max 2 fonts
- [x] Our Story section
- [x] How Pinhole Photography Works section
- [x] Our Portfolio gallery (9 images, each with a title)
- [x] Testimonials section
- [x] Contact form (Name, Email, Message)
- [x] Responsive layout
- [x] Test and review
- [x] Package: wireframe PDFs + zipped site (attached to the monday task)

To rebuild the package, zip `index.html`, `css/`, `js/` and `assets/` into `dist/pinhole-site.zip`. The `dist/` folder is git-ignored.

## Brand rules

| Rule | Value |
| --- | --- |
| Brand colour | `#004156` |
| Other colours | `#ffffff` (white), `#333333` (text) |
| Heading font | Montserrat Thin |
| Body font | Open Sans |

These three colours are the only colour values in the stylesheet. Tints and transparent overlays are derived from them with `color-mix()`.

## Testing

| Check | Result |
| --- | --- |
| Brand rules: only 3 colour values, only 2 font families | Pass |
| Every `src`/`href`/`url()` resolves to a file in the repo | Pass |
| Browser tests (`tests/browser-tests.html`) at 375, 768 and 1440px: no horizontal overflow, menu open/close/Escape, form validation, accessibility basics | 29/29 pass |
| W3C CSS validator | No errors |
| Nu HTML checker | No errors (2 info notes about `role="list"`, kept on purpose because Safari drops list semantics when list bullets are removed) |
| Visual review at phone, tablet and desktop widths | Pass |

To run the browser tests, open `tests/browser-tests.html` through a local web server, or in Edge/Chrome started with `--allow-file-access-from-files`. Results print on the page.

## Notes

- **The contact form doesn't send anything.** It validates the fields and shows a thank-you message, but the site has no backend. Connect it to a form or email service before going live.
- **The hero photo was resized.** The original `mountains.jpg` (6914×4463, 10 MB) became 1920px and 1200px wide JPEGs for fast loading. Phones get the 1200px version.
- **Testimonials have no client names** because the brief doesn't give any. Each card has a neutral label taken from the quote itself.
