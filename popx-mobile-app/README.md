# PopX Mobile App

Welcome to **PopX** — a simple mobile-focused React app for user onboarding.  
It allows users to **register**, **login**, and manage their **account settings** with a clean and modern design built using **Tailwind CSS**.

---

## ✨ Features
- Mobile-first, responsive design
- Create Account (Register)
- Login to an account
- Account Settings page
- Smooth navigation with React Router
- Tailwind CSS for fast styling
- Reusable components (**Button**, **Input**)

---

## 📂 Project Structure

```bash
src/
│
├── assets/          # Static assets like user images
├── components/      
│   ├── Button.jsx   # Reusable Button component
│   └── Input.jsx    # Reusable Input component
├── pages/           
│   ├── Welcome.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   └── AccountSettings.jsx
├── App.jsx          # Main application routes
├── main.jsx         # Vite entry file
└── index.css        # Tailwind CSS setup
