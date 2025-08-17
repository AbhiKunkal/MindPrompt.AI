# MindPrompt.AI

🚀 **MindPrompt.AI** is a full-stack AI SaaS application built with the **PERN stack** (PostgreSQL, Express, React, Node.js) and integrated with multiple AI-powered tools.  
The platform supports subscription billing, user authentication, and real-time AI services — all deployed on **Vercel** for scalability.

---

## ✨ Features
- 📝 **AI Writing Tools** – Article generator, blog title creator  
- 🎨 **AI Image Tools** – Image generator, background remover, object remover  
- 📄 **AI Document Tools** – Résumé analyzer with detailed feedback  
- 👤 **User Management** – Authentication, profile management, subscription billing  
- 🌍 **Community** – Publish and explore public creations with likes/dislikes  
- 📦 **Modern Stack** – React + Tailwind frontend, Express backend, Neon (serverless PostgreSQL)  
- ☁️ **Deployment** – Frontend + backend deployed seamlessly on Vercel  

---

## 🏗️ Tech Stack
**Frontend:** React, Vite, Tailwind CSS, React Router, Axios, React Hot Toast, React Markdown, Lucide Icons  
**Backend:** Node.js, Express, Multer, Cloudinary SDK, Axios, Neon (PostgreSQL), PDF-Parse  
**Authentication & Billing:** Clerk/Color platform (sign-in, plans, impersonation)  
**AI Integrations:** Google Gemini API, ClipDrop API, Cloudinary transformations  
**Deployment:** Vercel (Frontend + Backend)  

---

## 📂 Project Structure
```

MindPrompt.AI/
│── client/            # Frontend (React + Vite + Tailwind)
│   ├── src/
│   │   ├── assets/    # Static assets
│   │   ├── components # Reusable components (Navbar, Footer, Hero, etc.)
│   │   ├── pages/     # Application pages (Home, About, Tools, etc.)
│   │   └── ...
│   └── vite.config.js
│
│── server/            # Backend (Node.js + Express)
│   ├── routes/        # API routes
│   ├── controllers/   # Business logic for AI tools
│   ├── middlewares/   # Auth & plan checks
│   ├── models/        # Database models (PostgreSQL via Neon)
│   └── server.js
│
│── .gitignore
│── package.json
│── README.md

````

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/AbhiKunkal/MindPrompt.AI.git
cd MindPrompt.AI
````

### 2. Install dependencies

**Client (React frontend):**

```bash
cd client
npm install
```

**Server (Node.js backend):**

```bash
cd ../server
npm install
```

### 3. Environment Variables

Create a `.env` file in **server/** and add:

```
DATABASE_URL=your_neon_postgres_url
CLOUDINARY_URL=your_cloudinary_url
GEMINI_API_KEY=your_google_gemini_api_key
CLERK_SECRET_KEY=your_clerk_or_color_key
```

For client (**client/.env**):

```
VITE_API_URL=http://localhost:5000
```

### 4. Run the project locally

**Backend (Express server):**

```bash
cd server
npm run dev
```

**Frontend (React app):**

```bash
cd client
npm run dev
```

---

## 🚀 Deployment

The app is fully deployed on **Vercel**:

🌐 **Frontend:** [https://your-frontend.vercel.app](https://your-frontend.vercel.app)
🔗 **Backend:** [https://your-backend.vercel.app](https://your-backend.vercel.app)

---

## 📸 Screenshots (to add later)

* Home Page
* AI Article Generator
* AI Image Tool
* Résumé Analyzer

---

## 🛠️ Future Enhancements

* More AI tools (video, audio)
* Team/organization workspaces
* Advanced analytics dashboard
* Stripe billing (alternative to Color)

---

## 📜 License

This project is licensed under the **MIT License**.

```




