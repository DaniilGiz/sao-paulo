# T3 Frontend Test Task

Static adaptation of the downloaded `g1.globo.com` article page based on the provided technical specification.

## Overview

This project is based on the downloaded page:

`https://g1.globo.com/sp/sao-paulo/noticia/2023/07/04/ze-celso-e-internado-apos-incendio-atingir-apartamento-onde-mora-em-sp.ghtml`

The page was not rebuilt from scratch. The downloaded layout and styles were preserved as much as possible, while unnecessary dynamic functionality was removed or replaced with static equivalents.

## Implemented Requirements

- preserved the downloaded page structure instead of rebuilding the page from scratch
- removed unnecessary scripts and dynamic functionality that were not required for the landing page
- replaced the article body content with the provided text
- removed media and extra article-body elements that were not required by the specification
- added a lead form at the end of the article
- made all form fields required:
  - first name
  - last name
  - email
  - phone number
- added basic client-side validation
- integrated `intlTelInput` for phone input formatting
- configured page buttons/links to scroll to the form
- added a separate `thank-you.html` page after successful submission
- preserved the general visual style of the original website
- formatted custom working files for readability

## Project Structure

- `index.html` — main landing page
- `thank-you.html` — thank you page shown after form submission
- `css/custom.css` — custom styles for the form and static replacements
- `js/main.js` — form validation, phone input setup, scroll behavior, menu behavior
- `images/` — local static assets

## How to Run

Because this is a static project, you can open it locally in a browser.

Recommended options:
1. open `index.html` directly
2. or run a simple local static server
