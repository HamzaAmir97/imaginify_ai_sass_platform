# Imaginfy - AI Image Transformation SaaS Platform

Imaginfy is a SaaS platform that leverages the power of AI to deliver stunning image transformations. Built using modern technologies like **Next.js**, **TypeScript**, and **Cloudinary AI**, it allows users to enhance images, remove unwanted elements, and more — all through a clean, responsive UI.

---

## 🚀 Key Features

- **🔐 Authentication** – Powered by [Clerk](https://clerk.dev) for secure login and session management.
- **🖼️ AI Transformations**
  - Generative Fill
  - Object Removal
  - Object Recoloring
  - Background Removal
  - Image Restoration
- **🧾 Credits System** – Pay-as-you-go with credits for transformations.
- **🔍 Smart Search** – Find images quickly in your gallery.
- **📁 Image Comparison** – View original vs. transformed versions.
- **📥 Downloads** – Save full-res transformed images.
- **👤 Profile Dashboard** – View user info and credit balance.
- **💸 Stripe Payments** – Integrated checkout for buying credits.
- **📱 Responsive UI** – Works seamlessly on all device sizes.

---

## 🛠 Tech Stack

| Role               | Tech Used                                                                 |
|--------------------|---------------------------------------------------------------------------|
| **Framework**      | ![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js)        |
| **Language**       | ![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white) |
| **Auth**           | ![Clerk](https://img.shields.io/badge/Clerk-F6F6F6?logo=clerk&logoColor=black) |
| **Database**       | ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?logo=mongodb&logoColor=white) |
| **AI & Storage**   | ![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?logo=cloudinary&logoColor=white) |
| **Styling**        | ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwind-css&logoColor=white) |
| **UI Components**  | ![Shadcn/UI](https://img.shields.io/badge/Shadcn_UI-1E293B?logo=tailwind-css&logoColor=white) |
| **Payments**       | ![Stripe](https://img.shields.io/badge/Stripe-635BFF?logo=stripe&logoColor=white) |
| **Deployment**     | ![Vercel](https://img.shields.io/badge/Vercel-black?logo=vercel&logoColor=white) |

---

## 📁 Project Structure

```bash
/
├── app/
│   ├── (auth)/               # Auth pages (login, signup)
│   ├── (root)/               # Main app routes (transformations, profile, credits)
│   │   ├── transformations/
│   │   │   └── [id]/         # Image details & update
│   └── layout.tsx            # Shared layouts
├── api/                      # API routes (e.g. Stripe webhook)
├── components/
│   ├── shared/               # Header, Sidebar, etc.
│   └── ui/                   # UI primitives
├── constants/                # App-wide constants
├── lib/
│   ├── actions/              # Server actions
│   ├── database/             # Mongoose models and connection
│   └── utils.ts              # Utility functions
├── public/                   # Static assets
└── styles/                   # Global styles
```

---

## 🧪 Getting Started

Install dependencies and launch the app:

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000) to view the application.

You can start editing the page by modifying:
```bash
app/page.tsx
```

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js Interactive Tutorial](https://nextjs.org/learn)
- [Cloudinary Docs](https://cloudinary.com/documentation)
- [Stripe Checkout Docs](https://stripe.com/docs/checkout)

---

## 🚀 Deploy

Deploy the app easily via [Vercel](https://vercel.com). For details, see:
- [Next.js Deployment Docs](https://nextjs.org/docs/app/building-your-application/deploying)

---

> Crafted with ❤️ to bring your images to life using the power of AI ✨
