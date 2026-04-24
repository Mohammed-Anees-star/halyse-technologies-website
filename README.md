# Halyse Technologies — Official Website

**Halyse Technologies Private Limited** — AI & Data Solutions for Modern Businesses

A professional, enterprise-grade consulting website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 15 (App Router) | React framework with SSR/SSG |
| TypeScript | Type-safe development |
| Tailwind CSS v4 | Utility-first CSS framework |
| Lucide React | Icon library |
| Framer Motion | Animations (optional) |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Navbar + Footer)
│   ├── page.tsx            # Home page
│   ├── solutions/          # Solutions page
│   ├── industries/         # Industries page
│   ├── case-studies/       # Case Studies page
│   ├── our-approach/       # Our Approach page
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── privacy/            # Privacy Policy
│   └── terms/              # Terms of Service
└── components/
    ├── Navbar.tsx           # Sticky responsive navigation
    ├── Footer.tsx           # Footer with links
    ├── PageHero.tsx         # Page hero banner (reusable)
    ├── SectionHeader.tsx    # Section title component (reusable)
    └── ContactForm.tsx      # Interactive contact form
```

---

## 🛠 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/halyse-technologies.git
cd halyse-technologies

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended — Free)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select your GitHub repo
4. Click **Deploy**

Vercel auto-detects Next.js and deploys with zero configuration.

### Option 2: Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com) → New Site from Git
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Deploy

### Option 3: Self-Hosted (VPS/Cloud)

```bash
npm run build
npm start          # Runs on port 3000
```

Use Nginx or Caddy as a reverse proxy.

---

## ✏️ Customization Guide

### Update Company Details

| File | What to Update |
|------|---------------|
| `src/app/layout.tsx` | SEO metadata, site title |
| `src/components/Navbar.tsx` | Logo, navigation links |
| `src/components/Footer.tsx` | Contact info, social links |
| `src/app/contact/page.tsx` | Phone, email, address |

### Update Contact Form

The contact form in `src/components/ContactForm.tsx` currently simulates a submission. To connect it to a real backend:

**Option A — Formspree (easy):**
```tsx
const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
```

**Option B — Next.js API Route:**
Create `src/app/api/contact/route.ts` and update the form's fetch URL to `/api/contact`.

### Add Your Logo

Replace the letter "H" in `Navbar.tsx` and `Footer.tsx` with your actual logo:

```tsx
import Image from "next/image";
<Image src="/logo.png" alt="Halyse Technologies" width={36} height={36} />
```

Place your logo at `public/logo.png`.

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, solutions overview, why choose us, CTA |
| Solutions | `/solutions` | All 6 solution areas with capabilities |
| Industries | `/industries` | 7 industries with use cases |
| Case Studies | `/case-studies` | 3 sample case studies |
| Our Approach | `/our-approach` | 6-stage delivery methodology |
| About | `/about` | Company overview, mission, values |
| Contact | `/contact` | Contact form + details |

---

## 🎨 Design System

- **Primary color:** Blue-700 (`#1d4ed8`)
- **Background:** White + Gray-50
- **Dark sections:** Gray-950
- **Font:** Inter (Google Fonts)
- **Border radius:** Rounded-xl / Rounded-2xl throughout

---

## 📧 Contact Form Integration

To make the contact form functional, add a form handler. The simplest free option is [Formspree](https://formspree.io).

1. Create a free account at formspree.io
2. Create a new form and get your endpoint
3. Update `ContactForm.tsx`:

```tsx
const res = await fetch("https://formspree.io/f/YOUR_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
if (res.ok) setSubmitted(true);
```

---

Built with ❤️ for **Halyse Technologies Private Limited**
