# hellowPixel Website

Official website for **hellowPixel**, a creative-tech studio focused on design, development, and digital growth.

The website showcases services, case studies, insights, and provides a contact form for inquiries.

---

## 🚀 Tech Stack

**Frontend:**
- React
- Vite
- TailwindCSS
- React Router

**Integrations:**
- EmailJS (contact form emails)
- Lucide Icons

**Deployment Ready:**
- GitHub
- Vercel / Netlify

---

## 📁 Project Structure

```
hellowpixel-web/
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── app/
│   │   ├── main.jsx
│   │   └── router.jsx
│   │
│   ├── assets/
│   │   ├── fonts/
│   │   │   └── Inter-Regular.woff2
│   │   └── images/
│   │       ├── backgrounds/
│   │       ├── hero/
│   │       ├── icons/
│   │       ├── logo/
│   │       │   ├── hellowpixel-logo.png
│   │       │   └── hellowpixel-only-logo.svg
│   │       └── videos/
│   │
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   └── ui/
│   │
│   ├── config/
│   │   ├── constants.js
│   │   ├── env.js
│   │   └── routes.js
│   │
│   ├── features/
│   │   ├── about/
│   │   ├── blog/
│   │   ├── case-studies/
│   │   ├── contact/
│   │   ├── home/
│   │   ├── not-found/
│   │   └── services/
│   │
│   ├── hooks/
│   │   ├── useMediaQuery.js
│   │   └── useScroll.js
│   │
│   ├── services/
│   │   ├── analytics.service.js
│   │   ├── contact.service.js
│   │   └── http.js
│   │
│   ├── store/
│   │   └── ui.store.js
│   │
│   ├── styles/
│   │   ├── fonts.css
│   │   ├── globals.css
│   │   ├── tailwind.css
│   │   └── theme.css
│   │
│   ├── tests/
│   │
│   ├── utils/
│   │   ├── cn.js
│   │   └── format.js
│   │
│   └── App.jsx
│
├── .env
├── .gitignore
├── eslint.config.js
└── index.html
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID=your_autoreply_template
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> Restart the dev server after adding variables.

---

## 📬 Contact Form

The contact form uses **EmailJS** to send:

- Inquiry email to `inquiry@hellowpixel.com`
- Auto-reply confirmation to the user

No backend is required for this version.

---

## 🛠 Run Locally

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

## 📦 Build Production

```bash
npm run build
```

Preview build:

```bash
npm run preview
```

---

## 🌐 Deployment

Recommended hosting:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

---

## 📄 License

© hellowPixel. All rights reserved.

---

## 🤝 Contributing

Currently a private project for hellowPixel.