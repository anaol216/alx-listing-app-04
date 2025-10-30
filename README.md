# ALX Listing App

A simple Next.js project that demonstrates an Airbnb-style listing page.

## 📌 Features
- Built with **Next.js** (Pages Router)
- **TypeScript** for type safety
- **ESLint** for clean code
- **TailwindCSS** for modern responsive UI
- Reusable components (Card, Button)

## 📂 Project Structure
alx-listing-app/
 ┣ components/          # Reusable UI components
 ┃ ┗ common/            # Shared components like Card, Button
 ┣ constants/           # Global constants (API URLs, UI strings, configs)
 ┣ interfaces/          # TypeScript interfaces & types
 ┣ pages/               # Next.js pages (classic Pages Router)
 ┃ ┣ api/               # API routes
 ┃ ┣ _app.tsx           # Custom App (imports global CSS)
 ┃ ┗ index.tsx          # Home page
 ┣ public/assets/       # Static images, icons, SVGs
 ┣ styles/              # Global styles (Tailwind config + globals.css)
 ┃ ┗ globals.css
 ┣ tailwind.config.js   # Tailwind settings
 ┣ postcss.config.js    # PostCSS config
 ┣ tsconfig.json        # TypeScript config
 ┣ package.json         # Dependencies & scripts
 ┗ README.md            # Documentation



## 🚀 Run Locally
```bash
# Install dependencies
npm install

# Run dev server
npm run dev

Open http://localhost:3000
 in your browser.


---

## ✅ 6. Run & Verify
```bash
cd alx-listing-app
npm run dev


Then visit 👉 http://localhost:3000