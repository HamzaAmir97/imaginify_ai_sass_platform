# Imaginfy - AI Image Transformation SaaS Platform

A powerful AI-driven SaaS platform that allows users to effortlessly transform images using next-gen AI tools. Imaginfy enables tasks like object removal, background editing, and more through an intuitive, credit-based interface.

---
## 📖 screenshots


<div align="center">

<table>
  <tr>
    <td><img src="/screenshots/imaginify (1).png" alt="Screen 1" width="200"/></td>
    <td><img src="/screenshots/imaginify (2).png" alt="Screen 1" width="200"/></td>
    <td><img src="/screenshots/imaginify (3).png" alt="Screen 1" width="200"/></td>
    <td><img src="/screenshots/imaginify (4).png" alt="Screen 1" width="200"/></td>
    <td><img src="/screenshots/imaginify (5).png" alt="Screen 1" width="200"/></td>

  </tr>
  <tr>
    <td><img src="/screenshots/imaginify (6).png" alt="Screen 1" width="200"/></td>
    <td><img src="/screenshots/imaginify (7).png" alt="Screen 1" width="200"/></td>
    <td><img src="/screenshots/imaginify (8).png" alt="Screen 1" width="200"/></td>
    <td><img src="/screenshots/imaginify (9).png" alt="Screen 1" width="200"/></td>
    <td><img src="/screenshots/imaginify (10).png" alt="Screen 1" width="200"/></td>
    <td><img src="/screenshots/imaginify (11).png" alt="Screen 1" width="200"/></td>
  </tr>
</table>

</div>
## 🗂 Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
5. [Environment Variables](#environment-variables)
6. [Project Structure](#project-structure)
7. [Contributing](#contributing)
8. [License](#license)

---

## 📖 Overview

Imaginfy empowers users to:

- Upload and transform images with AI
- Apply powerful image effects like fill, recolor, background removal, and restoration
- Track usage through credits
- Manage a personal gallery and download results
- Enjoy seamless auth, modern UI, and a fully responsive design

---

## 🚀 Features

- **AI-Powered Transformations** – Generative fill, object removal, recoloring, background removal, and image restoration via Cloudinary AI
- **Authentication** – Powered by Clerk for user sessions and auth flows
- **Credit System** – Pay-per-use image transformation with Stripe integration
- **Gallery & Search** – Easily navigate and manage transformed images
- **Image Comparison** – See original vs transformed versions
- **Responsive UI** – Clean layout using Tailwind CSS + Shadcn
- **Download & Share** – Export final images in high resolution

---

## 🧰 Tech Stack

| Area              | Tech Used                                                                 |
|-------------------|--------------------------------------------------------------------------|
| 🧱 Framework       | ![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js)        |
| 🧑‍💻 Language      | ![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white) |
| 🎨 Styling         | ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwind-css&logoColor=white) |
| 🔐 Authentication  | ![Clerk](https://img.shields.io/badge/Clerk-ffffff?logo=clerk&logoColor=black) |
| 🛢 Database        | ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?logo=mongodb&logoColor=white) |
| ☁️ AI & Storage    | ![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?logo=cloudinary&logoColor=white) |
| 💳 Payments        | ![Stripe](https://img.shields.io/badge/Stripe-635BFF?logo=stripe&logoColor=white) |
| 📦 UI Components   | ![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-1E293B?logo=tailwind-css&logoColor=white) |
| 🚀 Deployment      | ![Vercel](https://img.shields.io/badge/Vercel-black?logo=vercel&logoColor=white) |

---

## ⚙️ Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/imaginify.git

# Navigate into the project directory
cd imaginify

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory with:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=
CLERK_WEBHOOK_SIGNING_SECRET=

# MongoDB
MONGODB_URL=

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
NEXT_PUBLIC_SERVER_URL=
```

---

## 📁 Project Structure

```bash
imaginify/
├── app/                    # Application routes
│   ├── (auth)/             # Login / Sign-up pages
│   ├── (root)/             # Main app layout & routes
│   │   ├── transformations/
│   │   │   └── [id]/       # Image details
│   └── layout.tsx          # Layout files
├── api/                    # Stripe webhook
├── components/             # UI & shared components
├── lib/                    # Actions, database logic, utilities
├── public/                 # Static files
├── styles/                 # Tailwind and global styles
├── .env.local              # Environment variables
├── tailwind.config.ts      # Tailwind config
├── tsconfig.json           # TypeScript config
├── next.config.js          # Next.js config
└── package.json            # Project info and scripts
```

---

## 🤝 Contributing

Pull requests are welcome. Suggest improvements, report bugs, or add features — every bit helps.

---


> Built with 💡and ❤️ to help creatives and developers effortlessly transform their visuals through the power of AI. ✨
