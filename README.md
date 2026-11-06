# Taste of Africa — Cultural Culinary Website

Welcome to the **Taste of Africa** website project. This is a multi-page web platform designed to celebrate and preserve Africa's diverse culinary traditions, ingredients, and cultural food heritage. 

Built using semantic **HTML5**, modern **Vanilla CSS**, and interactive **JavaScript (ES6)**, the site delivers a responsive, accessible, and interactive experience across all modern devices.

---

## Live Pages Overview

The website consists of 5 dedicated, interconnected pages:

1. **Home Page (`index.html`)**
   - Welcoming hero banner with African feast photography and storytelling.
   - Cultural introduction with an embedded YouTube documentary.
   - Featured dishes showcase (Jollof Rice, Injera & Tibs, Golden Tagine) using `<figure>` and `<figcaption>`.
   - Latest food trends section using semantic `<article>` cards and `<mark>` highlights.
   - Newsletter subscription form in the footer.

2. **Recipes Page (`recipes.html`)**
   - Interactive recipe catalog featuring signature African dishes (West, East, North, and Southern Africa).
   - Dynamic region filter buttons (`All`, `West Africa`, `East Africa`, `North Africa`, `Southern Africa`).
   - Expandable step-by-step cooking instructions using `<details>` and `<summary>`.
   - Recipe ingredients grid and nutritional facts tables.
   - Embedded cooking technique video and geographic country of origin map.
   - Interactive "Favorite" button saved to browser `localStorage`.

3. **Culinary Regions Page (`regions.html`)**
   - In-depth culinary journey across West Africa, East Africa, and North Africa.
   - Cultural history, indigenous staples, spices, and cooking techniques highlighted with `<mark>`.
   - Links to regional recipes and an embedded culinary field notes documentary video.

4. **About Us Page (`about.html`)**
   - Organizational mission and vision for preserving African food heritage.
   - Historical overview of African cuisine and global food diaspora.
   - Interactive Google Map featuring a culinary food landmark (Makola Market in Accra, Ghana) with a custom map pin icon.

5. **Contact Page (`contact.html`)**
   - Two-column card uniting an interactive inquiry form and community contact details.
   - Semantic form fields: Name (`text`), Email (`email`), Country (`input` with `<datalist>` suggestions), and Message (`textarea`).
   - JavaScript form validation ensuring messages exceed 20 characters before displaying a personalized success confirmation.
   - Embedded video feature.

---

## Interactive Features (JavaScript & DOM)

All interactive functionality is powered by clean, dependency-free JavaScript in `script.js`:

- **Dynamic Recipe Filter:**
  Filters recipe cards dynamically on click without reloading the page by matching `data-region` attributes.
- **Recipe Favorites (Local Storage Persistence):**
  Users can tap the heart button on any recipe card to save it. Favorites turn active and remain saved in browser `localStorage` across page refreshes.
- **Form Validation & Dynamic Feedback:**
  Intercepts contact form submissions using `preventDefault()`. Validates that messages are longer than 20 characters. Upon valid submission, the form is replaced with a personalized confirmation box greeting the user by name.
- **Theme Switcher (Dark Mode & Light Mode):**
  Allows users to toggle between a warm cream palette and an earth-toned dark mode. The preference is automatically remembered in `localStorage`.
- **Responsive Hamburger Navigation:**
  On screens under 900px, the header converts to a clean hamburger menu on the right. Tapping the hamburger opens a mobile dropdown listing all pages, a direct "Theme" toggle, and "Explore Recipes", closing automatically upon link selection or clicking outside.

---

## Design System & Styling (CSS)

The visual design is styled entirely with vanilla CSS in `styles.css`:

- **Color Palette:** Warm, spice-inspired tones including Terracotta (`#b84a28`), Ochre Gold (`#cda261`), Deep Cocoa Brown (`#2f1e16`), and Warm Cream (`#fbf8f2`).
- **Typography:** Google Fonts pairing using **Playfair Display** (editorial serif headings) and **Plus Jakarta Sans** (clean, readable body text).
- **Responsive Layout:** CSS Grid and Flexbox with breakpoints at `900px` and `640px` for seamless mobile and desktop browsing.
- **Accessibility:** Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`), visible focus outlines, form labels, and descriptive `aria-` attributes.

---

## Project Structure

```text
taste_of_africa_website_project/
│
├── index.html         # Home page with hero, video, featured dishes, trends
├── recipes.html       # Recipe catalog with filter, details, table, map
├── regions.html       # Culinary regions guide with culture and video
├── about.html         # Mission, history, and landmark map
├── contact.html       # Contact form with datalist and validation
│
├── styles.css         # Unified stylesheet with design system and dark mode
├── script.js          # Unified JavaScript for filter, favorites, theme, form
└── README.md          # Project documentation and rubric review
```

---

## Getting Started

To view and run the project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/charleswereangoye/taste_of_africa_website_project.git
   cd taste_of_africa_website_project
   ```

2. **Open the website:**
   - Open `index.html` directly in any modern web browser (Chrome, Firefox, Safari, Edge).
   - Alternatively, use the **Live Server** extension in VS Code IDE for auto-reloading during development.

---

## Technologies Used

- **HTML5:** Semantic document structuring and accessible media embedding.
- **CSS3:** Custom properties (CSS variables), Grid, Flexbox, media queries, and keyframe transitions.
- **JavaScript (ES6):** DOM selection, event listeners, array manipulation, and Web Storage API (`localStorage`).
- **Google Fonts:** Playfair Display and Plus Jakarta Sans.
- **Embedded Media:** Google Maps Embed API and YouTube Embed API.
- **Flowstep-ai:** UI/UX designing and design inspiration (https://app.flowstep.ai/file?activeFileId=58c64815-f69f-487b-9e3c-638de5d6c230) 
