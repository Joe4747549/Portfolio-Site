# D. Joseph Carpenter Portfolio Website

This repository contains a static personal portfolio website for D. Joseph Carpenter. The site highlights research, data analytics, dashboard work, application development, resume materials, and contact information.

## Overview

The project is built as a multi-page static site using:

- HTML for page content and structure
- CSS in `site.css` for shared styling
- Vanilla JavaScript in `site.js` for responsive navigation and dropdown behavior

There is no build step or framework dependency. Each page can be opened directly in a browser.

## Site Pages

- `index.html` - landing page and main portfolio introduction
- `About_me.html` - background, focus areas, and tools/skills
- `Research.html` - research projects and methods
- `Dashboards.html` - dashboard portfolio section
- `appDev.html` - application development showcase
- `Blog.html` - blog landing page
- `Contact_Info.html` - contact details
- `Resume_CV.html` - resume and CV downloads
- `Send_Message.html` - contact form page
- `Thank_You.html` - confirmation page
- `404.html` - not found page

## Key Assets

- `site.css` - shared site styling
- `site.js` - mobile navigation and dropdown interactions
- `Headshot.jpg` - main profile image
- `UTC logo.png` - favicon/site branding
- `Current CV.pdf` - downloadable CV
- `Academic Research Resume.pdf` - downloadable resume

## Running Locally

Because this is a static website, you can preview it in either of these ways:

1. Open `index.html` directly in your browser.
2. Serve the folder with a lightweight local server if you prefer testing links in a browser-like environment.

Example with Python:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Notes

- The site is organized around simple standalone HTML pages rather than templates or components.
- Some content sections currently include placeholder areas for future projects, dashboard embeds, or blog content.
- Contact and portfolio content can be updated by editing the corresponding HTML files directly.
